import React from 'react';

import { engQuotesStore, EngQuotesProvider } from './store';

const EngQuotes = props => (
    <EngQuotesProvider store={engQuotesStore}>
        <EngQuotesContainer {...props} />
    </EngQuotesProvider>
);

export default EngQuotes;
