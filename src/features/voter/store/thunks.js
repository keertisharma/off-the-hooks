import { createSetVotersAction } from "./actions";
import { base_url } from '../../../constants';
import { createApi } from "../../../services/apiData";

const {
    append,
    replace,
    remove,
} = createApi('voters');

export const fetchVoters = () => async (dispatch, getState) => {
    const result = await fetch(base_url);
    const voters = await result.json();

    dispatch(createSetVotersAction(voters));
}

export const appendVoter = (voter) => async (dispatch, getState) => {
    await append(voter);
    dispatch(fetchVoters())
}

export const replaceVoter = (voter) => async (dispatch, getState) => {
    await replace(voter);
    dispatch(fetchVoters());
}

export const deleteVoter = (voter) => async (dispatch, getState) => {
    await remove(voter);
    dispatch(fetchVoters());
}

export const deleteMultipleVoter = (ids) => async (dispatch, getState) => {
    
    await Promise.all(ids.map(id => remove(id)))
    dispatch(fetchVoters());
}