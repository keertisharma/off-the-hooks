import { AddElectionForm } from "./AddElectionForm"
import { ElectionList } from './ElectionList'

import "./ElectionTool.css"

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
    return (
        <div>
            ElectionTool
            <ElectionList elections={sample_elections}></ElectionList>
            <AddElectionForm submitText="Submit" onSubmit={() => { }} />
        </div>
    );
}
