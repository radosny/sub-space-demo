import { compose } from 'redux';
import { connect } from 'react-redux';

import { PREFIX } from '../store';
import { fetchQuote } from '../store/actionCreators';
import { getQuotes } from '../store/selectors';

import { getUserName } from '@rrsd/core';

const mapStateToProps = coreState => ({
    userName: getUserName(coreState)
});

const mapPrivateStateToProps = state => ({
    quotes: getQuotes(state)
});

const mapPrivateDispatchToProps = {
    fetchQuote
};

export default compose(
    withSubStore(PREFIX)(mapPrivateStateToProps, mapPrivateDispatchToProps),
    connect(mapStateToProps, mapDispatchToProps)
)();
