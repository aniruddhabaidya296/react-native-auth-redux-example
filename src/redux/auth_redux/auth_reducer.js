import {
    LOGGED_IN,
    LOGGED_OUT,
    AUTH_LOADING,
    AUTH_ERROR,
} from './events'

import {authInitial} from './constant';

export const authReducer = (state = authInitial, action) => {
    switch (action.type) {
        case AUTH_LOADING:
            return {
                ...state,
                loading: true,
                error: false,
                loggedIn: false,
            };
        case LOGGED_IN:
            return {
                ...state,
                loading: false,
                error: false,
                loggedIn: true,
            };
        case LOGGED_OUT:
            return {
                ...state,
                loading: false,
                error: false,
                loggedIn: false,
            };
        case AUTH_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                loggedIn: false,
            };

        default:
            state;
    }
    return state;
};
