import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Layout from './components/UI/Layout';
import Tarefa from './components/Task/Lists';
import Form from './components/Task/Form';
import FormEdit from './components/Task/FormEdit.js'



function App() {
  return (
    <Router>
      <Layout></Layout>
      <div className="App">
      <Switch>
        <Route path="/" component={Tarefa} exact></Route>
        <Route path="/posts" exact component={Form}></Route>
        <Route path="/posts/:id" component={FormEdit}></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
