import { BallotForm } from "./BallotForm";
import { sample_voter } from "../voter/RegistrationTool";
import { sample_election } from "../election/ElectionTool"

import "./VotingTool.css"

export const VotingTool = () => {
    return (
        <div>
            VotingTool
            <BallotForm voter={sample_voter} election={sample_election} />
        </div>
    );
}