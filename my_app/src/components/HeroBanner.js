import {Container, Button} from 'react-bootstrap';

import "./HeroBanner.css"
import first from "../images/brooke-cagle-_rraO9NirHE-unsplash.jpg";

const HeroBanner = () => {
    return (
        <Container className="heroContainer">
            <img
                className="heroImage"
                src={first}
                alt="First" />
            <div className="heroText text-center">
                <h3>Join us!</h3>
                <Button variant="success">Sign Up</Button>
            </div>
        </Container>
    )
}

export default HeroBanner;


