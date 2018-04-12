import { FETCH_SUCCESS, RESET_USER } from './actions';

const initialState = {
    user: null
};

export default function autocompleteReducer(state = initialState, { type, ...action}) {
    switch (type) {
        case FETCH_SUCCESS:
            const { user } = action;
            return {
                ...state,
                user
            };
        case RESET_USER:
            return initialState;
        default:
            return state;
    }
}
