import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import pick from 'lodash/pick';

import { fetchJokeSuccess, fetchJokeFailed } from './actionCreators';
import { FETCH } from './actions';

const url = 'https://icanhazdadjoke.com/';

function* fetchJoke() {
    try {
        const { data } = yield call(axios, {
            url,
            headers: {
                Accept: 'application/json'
            }
        });
        yield put(fetchJokeSuccess(pick(data, ['id', 'joke'])));
    } catch (e) {
        yield put(fetchJokeFailed());
    }
}

export default function* watch() {
    yield takeLatest(FETCH, fetchJoke);
};
