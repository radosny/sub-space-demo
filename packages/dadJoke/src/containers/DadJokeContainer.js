import { compose } from 'redux';

import { PREFIX } from '../store/constants';
import { fetchJoke } from '../store/actionCreators';
import { getJokes } from '../store/selectors';
import DadJokeList from '../components/DadJokeList';

import { withSubStore } from '@rrsd/utils';

const mapPrivateStateToProps = state => ({
    jokes: getJokes(state)
});

const mapPrivateDispatchToProps = {
    fetchJoke
};

export default compose(
    withSubStore(PREFIX)(mapPrivateStateToProps, mapPrivateDispatchToProps)
)(DadJokeList);
