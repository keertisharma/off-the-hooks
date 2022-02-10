//import PropTypes from 'prop-types';

//import { votersPropType } from './voterToolPropTypes';
import { SortColHeader } from './SortColHeader';
import { VoterViewRow } from './VoterViewRow';
import {EditVoterForm} from "./EditVoterForm";
import {VoterEditRow} from "./VoterEditRow";


const cols = [
    { field: 'id', label: 'Id' },
    { field: 'first_name', label: 'First Name' },
    { field: 'last_name', label: 'Last Name' },
    { field: 'address', label: 'Address' },
    { field: 'city', label: 'City' },
    { field: 'birth_date', label: 'Birthdate' },
    { field: 'email', label: 'Email' },
    { field: 'phone', label: 'Phone' },
];

export const VoterTable = ({
                             voters, editVoterId, votersSort,
                             onSortVoters: sortVoters,
                             onEditVoter: editVoter,
                             onDeleteVoter: deleteVoter,
                             onSaveVoter: saveVoter,
                             onCancelVoter: cancelVoter,
                             onCancel,
                             updateVoter,
                             setEditMode,
                             onDelete,
                         }) => {

    return (
        <form>
            <table>
                <thead>
                <tr>
                    {cols.map( (col, i) => <SortColHeader key={i}
                                                          col={col} sortInfo={votersSort} onSort={sortVoters} />)}
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {voters.map(voter =>
                    voter.id === editVoterId
                        ? <VoterEditRow key={voter.id}
                        voter={voter}
                        onCancel={onCancel}
                        onSubmit={updateVoter} />
                        : <VoterViewRow 
                            key={voter.id}
                            voter={voter}
                            setEditMode={setEditMode}
                            onDelete={onDelete} />)}
                </tbody>
            </table>
        </form>
    );

}

// VoterTable.defaultProps = {
//     voters: [],
//     votersSort: {
//         column: 'id', direction: 1,
//     },
// };

// VoterTable.propTypes = {
//     voters: votersPropType.isRequired,
//     votersSort: PropTypes.shape({
//         column: PropTypes.string.isRequired,
//         direction: PropTypes.string.isRequired,
//     }).isRequired,
//     onSortVoters: PropTypes.func.isRequired,
//     onEditVoter: PropTypes.func.isRequired,
//     onDeleteVoter: PropTypes.func.isRequired,
//     onSaveVoter: PropTypes.func.isRequired,
//     onCancelVoter: PropTypes.func.isRequired,
// };