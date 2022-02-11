import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { voterReducer } from "./features/voter/store/reducers"
import { electionReducer } from "./features/election/store/reducers"
import { ballotReducer } from "./features/ballot/store/reducers";

const rootReducer = combineReducers({
    voterTool: voterReducer,
    electionTool: electionReducer,
    ballotTool: ballotReducer,
})

// const myMiddle = store => next => action => {
//     console.log({ store:store.getState(), action });
//     next(action)
// }

export const store = createStore(
    rootReducer,
    applyMiddleware(
        // myMiddle,
        thunk,
    )
);
