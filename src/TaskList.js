import { useState, useEffect } from 'react'
import axios from 'axios'
import Task from "./Task";
import Accordion from "react-bootstrap/Accordion";

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);
    // continues from above (2)
    useEffect(() => {
        axios
            .get("http://localhost:8080/tasks")
            .then((response) => {
                // console.log(response.data)
                setTasks(response.data);
                setError(null);
            })
            .catch(setError);
    }, []);

    if(error != null) {
        return (
            <p>{error}</p>
        );
    }

    const taskList = tasks.map((task) =>
        <Task
            key={task.id}
            id={task.id}
            name={task.name}
            description={task.description}
        />
    );
    return (
        <Accordion>{taskList}</Accordion>
    );
}

export default TaskList;
