import { AddElectionForm } from "./AddElectionForm"
import { ElectionTable } from './ElectionTable'
import {ElectionResults} from './ElectionResults';

import "./ElectionTool.css"
import { useElections } from './useElections';

export const ElectionTool = () => {

    const { elections, createElection, selectedElectionId, setSelectedElectionId, electionResults } = useElections();
    ;
    return (
        <div className="election-tool">
            ElectionTool
            <AddElectionForm submitText="Submit" onSubmit={createElection} />
            { electionResults &&
                <ElectionResults electionResults={electionResults}/>
            }
            <ElectionTable
                elections={elections}
                selectedElectionId={selectedElectionId}
                setSelectedElectionId={setSelectedElectionId} />
        </div>
    );
}
