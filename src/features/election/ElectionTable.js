export const ElectionTable = ({ elections }) => {
    console.log({ elections })
    return (
        <div className="election-list">
            ELECTION LIST
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Number Questions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {elections.map(election => {
                        console.log({ election })
                        return (
                            <tr>
                                <td>{election.id}</td>
                                <td>{election.title}</td>
                                <td>{election.questions.length}</td>
                                <td>
                                    <button>show questions</button>
                                    <button>show results</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}