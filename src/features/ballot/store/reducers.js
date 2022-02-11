import { nanoid } from "nanoid";
import {
    CREATE_BALLOT,
    SET_BALLOTS,
    SET_SELECTED_ELECTION_ID,
    SET_MODE,
    RESET_MODE,
    SET_SELECTED_VOTER_ID,
} from './actions';

const DEFAULT_MODE = 'default'

const initialState = {
    ballots: [],
    selectedElectionId: null,
    selectedVoterId: null,
    mode: DEFAULT_MODE,
}

export const ballotReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_BALLOT:
            return {
                ...state,
                ballots: [
                    ...state.ballots,
                    {
                        ...action.payload.ballotData,
                        id: nanoid(),
                    }
                ]
            }
        case SET_BALLOTS:
            return {
                ...state,
                ballots: action.payload.ballotsData
            }
        case SET_SELECTED_ELECTION_ID:
            
            return {
                ...state,
                selectedElectionId: action.payload.electionId
            }
        case SET_SELECTED_VOTER_ID:
            return {
                ...state,
                selectedVoterId: action.payload.voterId
            }  
        case SET_MODE:
            return {
                ...state,
                mode: action.payload.mode
            }
        case RESET_MODE:
            return {
                ...state,
                mode: DEFAULT_MODE
            }
        default:
            return state;
    }
}
