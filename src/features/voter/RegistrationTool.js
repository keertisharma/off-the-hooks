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
        inListMode,
        setListMode,
        resetMode,
        selectedVoterId,
        registerVoter,
        onDelete,
        onDeleteMultiple,
        updateVoter,
    } = useRegistration()

        ;

    const toggleListDisplay = () => {
        if (inListMode) { resetMode() } else { setListMode() }
    }

    return (
        <div>
            <h2 className="center">
                Registration Tool
            </h2>

            {!inAddMode &&
                <button
                    type="button"
                    onClick={setAddMode}
                >
                    Register Voter
                </button>
            }

            {inAddMode &&
                <AddVoterForm
                    submitText="Submit"
                    onSubmit={registerVoter}
                    onCancel={resetMode}
                />
            }

            <button type="button" onClick={toggleListDisplay}>{inListMode ? "Hide Voters" : "Show Voters"}</button>

            {(inListMode || inEditMode) &&
                <VoterTable voters={voters}
                    setEditMode={setEditMode}
                    inEditMode={inEditMode}
                    onCancel={resetMode}
                    selectedVoterId={selectedVoterId}
                    onDelete={onDelete}
                    onDeleteMultiple={onDeleteMultiple}
                    updateVoter={updateVoter}
                    sortOrder={sortOrder}
                    setSortOrder={setSortOrder} />
            }
        </div>
    );
}