import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Header } from './common/Header';
import ToDoList from './common/ToDoList';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route exact path='/todolist' component={ToDoList} />
      </Switch>
    </Router>
  )
}
export default App;
