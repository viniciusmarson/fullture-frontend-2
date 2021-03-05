import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Header } from './common/Header';
import ToDoList from './components/ToDoList';
import ToDoList2 from './components/ToDoList2';

function App() {
    return (
        <Router>
            {/* <Header /> */}
            <Switch>
                <Route path='/todo' component={ToDoList2} />
                <Route exact path='/todolist' component={ToDoList} />
            </Switch>
        </Router>
    )
}
export default App;
