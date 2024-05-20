import { useState } from "react";
import "../App.css";

const HomePage = () => {
    const [counters, setCounters] = useState([{ id: 1, value: 0 }]);

    const addCounter = () => {
        setCounters([...counters, { id: counters.length + 1, value: 0 }]);
    };

    const incrementCounter = (id) => {
        setCounters(
            counters.map((counter) =>
                counter.id === id ? { ...counter, value: counter.value + 1 } : counter
            )
        );
    };

    const decrementCounter = (id) => {
        setCounters(
            counters.map((counter) =>
                counter.id === id ? { ...counter, value: counter.value - 1 } : counter
            )
        );
    };

    const deleteCounter = (id) => {
        setCounters(counters.filter((counter) => counter.id !== id));
    };

    return (
        <div className="Navbar home">
            <button className="btns counterHeader" onClick={addCounter}>Add Counter</button>
            {counters.map((counter) => (
                <div key={counter.id} className={`box${counter.id}`}>
                    <button className="btns" onClick={() => incrementCounter(counter.id)}>+</button>
                    {counter.value}
                    <button className="btns" onClick={() => decrementCounter(counter.id)}>-</button>
                    <button className="btns" onClick={() => deleteCounter(counter.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default HomePage;
