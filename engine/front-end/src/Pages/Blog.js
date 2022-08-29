import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Footer from '../Footer';
import Loader from '../Components/Loader';
import I18n from '../i18n';
import Utils from '../Utils';
import Router from '../Router';
import {Converter} from "react-showdown";

const styles = theme => ({
    root: {
        width: '100%',
    },
    header: {
        width: '90%',
        background: '#123456',
        paddingTop: 10,
        paddingBottom: 30,
        paddingLeft: '10%'
    },
    headerTitle: {
        color: '#FFFFFF',
        fontSize: 48,
    },
    headerNotice: {
        color: '#FFFFFF',
        fontSize: 24,
    },
    pages: {
        textAlign: 'center',
    },
    pagePage: {
        maxWidth: 1280,
        width: '80%',
        textAlign: 'left',
        padding: 10,
        margin: 20,
    },
    pageLogoDiv:{
        width: '100%',
        height: 250,
        textAlign: 'center'
    },
    pageLogo: {
        height: '100%',
    },
    pageTitle: {
        fontSize: 32,
        fontFamily: 'Open Sans,sans-serif',
        fontWeight: 400,
        lineHeight: '42px',
    },
    pagePosted: {
        fontSize: 14,
        fontFamily: 'Open Sans,sans-serif',
    },
    pageDesc: {
        fontWeight: 400,
        fontFamily: 'Open Sans,sans-serif',
        marginTop: 50,
    },
    pageTitleNextButton: {
        float: 'left'
    },
    pageTitlePrevButton: {
        float: 'right'
    }
});

const converter = new Converter();

