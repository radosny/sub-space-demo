import get from 'lodash/get';

export const getStories = state => get(state, 'stories');
export const getCurrentStoryIndex = state => get(state, 'currentStoryIndex');
export const getTopStoryIds = state => get(state, 'topStoryIds');
