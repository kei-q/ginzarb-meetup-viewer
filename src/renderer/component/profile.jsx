import React from 'react';
import Mousetrap from 'mousetrap';

global.React = React;
const md2react = require('md2react');

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontSize: 100
        };
    }

    componentDidMount() {
        Mousetrap.bind('+', () => {
            this.setState({fontSize: this.state.fontSize + 10});
        });
        Mousetrap.bind('-', () => {
            this.setState({fontSize: this.state.fontSize - 10});
        });
    }

    componentWillUnmount() {
        Mousetrap.unbind('+');
        Mousetrap.unbind('-');
    }

    render() {
        const markdownContents = md2react(this.props.profile);
        const style = {
            "font-size": `${this.state.fontSize}%`
        };

        return <div className="pane" style={style}>
            <img className="img-circle media-object pull-right" src={this.props.icon} width="256" height="256" />
            <div className="markdown">
                {markdownContents}
            </div>
        </div>;
    }
}