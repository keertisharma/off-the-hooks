import {createStore, combineReducers, applyMiddleware} from 'redux'
import { voterReducer } from "./features/voter/store/reducers"
import { electionReducer } from "./features/election/store/reducers"
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    voterTool: voterReducer,
    electionTool: electionReducer,
    // ballotTool: ballotReducer,
})

export const store =  createStore(rootReducer, applyMiddleware(thunk));
