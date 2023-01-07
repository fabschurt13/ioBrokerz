import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Converter} from 'react-showdown';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

import {MdEdit as IconEdit} from 'react-icons/md';
import {MdClose as IconClose} from 'react-icons/md';
import {MdExpandMore as IconExpandMore} from 'react-icons/md';
import {FaGithub as IconGithub} from 'react-icons/fa';

import Router from './Router';
import Loader from './Components/Loader';
import I18n from './i18n';
import Utils from './Utils';
import Page404 from './Pages/404';
import Editor from './Pages/Editor';

const styles = theme => ({
    root: {
        width: 'calc(100% - 40px)',
        maxWidth: 1000,
        margin: 20,
        '& .md-link': {
            display: 'inline-block'
        },
        '& h2': {
            width: '100%',
            textAlign: 'left',
            paddingBottom: 10,
            borderBottom: '1px solid lightgray'
        },
        '& hr': {
            borderWidth: '0 0 1px 0'
        },
        '& a': {
            color: 'inherit'
        },
        '& code': {
            margin: '0 0.15em',
            padding: '0.125em 0.4em',
            borderRadius: 2,
            background: '#e3e3e3',
            color: '#000000',
            whiteSpace: 'nowrap',
        },
        '& img': {
            maxWidth: '100%'
        }
    },
    logoImage: {
        width: 64,
        verticalAlign: 'middle',
    },
    infoEdit: {
        float: 'right',
        textDecoration: 'none',
        color: 'gray'
    },
    infoEditLocal: {
        float: 'right',
        textDecoration: 'none',
        marginRight: 15,
        cursor: 'pointer',
        display: 'inline-block'
    },
    adapterCard:{
        marginBottom: 15,
        marginTop: 15
    },
    badgesDetails: {
        display: 'block',
        '& img': {
            marginRight: 5,
        }
    },
    titleText: {
        display: 'inline-block',
        marginLeft: 10,
    },
    adapterCardAttr:{
        fontWeight: 'bold',
        width: 150,
        display: 'inline-block'
    },
    description: {
        fontStyle: 'italic'
    },
    contentDiv: {
        position: 'fixed',
        width: '20%',
        minWidth: 200,
        overflowX: 'hidden',
        opacity: 0.8,
        top: 60,
        right: 20,
        background: '#EEEEEE',
        maxHeight: 'calc(100% - 70px)',
    },
    contentDivClosed: {
        position: 'fixed',
        opacity: 0.8,
        top: 60,
        right: 20,
        width: 25,
        height: 25,
        cursor: 'pointer'
    },
    contentClose: {
        position: 'fixed',
        top: 60 + 5,
        right: 20 + 5,
        cursor: 'pointer',

        '&:hover': {
            color: '#111111'
        }
    },
    contentLinks: {
        cursor: 'pointer',
        '&:hover': {
            color: '#111111'
        }
    },
    headerTranslated: {
        borderColor: '#009c4f',
        borderWidth: '0 0 0 3px',
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        borderStyle: 'solid',
        background: '#bdded5',
        '&:before': {
            content: '"🛈"',
            marginRight: 10,
            color: '#000000'
        }
    },
    license: {
        paddingTop: 10,
        paddingLeft: 10,
        fontWeight: 'bold'
    },
    mdLink: {
        cursor: 'pointer',
        textDecoration: 'underline',
        '&:after': {
            content: '"🔗"',
            opacity: 0.7,
            fontSize: 14,
            marginLeft: 5
        }
    },
    info: {
        paddingTop: 10,
        paddingBottom: 10,
    },

    warn: {
        borderColor: '#0b87da',
        borderWidth: '0 0 0 3px',
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        borderStyle: 'solid',
        background: '#eff6fb',
        '&:before': {
            content: '"⚠"',
            //borderRadius: '50%',
            //background: '#008aff',
        }
    },
    alarm: {
        borderColor: '#da0b50',
        borderWidth: '0 0 0 3px',
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        borderStyle: 'solid',
        background: '#fbeff3',
        '&:before': {
            content: '"⚠"',
            //borderRadius: '50%',
            //background: '#008aff',
        }
    },
    notice: {
        borderColor: '#9c989b',
        borderWidth: '0 0 0 3px',
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        borderStyle: 'solid',
        background: '#dedede',
        '&:before': {
            content: '"✋"',
            //borderRadius: '50%',
            //background: '#dedede',
        }
    },
    todo: {
        borderColor: '#00769c',
        borderWidth: '0 0 0 3px',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 5,
        marginBottom: 5,
        borderStyle: 'solid',
        background: '#c4d2de',
        /*&:before': {
            content: '"✋"',
            //borderRadius: '50%',
            //background: '#dedede',
        }*/
    },
    paragraph: {

    }
});

