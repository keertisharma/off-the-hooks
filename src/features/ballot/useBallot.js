import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

// from election slice
import { fetchElections } from "../election/store/thunks";
import { selectElections } from "../election/store/selectors";

// from voter slice
import { fetchVoters } from "../voter/store/thunks"

// from ballot slice
import { createSetSelectedElectionIdAction } from "./store/actions";
import { selectSelectedElectionId } from "./store/selectors";

export const useBallot = () => {
    

    const dispatch = useDispatch()

    const elections = useSelector(selectElections);
    const selectedElectionId = useSelector(selectSelectedElectionId)
    

    useEffect(() => {
        dispatch(fetchElections())
        dispatch(fetchVoters())
    }, [dispatch])

    const setSelectedElectionId = (id) => {
        
        dispatch(createSetSelectedElectionIdAction(id));
    }

    return {
        elections,
        setSelectedElectionId,
        selectedElectionId,
    };

};