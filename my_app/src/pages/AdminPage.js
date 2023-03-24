import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import MyForm from "../components/Form";
import adminCalls from "../api/adminCalls";
import { UserContext } from '../App';

const AdminPage = (props) => {
  const {user, setUser} = useContext(UserContext)
  const drink = {
    'name': 'text',
    'price': 'float',
    'description': 'textarea'
  }
  const fooditem = {
    'name': 'text',
    'price': 'float',
    'description': 'textarea',
    'bread': 'text'
  }

  const handleSubmit = async (data, endpoint) => {
    let result = await adminCalls.postToApi(data, endpoint, user.token);
    console.log(result)
  };

  return (
      <Container fluid className='text-center'>
        <h1>Admin</h1>
        <Row >
          <Col >
            <h2>Drink menu</h2>
            <p>Create new item:</p>
            <MyForm model={drink} followOn={handleSubmit} endpoint="drinks/"/>
          </Col>
          <Col>
            <h2>Food menu</h2>
            <p>Create new item:</p>
            <MyForm model={fooditem} followOn={handleSubmit} endpoint="food/"/>
          </Col>
        </Row>
      </Container>
  )
}

export default AdminPage;