import React from 'react';

class Item extends React.Component {
    render() {
        const profile = this.props.profile;
        return <li className="list-group-item">
            <img className="img-circle media-object pull-left" src={profile.icon} width="32" height="32" />
            <strong>{profile.username}</strong>
            <p>{profile.path}</p>
        </li>;
    }
}

export default class Profiles extends React.Component {
    render() {
        let items = this.props.profiles.profiles.map((profile) => {
            return <Item key={profile.path} profile={profile} />;
        });

        return <div className="pane pane-sm sidebar note-list">
            <nav className="nav-group">
                <ul className="list-group">
                    {items}
                </ul>
            </nav>
        </div>;
    }
}