
export const ElectionResults = ({electionResults}) => {
    return (
    <div>
        <table>
            <thead>
            <tr>
                <th>Question</th>
                <th>Yes</th>
                <th>No</th>
            </tr>
            </thead>
            <tbody>
            {electionResults.map((result) => {
                const {question, yes, no} = result;
                return (<tr>
                    <td>{question}</td>
                    <td>{yes}</td>
                    <td>{no}</td>
                </tr>)
            })}
            </tbody>
        </table>

    </div>
    );
}