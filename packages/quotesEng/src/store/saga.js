import { call, put, takeLatest } from 'redux-saga/effects';
import random from 'lodash/random';

import { fetchQuoteSuccess, fetchQuoteFailed } from './actionCreators';
import { FETCH } from './actions';

const url = `https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1`;

function* fetchUser() {
    try {
        const result = yield call(fetch, url);
        const { data } = yield result.json();
        yield put(fetchQuoteSuccess(data));
    } catch (e) {
        yield put(fetchQuoteFailed());
    }
}

export default function* watch() {
    yield takeLatest(FETCH, fetchQuote);
};
