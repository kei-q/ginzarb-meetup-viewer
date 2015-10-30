export const GET_PROFILES = 'GET_PROFILES';
export const SELECT_MEETUP = 'SELECT_MEETUP';
export const SELECT_MEMBER = 'SELECT_MEMBER';

import child_process from 'child_process';
import globby from 'globby';
import path from 'path';
import fs from 'fs';

const repoDir = '/tmp/ginza-meetup';

const cloneCmd = `git clone git@github.com:ginzarb/meetups.git ${repoDir}`;
const updateCmd = `cd ${repoDir}; git pull origin master`;

export function fetch() {
    return (dispatch) => {
        child_process.exec(`${cloneCmd}; ${updateCmd}`, (_err, _stdout, _stderr) => {
            get()(dispatch);
        });
    };
}

export function get() {
    return (dispatch) => {
        globby(`${repoDir}/**/*.md`).then((paths) => {
            const meetups = globby.sync(`${repoDir}/members/*`).map((meetup) => {
                return path.basename(meetup);
            });
            dispatch({
                type: GET_PROFILES,
                profilePaths: paths,
                meetups: meetups
            });
        });
    };
}

export function selectMeetup(meetup) {
    return {
        type: SELECT_MEETUP,
        meetup
    }
}

export function selectMember(path) {
    return (dispatch) => {
        fs.readFile(path, 'utf8', (err, data) => {
            dispatch({
                type: SELECT_MEMBER,
                path,
                profile: data
            })
        });
    };
}