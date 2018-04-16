import { FETCH_SUCCESS, FETCH_TOP_STORIES_SUCCESS, SET_INDEX } from './actions';

const initialState = {
    currentStoryIndex: null,
    topStoryIds: [],
    stories: []
};

export default function quoteReducer(state = initialState, { type, ...action }) {
    switch (type) {
        case FETCH_SUCCESS:
            const { story } = action;
            return {
                ...state,
                ...{ stories: [...state.stories, story] }
            };
        case FETCH_TOP_STORIES_SUCCESS:
            const { topStoryIds } = action;
            return {
                ...state,
                topStoryIds,
                currentStoryIndex: 0
            };
        case SET_INDEX:
            const { currentStoryIndex } = action;
            return {
                ...state,
                currentStoryIndex
            };
        default:
            return state;
    }
}
