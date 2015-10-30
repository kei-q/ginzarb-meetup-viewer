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

class MeetupSelector extends React.Component {
    render() {
        let options = this.props.meetups.map((meetup) => {
            return <option key={meetup} value={meetup}>{meetup} 回</option>;
        });

        return <select className="form-control" value={this.props.selected} onChange={this.handleChange.bind(this)}>
            {options}
        </select>;
    }

    handleChange(event) {
        this.props.actions.profiles.selectMeetup(event.target.value);
    }
}

export default class Profiles extends React.Component {
    render() {
        const profiles = this.props.profiles;
        const items = profiles.profiles.filter((profile) => {
            return profile.meetup === profiles.selectedMeetup;
        }).map((profile) => {
            return <Item key={profile.path} profile={profile} />;
        });

        return <div className="pane pane-sm sidebar note-list">
            <nav className="nav-group">
                <ul className="list-group">
                    <li className="list-group-header">
                        <MeetupSelector meetups={profiles.meetups} selected={profiles.selectedMeetup} actions={this.props.actions} />
                    </li>
                    {items}
                </ul>
            </nav>
        </div>;
    }
}