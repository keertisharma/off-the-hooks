import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchElections } from "../election/store/thunks";
import { fetchVoters } from "../voter/store/thunks"
import { selectElections } from "../election/store/selectors";
import { createSetSelectedElectionIdAction } from "./store/actions";
import { selectSelectedElectionId } from "./store/selectors";

export const useBallot = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchElections())
        dispatch(fetchVoters())
    }, [dispatch])

    const elections = useSelector(selectElections);
    const setSelectedElectionId = (id) => {
        console.log({id})
        dispatch(createSetSelectedElectionIdAction(id));
    }
    const selectedElectionId = useSelector(selectSelectedElectionId)

    console.log({selectedElectionId})
    return {
        elections,
        setSelectedElectionId,
        selectedElectionId,
    };

};