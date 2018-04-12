import * as type from './actions';

export const fetchUser = () => ({
    type: type.FETCH
});

export const resetUser = () => ({
    type: type.RESET_USER
});

export const userFetchSuccess = user => ({
    type: type.FETCH_SUCCESS,
    user
});

export const userFetchFailed = () => ({
    type: type.FETCH_FAILED
});
