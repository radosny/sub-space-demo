const dispatchHelper = dispatcher => dispatchObject =>
    Object.keys(dispatchObject)
        .reduce((actionMap, key) => {
            actionMap[key] = function(...params) {
                dispatcher(dispatchObject[key](...params));
            };
            return actionMap;
    }, {});

export default dispatchHelper;
