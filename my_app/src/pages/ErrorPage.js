import {Container} from 'react-bootstrap';
import { useRouteError } from 'react-router-dom';

const ErrorPage = (props) => {
    const error = useRouteError();

    return (
        <Container>
            <h1> Error </h1>
            <p> {error.statusText || error.message} </p>
        </Container>
    );
}

export default ErrorPage;