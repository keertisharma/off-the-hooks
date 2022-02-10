import {createSetVotersAction} from "./actions";

export const fetchVoters = () => async (dispatch, getState) => {
    const result = await fetch('http://127.0.0.1:5050/voters');
    const voters = await result.json();

    console.log(voters);
    dispatch(createSetVotersAction(voters));
}

export const appendVoter = (voter) => async(dispatch, getState) => {
    console.log("ADDING VOTER", voter)
    // use API to add voter
    // dispatch fetch to get the new list 
}