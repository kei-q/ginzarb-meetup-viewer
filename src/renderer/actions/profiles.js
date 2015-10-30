const FETCH_PROFILES = 'FETCH_PROFILES';
const GET_PROFILES = 'GET_PROFILES';

import child_process from 'child_process';
import globby from 'globby';
import path from 'path';

const cloneCmd = `git clone git@github.com:ginzarb/meetups.git`;
const updateCmd = `cd meetups; git pull origin master; cd ..`;

function makeProfileFromPath(profilePath) {
    const username = path.basename(profilePath, '.md');
    return {
        username: username,
        path: profilePath
    }
}

export function fetch() {
    return (dispatch) => {
        child_process.exec(`${cloneCmd}; ${updateCmd}`, (err, stdout, stderr) => {
            get()(dispatch);
        });
    };
}

export function get() {
    return (dispatch) => {
        globby('meetups/**/*.md').then((paths) => {
            dispatch({
                type: FETCH_PROFILES,
                profiles: paths.map((path) => { return makeProfileFromPath(path) })
            });
        });
    };
}