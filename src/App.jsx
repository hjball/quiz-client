import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import FourOhFour from './components/FourOhFour';

import Home from './views/Home';
import Quiz from './views/Quiz';
import Result from './views/Result';

const App = () => (
    <Router>
        <React.Fragment>
            <Header />
            <Switch>
                <Route exact path="/" component={ Home }/>
                <Route exact path="/quiz" component={ Quiz }/>
                <Route path="/quiz/1/result" component={ Result }/>
                <Route component={ FourOhFour }/>
            </Switch>
            <Footer />
        </React.Fragment>
    </Router>
);

export default App;
