import React, { Component } from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatic from 'hoist-non-react-statics';

import dispatchHelper from './dispatchHelper';

export const withSubStore = subStoreKey => (mapStateToProps, mapDispatchToProps) => {
    return function(WrappedComponent) {
        class SubConnect extends Component {
            constructor(props, context) {
                super(props, context);
                this[subStoreKey] = context[subStoreKey];
            }
            render() {
                const mapDispatch = dispatchHelper(this[subStoreKey].dispatch);
                const subState = this[subStoreKey].getState();
                return(
                    <WrappedComponent
                        { ...this.props }
                        { ...mapStateToProps(subState) }
                        { ...mapDispatch(mapDispatchToProps) }
                    />
                );
            }
            componentDidMount() {
                this.unsubscribe = this[subStoreKey].subscribe(this.handleChange.bind(this));
            }
            componentWillUnmount() {
                this.unsubscribe();
            }
            handleChange() {
                this.forceUpdate();
            }
        }

        SubConnect.contextTypes = {
            [subStoreKey]: PropTypes.object
        };
        hoistNonReactStatic(SubConnect, WrappedComponent);
        return SubConnect;
    };
};

