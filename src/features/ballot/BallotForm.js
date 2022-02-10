import { useForm } from '../../hooks/useForm'

export const BallotForm = ({ voter, election }) => {
    const initialValues = { responses: election.questions.map(q => false) }
    const { form, setForm } = useForm(initialValues)

    console.log({ voter, election, form })

    const Row = ({ i, question, response }) => {
        const id = `ballot-form-row-${i}`

        return (
            <div className='ballot-form-row'>
                <input type="checkbox" checked={response} onChange={setForm} id={id}></input>
                <label forHtml={id}>
                    <div>{question}</div>
                </label>
            </div>
        )
    }

    return (
        <div>
            BALLOT FORM
            {election.questions.map((q, i) => <Row i={i} question={q} response={form[i]} />)}
        </div>
    )
}
