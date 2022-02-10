import {createSetVotersAction} from "./actions";
import { base_url } from '../../../constants';
import { createApi } from "../../../services/apiData";

const {
    all,
    append, 
    replace, 
    remove,
  } = createApi('voters');

export const fetchVoters = () => async (dispatch, getState) => {
    const result = await fetch(base_url);
    const voters = await result.json();

    console.log(voters);
    dispatch(createSetVotersAction(voters));
}

export const appendVoter = (voter) => async(dispatch, getState) => {
    console.log("ADDING VOTER", voter)
    // use API to add voter
    // dispatch fetch to get the new list 
    await append(voter);
}

export const updateVoter = (voter) => async(dispatch, getState) => {
    console.log("update VOTER", voter)
    // use API to add voter
    // dispatch fetch to get the new list 
    await replace(voter);
}


export const deleteVoter = (voter) => async(dispatch, getState) => {
    console.log("delete VOTER", voter)
    // use API to add voter
    // dispatch fetch to get the new list 
    await remove(voter);
}


