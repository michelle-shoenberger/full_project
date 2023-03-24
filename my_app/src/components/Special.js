import {Container, Row, Col, Button} from 'react-bootstrap';
const Special = () => {
    return (
        <Container fluid className="banner bg-dark text-light">
            <Row>
                <Col as="h4" className="me-auto">Try today's special:</Col>
                <Col as="h2" className="">Avocado Grilled Cheese</Col>
            </Row>
            <Button variant="light">Let's Go!</Button>
        </Container>
    )
}

export default Special;
