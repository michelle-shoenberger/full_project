import {Card} from 'react-bootstrap';


const MenuItem = (props) => {
  // name, price, description, bread
  // add image

  return (
    <Card border="dark"  className="secondary m-2 rounded" >
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.ImgOverlay>
        <input type="checkbox"/>
      </Card.ImgOverlay>
      <Card.Body >
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle>{`${props.price}`}</Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default MenuItem;