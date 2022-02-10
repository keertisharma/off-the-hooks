import { VoterList } from "./VoterList";
import { AddVoterForm } from "./AddVoterForm";
import { EditVoterForm } from "./EditVoterForm";

import "./RegistrationTool.css"
import { useRegistration } from "./useRegistration";
import { VoterTable } from "./VotersTable";

export const RegistrationTool = () => {
    const {
        voters,
        sortOrder,
        inAddMode,
        setAddMode,
        inEditMode,
        setEditMode,
        resetMode,
        selectedVoterId,
        registerVoter,
        onDelete,
        updateVoter,
    } = useRegistration()

    return (
        <div>
            <div>
                RegistrationTool
            </div>
            <VoterList
                voters={voters}
                setEditMode={setEditMode}
                inEditMode={inEditMode}
                onCancel={resetMode}
                selectedVoterId={selectedVoterId}
                onDelete={onDelete}
                updateVoter={updateVoter}
            />
            <button
                type="button"
                onClick={setAddMode}
            >
                Add Voter
            </button>

            {inAddMode &&
                <AddVoterForm
                    submitText="Submit"
                    onSubmit={registerVoter}
                    onCancel={resetMode}
                />
            }

            <VoterTable voters={voters}
                setEditMode={setEditMode}
                inEditMode={inEditMode}
                onCancel={resetMode}
                selectedVoterId={selectedVoterId}
                onDelete={onDelete}
                updateVoter={updateVoter} />
        </div>

    );
}