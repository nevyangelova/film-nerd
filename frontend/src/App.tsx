import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieSearchPage from './movies/MovieSearchPage';
import ActorDetailsPage from './actors/ActorDetailsPage';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';
import { ROOT_PATH, ACTOR_DETAILS_PATH } from './routes';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
});

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Route path={ROOT_PATH} component={MovieSearchPage} exact />
                <Route path={ACTOR_DETAILS_PATH} component={ActorDetailsPage} />
            </Router>
        </ApolloProvider>
    );
};

export default App;
