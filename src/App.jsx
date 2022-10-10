import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Presente from "./pages/Presente";
import './App.css';
import Set from '../src/Components/set/Set'
import Erro from './pages/Erro';
import PresentesRecomendados from './pages/RecoPresente';

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Set />} />
                <Route path="/presente" element={<Presente />} />
                <Route path="/Reco" element={<PresentesRecomendados />} />
                <Route path="/erro" element={<Erro />} />
            </Routes>

        </Router>
    )
}

export default App;
