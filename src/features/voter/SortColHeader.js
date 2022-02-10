//import PropTypes from 'prop-types';

const showSortDir = (sortInfo) => {
    if (sortInfo.column) {
        return "(" + sortInfo.direction + ")";
    }
};

export const SortColHeader = ({
                                  col,
                                  sortInfo,
                                  editMode,
                                  onSort: sort }) => {

    const colLabel = (editMode && col.editControlId)
        ? <label htmlFor={col.editControlId}>{col.label}</label>
        : col.label;

    return (
        <th>
            <button type="button" onClick={() => sort(col.field)}>
                {colLabel} 
                {/* {showSortDir(sortInfo)} */}
            </button>
        </th>
    );

};

// SortColHeader.defaultProps = {
//     editMode: false,
// };

// SortColHeader.propTypes = {
//     col: PropTypes.shape({
//         field: PropTypes.string.isRequired,
//         label: PropTypes.string.isRequired,
//         editControlId: PropTypes.string,
//     }),
//     sortInfo: PropTypes.shape({
//         column: PropTypes.string.isRequired,
//         direction: PropTypes.string.isRequired,
//     }),
//     editMode: PropTypes.bool.isRequired,
//     onSort: PropTypes.func.isRequired,
// };