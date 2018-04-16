import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';

import { fetchTopStoriesSuccess, fetchTopStoriesFailed, fetchStorySuccess, fetchStoryFailed, setIndex } from './actionCreators';
import { getCurrentStoryIndex, getTopStoryIds } from './selectors';
import { FETCH } from './actions';

const topStoriesUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json';
const getUrlByStoryId = id => `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

function* fetchTopStories() {
    try {
        const { data } = yield call(axios, topStoriesUrl);
        const initialIndex = 0;
        yield put(fetchTopStoriesSuccess(data));
        yield put(setIndex(initialIndex));
        return initialIndex;
    } catch (e) {
        yield put(fetchTopStoriesFailed());
    }
}

function* fetchQuote() {
    try {
        let currentStoryIndex = yield select(getCurrentStoryIndex);
        if (currentStoryIndex === null) {
            currentStoryIndex = yield fetchTopStories();
        }
        const storiesIds = yield select(getTopStoryIds);
        const url = getUrlByStoryId(storiesIds[currentStoryIndex]);
        const { data } = yield call(axios, url);
        yield put(fetchStorySuccess(data));
        currentStoryIndex += 1;
        yield put(setIndex(currentStoryIndex));
    } catch (e) {
        yield put(fetchStoryFailed());
    }
}

export default function* watch() {
    yield takeLatest(FETCH, fetchQuote);
};
