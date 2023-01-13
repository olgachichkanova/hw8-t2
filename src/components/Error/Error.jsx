const Error = ({error}) => {
    return (
        <div className="error message">
            <h1>Error:</h1>
            <p>{error.message}</p>
        </div>
    )
}

export default Error;