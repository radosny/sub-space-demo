import React from 'react';

import { storiesStore, StoriesProvider } from './store';
import StoriesListContainer from './containers/StoriesListContainer';

const Stories = props => (
    <StoriesProvider store={storiesStore}>
        <StoriesListContainer {...props} />
    </StoriesProvider>
);

export default Stories;
