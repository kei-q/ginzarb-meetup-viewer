export const GET_PROFILES = 'GET_PROFILES';

import child_process from 'child_process';
import globby from 'globby';

const cloneCmd = `git clone git@github.com:ginzarb/meetups.git`;
const updateCmd = `cd meetups; git pull origin master; cd ..`;

export function fetch() {
    return (dispatch) => {
        child_process.exec(`${cloneCmd}; ${updateCmd}`, (_err, _stdout, _stderr) => {
            get()(dispatch);
        });
    };
}

export function get() {
    return (dispatch) => {
        globby('meetups/**/*.md').then((paths) => {
            dispatch({
                type: GET_PROFILES,
                profilePaths: paths
            });
        });
    };
}