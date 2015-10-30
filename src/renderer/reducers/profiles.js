import * as A from '../actions/profiles';

import path from 'path';

const initialState = {
    profiles: []
};

function makeProfileFromPath(profilePath) {
    const username = path.basename(profilePath, '.md');
    return {
        username: username,
        path: profilePath
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case A.GET_PROFILES:
            return {
                profiles: action.profilePaths.map((path) => {return makeProfileFromPath(path)}),
                ...state
            };
        default:
            return state;
    }
}