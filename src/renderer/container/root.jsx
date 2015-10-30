import React from 'react';

export default class Root extends React.Component {
    constructor(props) {
        super(props);
        // 起動時にmeetupsのrepoを取得する
        // NOTE: 開発中に再起動するたびfetchするのはあれなので、
        // 落ち着くまで一旦comment outしておく
        //this.props.actions.profiles.fetch();
        this.props.actions.profiles.get();
    }

    render() {
        return <div id="root">
            root node
        </div>;
    }
}