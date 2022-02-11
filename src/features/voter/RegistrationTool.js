import { AddVoterForm } from "./AddVoterForm";

import "./RegistrationTool.css"
import { useRegistration } from "./useRegistration";
import { VoterTable } from "./VotersTable";

export const RegistrationTool = () => {
    const {
        voters,
        sortOrder,
        setSortOrder,
        inAddMode,
        setAddMode,
        inEditMode,
        setEditMode,
        resetMode,
        selectedVoterId,
        registerVoter,
        onDelete,
        onDeleteMultiple,
        updateVoter,
    } = useRegistration()

    console.log("RegistrationTool", sortOrder);

    return (
        <div>
            <div>
                RegistrationTool
            </div>
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
                onDeleteMultiple={onDeleteMultiple}
                updateVoter={updateVoter}
                sortOrder={sortOrder}
                setSortOrder={ setSortOrder}/>

            <button
                type="button"
                onClick={onDeleteMultiple}>
                Delete Voter Testing
            </button>
        </div>

    );
}