import { nanoid } from "nanoid";
import { CREATE_ELECTION, SET_ELECTIONS, SET_SELECTED_ELECTION_ID, SET_VIEW_MODE } from './actions';

const DEFAULT_MODE = 'default'
const initialState = {
    elections: [],
    mode: DEFAULT_MODE,
    selectedElectionId: null,
}

export const electionReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ELECTION:
            return {
                ...state,
                elections: [
                    ...state.elections,
                    {
                        ...action.payload.electionData,
                        id: nanoid(),
                    }
                ]
            }
        case SET_ELECTIONS:
            return {
                ...state,
                elections: action.payload.electionsData
            }
        case SET_VIEW_MODE:
            return {
                ...state,
                viewMode: action.payload.viewMode,
                electionId: action.payload.electionId
            }
        case SET_SELECTED_ELECTION_ID:
            return {
                ...state,
                selectedElectionId: action.payload.electionId
            }
        default:
            return state;
    }
}
