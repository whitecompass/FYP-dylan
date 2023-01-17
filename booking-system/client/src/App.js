import React, { useEffect, useState } from 'react';
import Calendar from './Calendar';
import Login from './Login';

function App() {
    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch("api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])

    return (
        <div>
            <Login />
        </div>
    );
}

export default App;
