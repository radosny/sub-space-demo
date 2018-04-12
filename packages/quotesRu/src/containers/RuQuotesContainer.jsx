import { compose } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
});

const mapPrivateStateToProps = state => ({
});

const mapDispatchToProps = {
};

const mapPrivateDispatchToProps = {
};

export default compose(
    withSubStore('')(mapPrivateStateToProps, mapPrivateDispatchToProps),
    connect(mapStateToProps, mapDispatchToProps),
    withTracking,
);
