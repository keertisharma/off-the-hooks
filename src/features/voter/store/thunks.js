import {createSetVotersAction} from "./actions";

export const fetchVoters = () => async (dispatch, getState) => {
    const result = await fetch('http://127.0.0.1:5050/voters');
    const voters = await result.json();

    console.log(voters);
    dispatch(createSetVotersAction(voters));
}