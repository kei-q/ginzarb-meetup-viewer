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
        const expected = {
            profiles: [
                {
                    username: 'kei_q',
                    path: 'meetup/28/kei_q.md'
                }
            ]
        };
        assert.deepEqual(reducer({}, action), expected);
    });
});
