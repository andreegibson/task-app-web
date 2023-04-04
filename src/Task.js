// import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion';

function Task(props) {
    return (
        <Accordion.Item eventKey={props.id}>
            <Accordion.Header>{props.name}</Accordion.Header>
            <Accordion.Body>{props.description}</Accordion.Body>
        </Accordion.Item>
    );
}

export default Task;