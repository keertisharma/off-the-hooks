import { createSetBallotsAction } from "./actions";
import { createApi } from "../../../services/apiData";

const {
    all,
    append,
} = createApi('ballots');

export const fetchBallots = () => async (dispatch, getState) => {
    const ballots = await all();
    dispatch(createSetBallotsAction(ballots));
}

export const appendBallot = (ballot) => async (dispatch, getState) => {
    
    // use API to add voter
    // dispatch fetch to get the new list
    await append(ballot);
    dispatch(fetchBallots())
}
