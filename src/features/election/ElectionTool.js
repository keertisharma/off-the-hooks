import { AddElectionForm } from "./AddElectionForm"
import { ElectionTable } from './ElectionTable'
import { ElectionResults } from './ElectionResults';

import "./ElectionTool.css"
import { useElections } from './useElections';

export const ElectionTool = () => {

    const {
        elections,
        createElection,
        selectedElectionId,
        setSelectedElectionId,
        electionResults,
        ballotCounts,
    } = useElections();
    ;
    return (
        <div className="election-tool">
            <h3 className="title">Election Tool</h3>
            <AddElectionForm submitText="Submit" onSubmit={createElection} />
            {electionResults &&
                <ElectionResults electionResults={electionResults} />
            }
            <ElectionTable
                elections={elections}
                ballotCounts={ballotCounts}
                selectedElectionId={selectedElectionId}
                setSelectedElectionId={setSelectedElectionId}
            />
        </div>
    );
}
