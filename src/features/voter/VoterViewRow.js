//import PropTypes from 'prop-types';
import { memo } from 'react';

//import { voterPropType } from './voterToolPropTypes';

export const VoterViewRow = memo(({
                                    voter,
                                    onEditVoter: editVoter,
                                    onDeleteVoter: deleteVoter,
                                }) => {

    return (
        <tr>
            <td>{voter.id}</td>
            <td>{voter.first_name}</td>
            <td>{voter.last_name}</td>
            <td>{voter.address}</td>
            <td>{voter.city}</td>
            <td>{voter.birth_date}</td>
            <td>{voter.email}</td>
            <td>{voter.phone}</td>
            <td>
                <button type="button"
                        onClick={() => editVoter(voter.id)}>
                    Edit</button>
                <button type="button"
                        onClick={() => deleteVoter(voter.id)}>
                    Delete</button>
            </td>
        </tr>
    );


});

// VoterViewRow.propTypes = {
//     voter: voterPropType.isRequired,
//     onEditVoter: PropTypes.func.isRequired,
//     onDeleteVoter: PropTypes.func.isRequired,
// };