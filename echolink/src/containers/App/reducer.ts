import { reducerWithInitialState } from "typescript-fsa-reducers";
import * as models from "./models";
import * as actions from "./actions";

export const initialState: models.AppState = {
    message: '',
    users: []
};

const appReducer = reducerWithInitialState(initialState)
    .case(actions.message, (state, payload) => ({
        ...state,
        message: ''
    }))


export default appReducer;