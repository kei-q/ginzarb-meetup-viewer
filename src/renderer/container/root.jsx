import React from 'react';

import Profiles from '../component/profiles';
import Profile from '../component/profile';

export default class Root extends React.Component {
    constructor(props) {
        super(props);
        this.props.actions.profiles.fetch();
    }

    render() {
        return <div id="root" className="window">
            <div className="window-content">
                <div className="pane-group">
                    <Profiles profiles={this.props.profiles} actions={this.props.actions} />
                    <Profile profile={this.props.profiles.profile} icon={this.props.profiles.icon} />
                </div>
            </div>
        </div>;
    }
}