import React from 'react';

import { dadJokesStore, DadJokesProvider } from './store';
import DadJokeContainer from './containers/DadJokeContainer';

const DadJokes = props => (
    <DadJokesProvider store={dadJokesStore}>
        <DadJokeContainer {...props} />
    </DadJokesProvider>
);

export default DadJokes;
