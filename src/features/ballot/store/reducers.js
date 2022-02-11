import { nanoid } from "nanoid";
import { CREATE_BALLOT, SET_BALLOTS, } from './actions';


const initialState = {
    ballots: [],
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
        default:
            return state;
    }
}
