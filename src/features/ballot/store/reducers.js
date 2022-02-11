import { nanoid } from "nanoid";
import {
    CREATE_BALLOT,
    SET_BALLOTS,
    SET_SELECTED_ELECTION_ID,
} from './actions';

const initialState = {
    ballots: [],
    selectedElectionId: null,
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
        default:
            return state;
    }
}
