export const Error = ({ error, resetMode }) => {
    return (
        <>
            <h1>{error}</h1>
            <button type="button" onClick={resetMode}>Get Me Outta Here!</button>
        </>
    )
}