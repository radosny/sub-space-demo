import { FETCH_SUCCESS } from './actions';

const initialState = {
    jokes: []
};

export default function jokesReducer(state = initialState, { type, ...action }) {
    switch (type) {
        case FETCH_SUCCESS:
            const { joke } = action;
            return {
                jokes: [...state.jokes, joke]
            };
        default:
            return state;
    }
}
