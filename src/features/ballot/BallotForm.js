import { useForm } from '../../hooks/useForm'

export const BallotForm = ({ voter, election, castVote }) => {
    const initialValues = { responses: election.questions.map(q => false) }
    const { form, setForm } = useForm(initialValues)

    const Row = ({question, response }) => {

        return (
            <div className='ballot-form-row'>
                <label>
                    <input type="checkbox" checked={response} onChange={setForm}></input>
                    <div>{question}</div>
                </label>
            </div>
        )
    }

    return (
        <div>
            <p>BALLOT FORM</p>
            <p>Voter's Email : {voter.email}</p>
            <p>Election Title : {election.title}</p>
            {election.questions.map((q, i) => <Row key={i} question={q} response={form[i]} />)}
            <button type="button" onClick={() => castVote} >Cast Vote</button>
        </div>
    )
}
