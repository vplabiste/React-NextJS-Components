import React, { useState } from 'react';

export const WelcomeCard = ({ name }) => {
    return (
        <div className="welcome-card">
            <h1>Welcome, {name}!</h1>
        </div>
    );
};

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div className="counter">
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export const StudentInfo = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}, Age: ${age}`);
    };

    return (
        <form onSubmit={handleSubmit} className="student-info">
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
};