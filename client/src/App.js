import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './components/Header';
const Dashboard = () => <h2>Dashb</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

function App() {
  return (
    <div className='container'>
      <Router>
        <Header />
        <Route exact path='/header' component={Header}></Route>
        <Route exact path='/dash' component={Dashboard}></Route>
      </Router>
    </div>
  );
}

export default App;
