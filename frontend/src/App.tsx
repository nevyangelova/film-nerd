import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieSearchPage from './MovieSearchPage/MovieSearchPage';

import './App.css';
import { ROOT_PATH } from './routes';

const App: React.FC = () => {
    return (
        <Router>
            <Route path={ROOT_PATH} component={MovieSearchPage} />
        </Router>
    );
};

export default App;
