import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Presente from "./pages/Presente";
import './App.css';
import Set from '../src/Components/set/Set'



function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Set />} />
                <Route path="/presente" element={<Presente />} />
            </Routes>

        </Router>
    )
}

export default App;
