import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

// from election slice
import { fetchElections } from "../election/store/thunks";
import { selectElections } from "../election/store/selectors";

// from voter slice
import { fetchVoters } from "../voter/store/thunks"
import { selectVoters } from '../voter/store/selectors';

// from ballot slice
import {
    createSetSelectedElectionIdAction,
    createSetModeAction,
    createSetSelectedVoterIdAction,
    createSetErrorAction,
} from "./store/actions";
import {
    selectSelectedElectionId,
    selectMode,
    selectBallotsByElection,
    selectSelectedVoterId,
    selectError,
} from "./store/selectors";
import {
    fetchBallots,
    appendBallot,
} from './store/thunks';


export const useBallot = () => {


    const dispatch = useDispatch()

    const elections = useSelector(selectElections);
    const selectedElectionId = useSelector(selectSelectedElectionId)
    const mode = useSelector(selectMode)
    const voters = useSelector(selectVoters)
    const ballotsForSelectedElection = useSelector(selectBallotsByElection(selectedElectionId))
    const selectedVoterId = useSelector(selectSelectedVoterId)
    const selectedElection = elections.find(e => e.id === selectedElectionId)
    const selectedVoter = voters.find(v => v.id === selectedVoterId)
    const error = useSelector(selectError)

    useEffect(() => {
        dispatch(fetchElections())
        dispatch(fetchVoters())
        dispatch(fetchBallots())
    }, [dispatch])

    const setSelectedElectionId = (id) => {

        dispatch(createSetSelectedElectionIdAction(id));
        dispatch(createSetModeAction("login"));
    }

    const onLoginSubmit = ({ email }) => {
        const currentVoter = voters.find(c => c.email === email);

        if (!currentVoter) {
            dispatch(createSetErrorAction('User Not Found'))
            dispatch(createSetModeAction('error'));

            return
        }

        const existingBallot = ballotsForSelectedElection.find(b => b.voterId === currentVoter.id);

        if (existingBallot) {
            dispatch(createSetErrorAction('User Has Already Voted In This Election!!!!!!!!!'))
            dispatch(createSetModeAction('error'));
            return
        }

        dispatch(createSetModeAction('voting'));
        dispatch(createSetSelectedVoterIdAction(currentVoter.id))
    }

    const castVote = (selectedQuestions) => {
        const ballot = {
            voterId: selectedVoterId,
            electionId: selectedElectionId,
            responses: selectedElection.questions.map((q, i) => {
                if (selectedQuestions.includes(i)) {
                    return 'Yes'
                } else {
                    return 'No'
                }
            })
        }
        dispatch(appendBallot(ballot))
        dispatch(createSetModeAction('success'))
    }

    const resetMode = () => {
        dispatch(createSetModeAction('default'))
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
        error,
        inVotingMode: mode === 'voting',
        inSuccessMode: mode === 'success',
        onLoginSubmit,
        castVote,
        resetMode,
    };
};