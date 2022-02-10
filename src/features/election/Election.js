export const Election = ({ election: { id, title, questions } }) => {

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
            ELECTION
            <Row label={"ID"} value={id} />
            <Row label={"Title"} value={title} />
            {questions.map((question, i) =>
                <Row label={`Question ${i + 1}`} name={`question-${i + 1}`} value={question} />
            )}
        </div>
    )
}