import { FETCH_SUCCESS } from './actions';

const initialState = {
    quotes: []
};

export default function autocompleteReducer(state = initialState, { type, ...action}) {
    switch (type) {
        case FETCH_SUCCESS:
            const { quote } = action;
            return {
                quotes: [...state.quotes, quote]
            };
        default:
            return state;
    }
}
