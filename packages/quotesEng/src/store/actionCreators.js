import * as type from './actions';

export const fetchQuote = () => ({
    type: type.FETCH
});

export const fetchQuoteSuccess = quote => ({
    type: type.FETCH_SUCCESS,
    quote
});

export const fetchQuoteFailed = () => ({
    type: type.FETCH_FAILED
});
