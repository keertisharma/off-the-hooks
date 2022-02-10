import {createStore, combineReducers} from 'redux'

import { voterReducer } from "./features/voter/store/reducers"
import { electionReducer } from "./features/election/store/reducers"

const rootReducer = combineReducers({
    voterTool: voterReducer,
    electionTool: electionReducer,
    // ballotTool: ballotReducer,
})

export const store = createStore(rootReducer)
