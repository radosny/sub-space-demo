import get from 'lodash/get';

export const getJokes = state => get(state, 'jokes');
