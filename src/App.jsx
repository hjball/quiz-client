import React from 'react';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './views/Home';
import Quiz from './views/Quiz';

const App = () => (
    <Router>
        <React.Fragment>
            <Header />
            <Route exact path="/" component={ Home }/>
            <Route exact path="/quiz" component={ Quiz }/>
            <Footer />
        </React.Fragment>
    </Router>
);

export default App;
