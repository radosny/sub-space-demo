import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { userFetchFailed, userFetchSuccess } from './actionCreators';
import { FETCH } from './actions';

function* fetchUser() {
    try {
        const { data: { results } } = yield call(axios, `https://randomuser.me/api/`);
        if (results.length > 0) {
            const user = results[0]
            yield put(userFetchSuccess(user));
        }
    } catch (e) {
        yield put(userFetchFailed());
    }
}

export default function* watch() {
    yield takeLatest(FETCH, fetchUser);
};
