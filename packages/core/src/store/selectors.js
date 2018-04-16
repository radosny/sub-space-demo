import get from 'lodash/get';
import capitalize from 'lodash/capitalize'

export const getUserName = state => {
    const name = get(state, 'user.name');
    if (!name) {
        return;
    }
    const {first, last} = name;
    return `${capitalize(first)} ${capitalize(last)}`;
};
export const getThumbnail = state => get(state, 'user.picture.thumbnail');
export const isLoggedIn = state => !!state.user
