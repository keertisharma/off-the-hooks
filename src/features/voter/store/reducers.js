import { nanoid } from "nanoid";
import {
    DELETE_MULTIPLE_VOTERS,
    DELETE_VOTER,
    REGISTER_VOTER,
    SET_SORT_ORDER,
    SET_VOTERS,
    UPDATE_VOTER
} from "./actions";

const initialState = {
    voters: [],
    sortOrder: { field: null, direction: 1 },
}

export const voterReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_VOTER:
            return {
                ...state,
                voters: [
                    ...state.voters,
                    {
                        ...action.payload.voterData,
                        id: nanoid(),
                    }
                ]
            }
        case SET_VOTERS:
            console.log(action.payload);

            return {
                ...state,
                voters: action.payload.votersData,
            }
        case UPDATE_VOTER:
            return {
                ...state,
                voters: state.voters.map(currentVoter => {
                    if (action.payload.id === currentVoter.id) {
                        return {
                            ...action.payload.voterData,
                            id: action.payload.id
                        }
                    } else {
                        return currentVoter
                    }
                })
            }
        case DELETE_VOTER:
            return {
                ...state,
                voters: state.voters.filter(currentVoter => {
                    return currentVoter.id !== action.payload.id
                })
            }
        case DELETE_MULTIPLE_VOTERS:
            return {
                ...state,
                voters: state.voters.filter(currentVoter => {
                    return !(action.payload.ids.includes(currentVoter.id))
                })
            }
        case SET_SORT_ORDER:
            return {
                ...state,
                sortOrder: action.payload.sortOrder
            }
        default:
            return state
    }
}
