import * as type from './actions';

export const fetchStory = () => ({
    type: type.FETCH
});

export const fetchStorySuccess = story => ({
    type: type.FETCH_SUCCESS,
    story
});

export const fetchStoryFailed = () => ({
    type: type.FETCH_FAILED
});

export const fetchTopStories = () => ({
    type: type.FETCH_TOP_STORIES
});

export const fetchTopStoriesSuccess = topStoryIds => ({
    type: type.FETCH_TOP_STORIES_SUCCESS,
    topStoryIds
});

export const fetchTopStoriesFailed = () => ({
    type: type.FETCH_TOP_STORIES_FAILED
});

export const setIndex = currentStoryIndex => ({
    type: type.SET_INDEX,
    currentStoryIndex
});
