import { call, put, takeLatest } from 'redux-saga/effects';
import random from 'lodash/random';

import { userFetchFailed, userFetchSuccess } from './actionCreators';
import { FETCH } from './actions';

function* fetchUser() {
    try {
        const userId = random(1, 12);
        const result = yield call(fetch, `https://reqres.in/api/users/${userId}`);
        const { data } = yield result.json();
        yield put(userFetchSuccess(data));
    } catch (e) {
        yield put(userFetchFailed());
    }
}

export default function* watch() {
    yield takeLatest(FETCH, fetchUser);
};
