import { VoterList } from "./VoterList";
import { AddVoterForm } from "./AddVoterForm";
import { EditVoterForm } from "./EditVoterForm";

import "./RegistrationTool.css"
import { useRegistration } from "./useRegistration";

export const RegistrationTool = () => {
    const {
        voters,
        sortOrder,
        inAddMode,
        setAddMode,
        inEditMode,
        setEditMode,
        selectedVoterId,
        registerVoter,
    } = useRegistration()

    return (
        <div>
            <div>
                RegistrationTool
            </div>
            <VoterList voters={voters} />
            <button type="button" onClick={setAddMode}>Add Voter</button>

            {inAddMode &&
                <AddVoterForm submitText="Submit" onSubmit={registerVoter}></AddVoterForm>
            }
            {/*<EditVoterForm voter={voters[0]} submitText="Submit" onSubmit={() => { }}></EditVoterForm>*/}
        </div>

    );
}