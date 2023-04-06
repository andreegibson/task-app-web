import {useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import axios from "axios";

function callApi(taskName, taskDescription) {
    axios
        .post("http://localhost:8080/tasks", "")
        .then(response => {
            console.log("added a task, bro");
        })
        .catch(() => console.log("bad stuff happened...."))
}

function NewTask() {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    return (
        <Container>
            <Row>
                <Col>
                    <label>Task Name:
                        <input
                            value={taskName}
                            onChange={e => setTaskName(e.target.value)}
                        />
                    </label>
                </Col>
                <Col>
                    <label>Task Description:
                        <input
                            value={taskDescription}
                            onChange={e => setTaskDescription(e.target.value)}
                        />
                    </label>
                </Col>
                <Col>
                    <Button size="lg" onClick={() => callApi(taskName, taskDescription)}>Add Task</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default NewTask;