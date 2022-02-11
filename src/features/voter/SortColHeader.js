//import PropTypes from 'prop-types';

const showSortDir = (sortInfo, col) => {
    if (sortInfo.column === col.field) {
        return "(" + (sortInfo.direction === 1? "asc": "desc") + ")";
    }
};

export const SortColHeader = ({
                                  col,
                                  sortOrder,
                                  setSortOrder,
                                  editMode}) => {

    ;


    return (
        <th scope="col" onClick={() => setSortOrder(col.field)} >
            {/* <button type="button" onClick={() => setSortOrder(col.field)}> */}
                {col.label}
                {showSortDir(sortOrder, col)}
            {/* </button> */}
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