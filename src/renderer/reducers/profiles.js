import * as A from '../actions/profiles';

import path from 'path';

const initialState = {
    profiles: [],
    meetups: [],
    selectedMeetup: 0,
    selectedMember: '',
    profile: '',
    icon: '',
    checked: new Set()
};

function makeProfileFromPath(profilePath) {
    const username = path.basename(profilePath, '.md');
    const icon = `https://github.com/${username}.png`;
    return {
        username: username,
        icon: icon,
        meetup: getMeetup(profilePath),
        path: profilePath
    }
}

function getMeetup(profilePath) {
    return path.basename(path.dirname(profilePath));
}

function getLatestMeetup(meetups) {
    return `${Math.max.apply(null, meetups)}`;
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case A.GET_PROFILES:
            return {
                ...state,
                profiles: action.profilePaths.map((path) => {return makeProfileFromPath(path)}),
                meetups: action.meetups,
                selectedMeetup: getLatestMeetup(action.meetups)
            };
        case A.SELECT_MEETUP:
            return {
                ...state,
                selectedMeetup: action.meetup
            };
        case A.SELECT_MEMBER:
        {
            state.checked.add(action.path);

            // TODO: 汚いコードなのでKAIZENすること
            const target = state.profiles.filter((element) => {
                return element.path === action.path;
            })[0];

            return {
                ...state,
                selectedMember: action.path,
                profile: action.profile,
                icon: target.icon,
                checked: state.checked
            };
        }
        default:
            return state;
    }
}