import React from 'react';

global.React = React;
const md2react = require('md2react');

export default class Profile extends React.Component {
    render() {
        const markdownContents = md2react(this.props.profile);

        return <div className="pane">
            <div className="markdown">
                {markdownContents}
            </div>
        </div>;
    }
}