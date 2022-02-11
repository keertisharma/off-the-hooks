import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import {
    selectElectionById,
    selectElections,
    selectElectionViewMode,
    selectSelectedElectionId,
} from "./store/selectors"
import { nanoid } from "nanoid"
import { createSetViewModeAction, createResetModeAction, createSetSelectedElectionIdAction } from "../election/store/actions"
import { appendElections, fetchElections } from "./store/thunks"
import {
    selectBallotsByElection,
    selectBallots,
} from "../ballot/store/selectors";
import { fetchBallots } from "../ballot/store/thunks";


export const useElections = () => {
    const dispatch = useDispatch()

    const elections = useSelector(selectElections)
    const mode = useSelector(selectElectionViewMode)
    const selectedElectionId = useSelector(selectSelectedElectionId)
    const ballots = useSelector(selectBallots)
    const ballotsForSelectedElection = useSelector(selectBallotsByElection(selectedElectionId))
    const selectedElection = useSelector((selectElectionById(selectedElectionId)));

    const ballotCounts = elections.map(e =>
        ballots.filter(b => b.electionId === e.id).length
    )

    let electionResults;
    if (selectedElection) {
        electionResults = selectedElection.questions.map((question) => ({
            question, yes: 0, no: 0
        }))


        ballotsForSelectedElection.forEach((ballot) => {
            ballot.responses.forEach((response, i) => {
                electionResults[i][response.toLowerCase()] += 1;
            });
        })
    }
    ;

    useEffect(() => {
        dispatch(fetchElections())
        dispatch(fetchBallots())
    }, [dispatch])

    const createElection = (electionData) => {
        const elections = ({
            ...electionData,
            id: nanoid()
        })
        dispatch(appendElections(elections))
        dispatch(createResetModeAction())
    }

    const setAddMode = () => {
        dispatch(createSetViewModeAction('add'))
    }

    const resetMode = () => {
        dispatch(createSetViewModeAction(null))
    }

    const setSelectedElectionId = (id) => {
        dispatch(createSetSelectedElectionIdAction(id));
    }

    return {
        elections,
        inAddMode: mode === 'add',
        setAddMode,
        resetMode,
        selectedElectionId,
        setSelectedElectionId,
        createElection,
        electionResults,
        ballotCounts,
    }
}

