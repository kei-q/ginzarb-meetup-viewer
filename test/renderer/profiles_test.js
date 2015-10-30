import assert from 'power-assert';

import reducer from '../../dist/renderer/reducers/profiles';
import * as actions from '../../dist/renderer/actions/profiles';

describe('profiles reducer', () => {
    it('get profiles', () => {
        const action = {
            type: actions.GET_PROFILES,
            profilePaths: [
                'meetup/28/kei_q.md'
            ]
        };
        const expected = [
            {
                username: 'kei_q',
                icon: 'https://github.com/kei_q.png',
                meetup: '28',
                path: 'meetup/28/kei_q.md'
            }
        ];
        assert.deepEqual(reducer({}, action).profiles, expected);
    });

    it('select meetup', () => {
        const action = {
            type: actions.SELECT_MEETUP,
            meetup: "28"
        };
        const expected = "28";
        assert(reducer({}, action).selectedMeetup === expected);
    });
});
