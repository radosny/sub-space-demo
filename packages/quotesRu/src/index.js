import React from 'react';

import { ruQuotesStore, EngQuotesProvider } from './store';

const RuQuotes = props => (
    <EngQuotesProvider store={ruQuotesStore}>
        <EngQuotesContainer {...props} />
    </EngQuotesProvider>
);

export default RuQuotes;
