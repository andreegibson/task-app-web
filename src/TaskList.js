import { useState, useEffect } from 'react'
import axios from 'axios'

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
        <li key={task.id}>
            {task.name} - {task.description}
        </li>
    );
    return (
        <p>{taskList}</p>
    );
}

export default TaskList;
