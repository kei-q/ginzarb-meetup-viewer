import * as A from '../actions/profiles';

import path from 'path';

const initialState = {
    profiles: []
};

function makeProfileFromPath(profilePath) {
    const username = path.basename(profilePath, '.md');
    const icon = `https://github.com/${username}.png`;
    return {
        username: username,
        icon: icon,
        path: profilePath
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case A.GET_PROFILES:
            return {
                ...state,
                profiles: action.profilePaths.map((path) => {return makeProfileFromPath(path)})
            };
        default:
            return state;
    }
}