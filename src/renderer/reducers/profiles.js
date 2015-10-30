import * as A from '../actions/profiles';

const initialState = {
    profiles: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case A.GET_PROFILES:
            return {
                profiles: action.profiles,
                ...state
            };
        case A.FETCH_PROFILES:
            return {
                profiles: action.profiles,
                ...state
            };
        default:
            return state;
    }
}