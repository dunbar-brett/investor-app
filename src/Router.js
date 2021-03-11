import React from 'react';
import { Router } from '@reach/router';

import Home from './pages/Home';
import Disqualified from './pages/Disqualified';

function ExportRouter (props) {
    return (
        <Router>
            <Home path='/' />
            <Disqualified path='/'
        </Router>
    )
}

export default ExportRouter