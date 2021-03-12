import React from 'react';
import { Router } from '@reach/router';

import Home from './pages/Home';
import Disqualified from './pages/Disqualified';
import UserRegistration from './pages/UserRegistration';

function ExportRouter (props) {
    return (
        <Router>
            <Home path='/' />
            <Disqualified path='/disqualified' />
            <UserRegistration path='/userRegistration'></UserRegistration>
        </Router>
    )
}

export default ExportRouter