import { createSetElectionsAction } from "./actions";
import { createApi } from "../../../services/apiData";

const {
    all,
    append,
} = createApi('elections');

export const fetchElections = () => async (dispatch, getState) => {
    const cars = await all();
    dispatch(createSetElectionsAction(cars));
}

export const appendElections = (elections) => async (dispatch, getState) => {
    
    // use API to add voter
    // dispatch fetch to get the new list 
    await append(elections);
    dispatch(fetchElections())
}
