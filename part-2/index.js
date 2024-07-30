const App = () => (
    <div>
        <Tweet
            username="Dmay115"
            name="Derek"
            date="04/02/2024"
            message="Look! My first tweet!"
        />
        <Tweet
            username="PlantGuy4"
            name="Caleb"
            date="04/03/2024"
            message="My plants are growing so well!"
        />
        <Tweet
            username="BeachGirl9"
            name="Evelyn"
            date="04/24/2024"
            message="The weather is perfect for the beach today."
        />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
