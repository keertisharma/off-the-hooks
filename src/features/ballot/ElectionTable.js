export const ElectionTable = ({ elections, selectedElectionId, setSelectedElectionId }) => {
    

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
                        
                        return (
                            <tr key={election.id}>
                                <td>{election.id}</td>
                                <td className= {election.id === selectedElectionId? "selected":""}>
                                    {election.title}</td>
                                <td>{election.questions.length}</td>
                                <td>
                                    <button type="button"
                                            onClick={() => setSelectedElectionId(election.id)}
                                    >Vote</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}