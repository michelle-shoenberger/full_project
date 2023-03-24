import {Navbar, Nav, Container, Form, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import { useContext } from 'react';
import logo from '../images/coffeebrand.jpg';
import { UserContext } from '../App';

const AppNav = (props) => {
    const {user, setUser} = useContext(UserContext)

    // const logOff = () => {
    //     console.log('log-off')
    //     setUser(null)
    // }

    const makeButtons = () => {
        if (user) {
            return ([
                <Button as={NavLink} to="#" variant="primary" className="ms-5 order-lg-3">Welcome, {user.username}</Button>, 
                <Button as={NavLink} to="/" variant="danger" className="ms-5 order-lg-3" onClick={() => {setUser(null)}}>Log out</Button>
            ])
        } else {
            return (<Button as={NavLink} to="/login" variant="primary" className="ms-5 order-lg-3">Sign in!</Button>)
        }
    };
    return (
        <div>
            <Navbar variant="dark" expand="lg" fixed="top" className="primary" collapseOnSelect>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    {makeButtons()}
                    <Navbar.Collapse>
                        <Navbar.Brand eventKey="0" as={NavLink} to="/">
                            <img src={logo} alt="logo" width="30" height="30"/>{' '}
                            Lil' Bean Cafe
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link eventKey="1" as={NavLink} to="/" className="text-start">About</Nav.Link>
                            <Nav.Link eventKey="2" as={NavLink} to="/drinkmenu" className="text-start">Drinks</Nav.Link>
                            <Nav.Link eventKey="3" as={NavLink} to="/foodmenu" className="text-start">Food</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control 
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search" />
                            <Button variant="secondary">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default AppNav;