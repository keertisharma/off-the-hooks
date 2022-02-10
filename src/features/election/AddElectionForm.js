import { useForm } from "../../hooks/useForm"

const initialForm = {
    title: '',
    questions: ['', '']
}

export const AddElectionForm = ({ submitText, onSubmit }) => {
    const { form, change } = useForm(initialForm)

    const { title, questions } = form

    const Row = ({ label, name, value }) => {
        const id = `add-election-form-row-${name}`

        return (
            <div className="add-election-form-row">
                <label htmlFor={id}>{label}</label>
                <input name={name} value={value} id={id} onChange={change} />
            </div>
        )
    }

    return (
        <div className="add-election">
            ADD ELECTION
            <Row label="Title" name="title" value={title} />
            {questions.map((question, i) =>
                <Row label={`Question ${i + 1}`} name={`question-${i + 1}`} value={question} />
            )}

            <button type="button" onSubmit={onSubmit}>{submitText}</button>
        </div>
    )
}