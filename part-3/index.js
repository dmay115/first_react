const App = () => {
    return (
        <div>
            <Person
                name="Derek"
                age={36}
                hobbies={["video games", "plants", "cocktails"]}
            />
            <Person
                name="Evelyn"
                age={7}
                hobbies={["youtube", "reading", "drawing"]}
            />
            <Person
                name="Kayla"
                age={35}
                hobbies={["reading", "home decor", "plants"]}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
