import get from 'lodash/get';

export const getUserName = state => get(state, 'user.name');
export const isLoggedIn = state => !!state.user
