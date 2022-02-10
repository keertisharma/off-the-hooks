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

    dispatch(createSetVotersAction(voters));
}

export const appendVoter = (voter) => async(dispatch, getState) => {
    console.log("ADDING VOTER", voter)
    // use API to add voter
    // dispatch fetch to get the new list 
    await append(voter);
    dispatch(fetchVoters())
}

export const replaceVoter = (voter) => async(dispatch, getState) => {
    console.log("update VOTER", voter)
    // use API to add voter
    // dispatch fetch to get the new list 
    await replace(voter);
    dispatch(fetchVoters());
}

export const deleteVoter = (voter) => async(dispatch, getState) => {
    console.log("delete VOTER", voter)
    // use API to add voter
    // dispatch fetch to get the new list 
    await remove(voter);
}

export const deleteMultipleVoter = (ids) => async(dispatch, getState) => {
    console.log("delete multiple VOTER ids", ids)
    ids.map(id => remove(id));
}


export const deleteVoters = (voterIds) => async(dispatch, getState) => {
}


