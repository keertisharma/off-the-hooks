import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

// from election slice
import { fetchElections } from "../election/store/thunks";
import { selectElections } from "../election/store/selectors";

// from voter slice
import { fetchVoters } from "../voter/store/thunks"
import { selectVoters } from '../voter/store/selectors';

// from ballot slice
import { createSetSelectedElectionIdAction, createSetModeAction, createSetSelectedVoterIdAction } from "./store/actions";
import { selectSelectedElectionId,selectMode, selectBallotsByElection, selectSelectedVoterId } from "./store/selectors";
import { fetchBallots } from './store/thunks';


export const useBallot = () => {
    

    const dispatch = useDispatch()

    const elections = useSelector(selectElections);
    const selectedElectionId = useSelector(selectSelectedElectionId)
    const mode = useSelector(selectMode)
    const voters = useSelector(selectVoters)
    const ballotsForSelectedElection = useSelector(selectBallotsByElection(selectedElectionId))
    const selectedVoterId = useSelector(selectSelectedVoterId)
    const selectedElection = elections.find(e => e.id ===  selectedElectionId)
    const selectedVoter = voters.find(v => v.id ===  selectedVoterId)


    useEffect(() => {
        dispatch(fetchElections())
        dispatch(fetchVoters())
        dispatch(fetchBallots())
    }, [dispatch])

    const setSelectedElectionId = (id) => {
        
        dispatch(createSetSelectedElectionIdAction(id));
        dispatch(createSetModeAction("login"));
    }

    const onLoginSubmit = ({email}) => {
        // Validate Email
        console.log(email);
        const currentVoter = voters.find(c => c.email === email);
        
        if(!currentVoter){
            // Redirect to Invalid User
        }

        const existingBallot = ballotsForSelectedElection.find(b => b.voterId === currentVoter.id);

        if(existingBallot) {
            // Redirect to Already Voted
        }

        dispatch(createSetModeAction('voting'));
        dispatch(createSetSelectedVoterIdAction(currentVoter.id))
        // selectedVoterId
    }

    return {
        elections,
        setSelectedElectionId,
        selectedElection,
        selectedElectionId,
        selectedVoter,
        inDefaultMode: mode === 'default',
        inLoginMode: mode === 'login',
        inErrorMode: mode === 'error',
        inVotingMode: mode === 'voting',
        onLoginSubmit,
        
    };

};