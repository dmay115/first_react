const Tweet = (props) => {
    return (
        <div className="tweet">
            <h3>Tweet:</h3>
            <p>Username: {props.username}</p>
            <p>Name: {props.name}</p>
            <p>Date: {props.date}</p>
            <p>Tweet: {props.message}</p>
        </div>
    );
};
