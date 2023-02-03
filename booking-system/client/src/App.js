import React, { useEffect, useState } from 'react';

import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";

import Login from './Login';
import Homepage from './Homepage';
import Calendar from './Calendar';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="home" element={<Homepage />} />
                    <Route path="calendar" element={<Calendar />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
