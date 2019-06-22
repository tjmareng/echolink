import appReducer from 'containers/App/reducer';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export interface State {
    app?: any;
    [container: string]: any;
}

const globalReducers = {
    app: appReducer,
    form: formReducer,
};

function createReducer(injectedReducers?: any) {
    const reducers = {
        ...globalReducers,
        ...injectedReducers,
    }

    return combineReducers(reducers);
}

export default createReducer;