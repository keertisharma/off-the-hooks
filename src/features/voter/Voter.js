export const Voter = ({
    voter: {
        id,
        first_name,
        last_name,
        address,
        city,
        birth_date,
        email,
        phone,
    },
    setEditMode,
    onDelete,
}) => {
    const Row = ({ label, value }) => {
        return (
            <div className='view-user-row'>
                <div className='row-key'>{label}:</div>
                <div className='row-value'>{value}</div>
            </div>
        )
    }

    return (
        <div>
            VOTER
            <Row label={"ID"} value={id} />
            <Row label={"First Name"} value={first_name} />
            <Row label={"Last Name"} value={last_name} />
            <Row label={"Address"} value={address} />
            <Row label={"City"} value={city} />
            <Row label={"Birth Date"} value={birth_date} />
            <Row label={"Email"} value={email} />
            <Row label={"Phone"} value={phone} />
            <button type="button" onClick={() => setEditMode(id)}>edit</button>
            <button type="button" onClick={() => onDelete(id)}>delete</button>
        </div>
    )
}