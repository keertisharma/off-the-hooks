import { nanoid } from "nanoid";
import {
    DELETE_MULTIPLE_VOTERS,
    DELETE_VOTER,
    REGISTER_VOTER,
    SET_SELECTED_VOTER_ID,
    SET_SORT_ORDER,
    SET_VOTERS,
    UPDATE_VOTER,
    SET_MODE,
    RESET_MODE,
} from "./actions";

const DEFAULT_MODE = 'default'
const initialState = {
    voters: [],
    sortOrder: { field: null, direction: 1 },
    mode: DEFAULT_MODE,
    selectedVoterId: null,
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
        case SET_SELECTED_VOTER_ID:
            return {
                ...state,
                selectedVoterId: action.payload.selectedVoterId
            }
        default:
            return state
    }
}