class Blog extends Router {
    constructor(props) {
        super(props);
        this.state = {
            content: null,
            loadTimeout: false,
            text: ''
        };

        this.load();

        // Give 300ms to load the page. After that show the loading indicator.
        setTimeout(() => !this.state.content && this.setState({loadTimeout: true}), 300);

        this.contentRef = React.createRef();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.language !== nextProps.language) {
            this.page && this.loadBlog(this.page, nextProps.language);
        }
    }

    onHashChange() {
        let location = this.getLocation();
        if (location.page !== this.page) {
            this.page = location.page;
            if (location.page) {
                this.loadBlog(location.page);
            } else {
                this.setState({text: ''});
            }

        }
    }

    load() {
        const d = new Date();

        fetch(`blog.json?t=${d.getFullYear()}_${d.getMonth()}_${d.getDate()}_${d.getHours()}`)
            .then(res => res.json())
            .then(content => {
                this.setState({content}, () => {
                    let location = this.getLocation();
                    this.page = location.page;
                    if (location.page) {
                        this.loadBlog(location.page);
                    }
                });
            });
    }

    loadBlog(page, language) {
        language = language || this.props.language;
        page = page || this.getLocation().page;

        fetch(`${language}/blog/${page}.md`)
            .then(res => res.text())
            .then(text => {
                this.setState({text, loadTimeout: false});
            });
    }

    renderHeader() {
        return (<div key={"header"}  style={this.page ? {cursor: 'pointer'} : {}} onClick={() => this.onNavigate(null, null, '')} className={this.props.classes.header}>
            <h1 key="title" className={this.props.classes.headerTitle}>{I18n.t('ioBroker Blog')}</h1>
            <div key="notice"  className={this.props.classes.headerNotice}>{I18n.t('News, announcement, ideas about ioBroker')}</div>
        </div>);
    }

    replaceHref(reactObj, prefix) {
        if (reactObj && reactObj.props && reactObj.props.children) {
            reactObj.props.children.forEach((item, i) => {
                if (item && item.type === 'a') {
                    let link = item.props.href;
                    if (link) {
                        if (!link.match(/^https?:\/\//)) {
                            link = prefix + link;
                        }

                        reactObj.props.children[i] = (<div
                            className={this.props.classes.mdLink + ' md-link'}
                            title={link}
                            onClick={() => this.onNavigate(null, link)}>
                            {item.props.children[0]}
                        </div>);
                    }
                }

                if (typeof item === 'object') {
                    this.replaceHref(item);
                }
            });
        }
    }

    static page2Date(page) {
        let date = page.substring(0, 10).replace(/_/g, '.');
        const d = new Date(date);
        return d.toLocaleDateString();
    }

    renderEntry(page) {
        const data = this.state.content.pages[page];

        return (<Paper  className={this.props.classes.pagePage}>
            {data.logo ? (<div className={this.props.classes.pageLogoDiv} onClick={() => this.props.onNavigate(null, null, page)} style={{cursor: 'pointer'}}><img src={data.logo} className={this.props.classes.pageLogo} alt="logo"/></div>) : null}
            <h2 className={this.props.classes.pageTitle}  style={{cursor: 'pointer'}} onClick={() => this.props.onNavigate(null, null, page)}>{data.title[this.props.language] || data.title.en}</h2>
            <div className={this.props.classes.pagePosted}><strong>{data.author || data.Author}</strong> {I18n.t(' posted on %s', Blog.page2Date(page))}</div>
            <p className={this.props.classes.pageDesc}>{data.desc && (data.desc[this.props.language] || data.desc.en || '').replace(/\\n/g, '\n')}</p>
            <Button variant="contained" className={this.props.classes.pageButton} onClick={() => this.props.onNavigate(null, null, page)}>{I18n.t('Read')}</Button>
        </Paper>);
    }

    renderEntries() {
        if (!this.state.content || !this.state.content.pages) {
            return;
        }

        return (<div className={this.props.classes.pages}>{
            Object.keys(this.state.content.pages).map(page => this.renderEntry(page))
        }</div>);
    }

    renderPage() {
        if (!this.state.text) return;

        let date = this.page.substring(0, 10).replace(/_/g, '.');
        const d = new Date(date);

        const {body, header} = Utils.extractHeader(this.state.text);

        const reactElement = converter.convert(body || '');

        this.replaceHref(reactElement, `${this.props.language}/blog/`);

        const pages = Object.keys(this.state.content.pages);
        const pos = pages.indexOf(this.page);

        let next = pos ? Blog.page2Date(pages[pos - 1]) : '';
        let prev = pos + 1 < pages.length ? Blog.page2Date(pages[pos + 1]) : '';

        return (<Paper  className={this.props.classes.pagePage}>
            {header.logo ? (<div className={this.props.classes.pageLogoDiv}><img src={header.logo} className={this.props.classes.pageLogo} alt="logo"/></div>) : null}
            <div className={this.props.classes.pageTitleDiv}>
                <h2 className={this.props.classes.pageTitle}>{header.title}</h2>
                <div className={this.props.classes.pagePosted}><strong>{header.author || header.Author}</strong> {I18n.t(' posted on %s', d.toLocaleDateString())}</div>
                {next ? (<Button variant="contained" className={this.props.classes.pageTitleNextButton} onClick={() => this.onNavigate(null, null, pages[pos - 1])}>{next}&lt;=</Button>) : null}
                {prev ? (<Button variant="contained" className={this.props.classes.pageTitlePrevButton} onClick={() => this.onNavigate(null, null, pages[pos + 1])}>=&gt;{prev}</Button>) : null}
            </div>
            <div className={this.props.classes.pageDesc}>{reactElement}</div>
        </Paper>);
    }

    render() {
        if (this.state.loadTimeout && !this.state.content) {
            return (<Loader theme={this.props.theme}/>);
        }

        return [(<div className={this.props.classes.root}>
                {this.renderHeader()}
                {this.state.text ? this.renderPage() : this.renderEntries()}
                </div>),
            (<Footer key="footer" theme={this.props.theme} mobile={this.props.mobile} onNavigate={this.props.onNavigate}/>)];
    }
}

Blog.propTypes = {
    language: PropTypes.string,
    onNavigate: PropTypes.func,
    theme: PropTypes.string,
    mobile: PropTypes.bool
};

export default withStyles(styles)(Blog);
