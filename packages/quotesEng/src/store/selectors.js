import get from 'lodash/get';

export const getQuotes = state => get(state, 'quotes');
