import { useState } from 'react'

export const BallotForm = ({
    voter,
    election,
    castVote,
}) => {
    const [selectedQuestions, setSelectedQuestions] = useState([])

    const onSelect = (iClicked) => {
        const newSelections = selectedQuestions.includes(iClicked) ?
            selectedQuestions.filter(i => i !== iClicked) :
            [...selectedQuestions, iClicked]

        setSelectedQuestions(newSelections)
    }

    return (
        <div>
            <p>BALLOT FORM</p>
            <p>Voter's Email : {voter.email}</p>
            <p>Election Title : {election.title}</p>
            {election.questions.map((question, i) =>
                <div className='ballot-form-row' key={i}>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedQuestions.includes(i)}
                            onChange={() => onSelect(i)}
                        />
                        <div>{question}</div>
                    </label>
                </div>
            )}
            <button type="button" onClick={() => castVote(selectedQuestions)} >Cast Vote</button>
        </div>
    )
}
