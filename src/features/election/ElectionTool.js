import { AddElectionForm } from "./AddElectionForm"
import { ElectionList } from './ElectionList'

import "./ElectionTool.css"
import { useElections } from './useElections';

export const sample_election = {
    id: 1,
    title: 'Bridge of Doom',
    questions: [
        'What is your name?',
        'What is your favorite color?',
        'What is your quest?',
        'What is the airspeed velocity of an unladen swallow?',
    ]
}

const sample_elections = [
    sample_election,
    {
        ...sample_election,
        id: 2,
    }
]

export const ElectionTool = () => {

    const { elections } = useElections();

    return (
        <div>
            ElectionTool
            <ElectionList elections={elections}></ElectionList>
            <AddElectionForm submitText="Submit" onSubmit={() => { }} />
        </div>
    );
}
