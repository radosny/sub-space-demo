import * as type from './actions';

export const fetchJoke = () => ({
    type: type.FETCH
});

export const fetchJokeSuccess = joke => ({
    type: type.FETCH_SUCCESS,
    joke
});

export const fetchJokeFailed = () => ({
    type: type.FETCH_FAILED
});