const converter = new Converter();
let title;

const ADAPTER_CARD = ['version', 'authors', 'keywords', 'mode', 'materialize', 'compact'];

class Markdown extends Router {
    constructor(props) {
        super(props);
        // load page
        this.state = {
            parts: [],
            title: '',
            loadTimeout: false,
            header: {},
            content: {},
            license: '',
            changeLog: '',
            text: this.props.text || '',
            notFound: false,
            hideContent: window.localStorage ? window.localStorage.getItem('Docs.hideContent') === 'true' : false,
        };

        if (!title) {
            title = window.title;
        }

        this.mounted = false;

        if (!this.state.text) {
            this.load();

            // Give 300ms to load the page. After that show the loading indicator.
            setTimeout(() => !this.state.parts.length && this.setState({loadTimeout: true}), 300);
        } else {
            this.parseText();
        }

        this.contentRef = React.createRef();
    }

    componentWillMount() {
        this.mounted = true;
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.path !== nextProps.path) {
            this.mounted && this.setState({notFound: false, parts :[]});
            this.load(nextProps.path);
        } else if (this.props.text !== nextProps.text) {
            this.setState({text: nextProps.text});
            if (!nextProps.text) {
                if (this.props.path !== nextProps.path) {
                    this.mounted && this.setState({notFound: false, parts :[]});
                    this.load(nextProps.path);
                }
            } else {
                this.mounted && this.setState({text: nextProps.text}, () =>
                    this.parseText());
            }
        } else
        if (this.props.language !== nextProps.language) {
            this.mounted && this.setState({notFound: false, parts :[]});
            this.load(null, nextProps.language);
        }
    }

    onHashChange(location) {
        location = location || Router.getLocation();
        if (location.chapter) {
            const el = window.document.getElementById(location.chapter);
            el && el.scrollIntoView(true);
        }
    }

    onNavigate(id, link) {
        if (link && link.match(/^https?:\/\//)) {
            Utils.openLink(link);
        } else if (id) {
            const el = window.document.getElementById(id) || window.document.getElementById(id.replace('nbsp', ''));
            if (el) {
                el.scrollIntoView(true);
            }
        } else if (link) {
            if (link.indexOf('..')) {
                // intro/../../download
                const parts = link.split('/');


            }

            this.props.onNavigate(null, null, link);
        }
    }

    parseText(text) {
        text = text || this.state.text || '';
        if (this.props.editEnabled) {
            this.editText = text;
        }
        if (!text || text.startsWith('<!DOCTYPE html>')) {
            // page not found
            return this.setState({notFound: true});
        }

        const {header, parts, content, license, changeLog, title} = this.format(text);
        let _title = header.title || title || Utils.getTitle(text);
        if (_title) {
            window.document.title = _title;
        } else if (title) {
            window.document.title = title;
        }
        this.mounted && this.setState({notFound: false, parts, header, loadTimeout: false, content, license, changeLog, title});

        setTimeout(() => this.onHashChange(), 200);
    }

    load(path, language) {
        path = path || this.props.path;
        language = language || this.props.language;
        if (path && language) {
            fetch(`${language}${path[0] === '/' ? path : '/' + path}`)
                .then(res => res.text())
                .then(text => this.parseText(text));
        }
    }

    format(text) {
        text = (text || '').trim();
        let {header, body} = Utils.extractHeader(text);

        body = Utils.removeDocsify(body);
        let {parts, content, license, changeLog, title} = Utils.decorateText(body, header, `${this.props.path && (this.props.path[0] === '/' ? this.props.path : '/' + this.props.path)}`);

        return {header, parts, content, license, changeLog, title};
    }

    renderHeader() {
        const data = [];

        if (this.state.header.translatedFrom) {
            data.push((<div className={this.props.classes.headerTranslated}>{I18n.t('Translated from %s', this.state.header.translatedFrom)}</div>));
        }
        if (this.state.header.adapter) {
            data.push((<h1>{[
                this.state.header.logo ? (<img src={this.state.header.logo} alt="logo" className={this.props.classes.logoImage}/>) : null,
                (<div className={this.props.classes.titleText}>{this.state.header.title}</div>)
            ]}</h1>));
            if (this.state.header.readme) {
                const link = this.state.header.readme.replace(/blob\/master\/README.md$/, '');
                data.push((<IconButton title={I18n.t('Open repository')} onClick={() => Utils.openLink(link)}><IconGithub/></IconButton>));
            }
        }

        if (this.state.header.description) {
            data.push((<span className={this.props.classes.description}>{this.state.header.description}</span>));
        }

        if (Object.keys(this.state.header).find(attr => ADAPTER_CARD.indexOf(attr) !== -1)) {
            data.push((<ExpansionPanel className={this.props.classes.adapterCard}>
                <ExpansionPanelSummary expandIcon={<IconExpandMore />}>{I18n.t('Information')}</ExpansionPanelSummary>
                <ExpansionPanelDetails><List>{
                    ADAPTER_CARD
                        .filter(attr => this.state.header.hasOwnProperty(attr))
                        .map(attr => (
                            <ListItem>
                                <div className={this.props.classes.adapterCardAttr}>{I18n.t(attr)}: </div>
                                <span>{this.state.header[attr].toString()}</span>
                            </ListItem>))}
                </List></ExpansionPanelDetails>
                </ExpansionPanel>));
        }

        if (Object.keys(this.state.header).find(attr => attr.startsWith('BADGE-'))) {
            data.push((<ExpansionPanel className={this.props.classes.adapterCard}>
                <ExpansionPanelSummary expandIcon={<IconExpandMore />}>{I18n.t('Badges')}</ExpansionPanelSummary>
                <ExpansionPanelDetails classes={{root: this.props.classes.badgesDetails}}>{
                    Object.keys(this.state.header).filter(attr => attr.startsWith('BADGE-'))
                        .map(attr => [
                                this.state.header[attr].indexOf('nodei.co') !== -1 ? (<br/>) : null,
                                (<img src={this.state.header[attr]} alt={attr.substring(6)}/>)
                            ]
                        )}
                </ExpansionPanelDetails>
            </ExpansionPanel>));
        }

        return data;
    }

    renderInfo() {
        return (<div className={this.props.classes.info}>
            {this.state.header.lastChanged ? [
                (<span key="lastChangedTitle" className={this.props.classes.infoTitle}>{I18n.t('Last changed: ')}</span>),
                (<span key="lastChangedValue" className={this.props.classes.infoValue}>{this.state.header.lastChanged}</span>),
                ] : null}
            {this.state.header.editLink ?
                (<a className={this.props.classes.infoEdit} href={this.state.header.editLink} target="_blank"><IconGithub />{I18n.t('Edit on github')}</a>) : null}
            {this.props.editEnabled && this.editText ?
                (<div className={this.props.classes.infoEditLocal} onClick={() => {
                    this.props.onEditMode && this.props.onEditMode(true);
                }}><IconEdit />{I18n.t('Edit local')}</div>) : null}

        </div>)
    }

    _renderSubContent(menu) {
        return (<ul>{
            menu.children.map(item => {
                const ch = this.state.content[item].children;
                const link = this.state.content[item].external && this.state.content[item].link;
                return (
                    <li><span onClick={() => this.onNavigate(item, link)} className={this.props.classes.contentLinks}>{this.state.content[item].title}</span>
                        {ch ? this._renderSubContent(this.state.content[item]) : null}
                    </li>
                );
            }).filter(e => e)
        }</ul>);
    }

    onToggleContentButton() {
        this.setState({hideContent: !this.state.hideContent});
        window.localStorage && window.localStorage.setItem('Docs.hideContent', this.state.hideContent ? 'false' : 'true');
    }

    renderContentCloseButton() {
        return (<IconClose className={this.props.classes.contentClose} onClick={() => !this.state.hideContent && this.onToggleContentButton()}/>);
    }

    renderContent() {
        const links = Object.keys(this.state.content);
        if (!links.length) {
            return null;
        }
        if (this.state.hideContent) {
            return (<Paper className={this.props.classes.contentDivClosed} onClick={() => this.onToggleContentButton()}>
                {this.renderContentCloseButton()}
            </Paper>);
        } else {
            return (<Paper className={this.props.classes.contentDiv}>
                {this.renderContentCloseButton()}
                <ul>{
                    links.map(item => {
                        if (this.state.content[item].level === 0) {
                            const link = this.state.content[item].external && this.state.content[item].link;
                            return (
                                <li><span onClick={() => this.onNavigate(item, link)} className={this.props.classes.contentLinks}>{this.state.content[item].title}</span>
                                    {this.state.content[item].children ? this._renderSubContent(this.state.content[item]) : null}
                                </li>
                            );
                        }
                    }).filter(e => e)
                }</ul>
            </Paper>);
        }
    }

    renderLicense() {
        if (!this.state.license) {
            return null;
        } else {
            return (<ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<IconExpandMore />}>{I18n.t('License')} <span className={this.props.classes.license}> {this.state.header.license}</span></ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {converter.convert(this.state.license)}
                </ExpansionPanelDetails>
            </ExpansionPanel>);
        }
    }

    renderChangeLog() {
        if (!this.state.changeLog) {
            return null;
        } else {
            return (<ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<IconExpandMore />}>{I18n.t('Changelog')}</ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {converter.convert(this.state.changeLog)}
                </ExpansionPanelDetails>
            </ExpansionPanel>);
        }
    }

    replaceHref(reactObj) {
        const parts = (this.props.path || '').split('/');
        parts.pop();
        const prefix = parts.join('/') + '/';

        if (reactObj && reactObj.props && reactObj.props.children) {
            reactObj.props.children.forEach((item, i) => {
                if (item && item.type === 'a') {
                    let link = item.props.href;
                    if (link) {
                        if (!link.match(/^https?:\/\//)) {
                            link = prefix + link;
                        }

                        reactObj.props.children[i] = (<div
                            key={'link' + i}
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

    render() {
        if (this.state.notFound) {
            return (<Page404 className={this.props.classes.root} language={this.props.language}/>);
        }
        if (this.props.editMode) {
            return (<Editor
                language={this.props.language}
                mobile={this.props.mobile}
                theme={this.props.theme}
                path={this.state.header.editLink}
                onClose={() => {
                    this.props.onEditMode && this.props.onEditMode(false);
                }}
            />);
        }
        if (this.state.loadTimeout && !this.state.parts.length) {
            return (<Loader theme={this.props.theme}/>);
        }

        const reactElements = this.state.parts.map((part, i) => {
            const rct = converter.convert(part.lines.join('\n'));
            this.replaceHref(rct);

            if (part.type === 'warn') {
                return (<div key={'parts' + i} className={this.props.classes.warn}>{rct}</div>);
            } else if (part.type === 'alarm') {
                return (<div key={'parts' + i} className={this.props.classes.alarm}>{rct}</div>);
            } else if (part.type === 'notice') {
                return (<div key={'parts' + i} className={this.props.classes.notice}>{rct}</div>);
            }  else if (part.type === '@@@') {
                return (<div key={'parts' + i} className={this.props.classes.todo}>{rct}</div>);
            } else {
                return <div key={'parts' + i} className={this.props.classes.paragraph}>{rct}</div>;
            }
        });

        return (<div className={this.props.classes.root} ref={this.contentRef}>
            {this.renderHeader()}
            {this.state.title ? (<h1>{this.state.title}</h1>) : null}
            {reactElements}
            <hr/>
            {this.renderLicense()}
            {this.renderChangeLog()}
            {this.renderInfo()}
            {this.renderContent()}
        </div>);
    }
}

Markdown.propTypes = {
    language: PropTypes.string,
    onNavigate: PropTypes.func,
    theme: PropTypes.string,
    mobile: PropTypes.bool,
    path:  PropTypes.string,
    text:  PropTypes.string,
    editMode: PropTypes.bool,
    onEditMode: PropTypes.func,
    editEnabled:  PropTypes.bool,
};

export default withStyles(styles)(Markdown);
