import { compose } from 'redux';
import { connect } from 'react-redux';

import { PREFIX } from '../store/constants';
import { fetchStory } from '../store/actionCreators';
import { getStories } from '../store/selectors';
import StoriesList from '../components/StoriesList';

import { withSubStore } from '@rrsd/utils';
import { getUserName } from '@rrsd/core';

const mapStateToProps = coreState => ({
    userName: getUserName(coreState)
});

const mapPrivateStateToProps = state => ({
    stories: getStories(state)
});

const mapPrivateDispatchToProps = {
    fetchStory
};

export default compose(
    connect(mapStateToProps),
    withSubStore(PREFIX)(mapPrivateStateToProps, mapPrivateDispatchToProps)
)(StoriesList);
