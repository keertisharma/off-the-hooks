import { nanoid } from "nanoid";
import { CREATE_ELECTION, SET_VIEW_MODE } from './actions';

const initialState = {
    elections : []
}

export const electionReducer = (state = initialState, action) => {
    switch(action.type) {
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
        case SET_VIEW_MODE:
            return {
                ...state,
                viewMode: action.payload.viewMode,
                electionId: action.payload.electionId
            }
        default:
            return state;
    }

}