import React, { Component } from 'react';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: []
        }
    }

    componentDidMount() {
        const tasks = [
            "Estudar React",
            "Pesquisar o que é Virtual DOM"
        ];
        this.setState({
            taskList: tasks
        })
    }

    render() {
        const { taskList } = this.state;
        return (
            <ul>
                {taskList.map(item => {
                    return <li>{item}</li>
                })}
            </ul>
        )
    }
}

export default ToDoList;
