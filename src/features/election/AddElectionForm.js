import { useForm } from "../../hooks/useForm"

const initialForm = {
    title: '',
    questions: ['', '']
}

export const AddElectionForm = ({ submitText, onSubmit }) => {
    const { form, change, resetForm } = useForm(initialForm)

    const { title, questions } = form

    const submit = () => {
        onSubmit({
            "id": 1,
            "title": "Bridge of Doom",
            "questions": [
              "What is your name?",
              "What is your favorite color?",
              "What is your quest?",
              "What is the airspeed velocity of an unladen swallow?"
            ]
          })
    }

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
        <div>
            ADD ELECTION
            <Row label="Title" name="title" value={title} />
            {questions.map((question, i) =>
                <Row label={`Question ${i + 1}`} name={`question-${i + 1}`} value={question} />
            )}

            <button type="button" onClick={submit}>{submitText}</button>
        </div>
    )
}