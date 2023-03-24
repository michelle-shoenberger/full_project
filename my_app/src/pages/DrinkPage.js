import {Container, Row, Col} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import fetchCalls from '../api/fetchCalls.js';
import Drink from '../components/Drink.js';
import Filter from '../components/Filter.js';


const DrinkPage = (props) => {
    const [drinks, SetDrinks] = useState([])
    const [alldrinks, SetAllDrinks] = useState([])
    const [text, setText] = useState("")


    useEffect(() => {
      console.log('useeffect')
      const getDrinks = async () => {
        if (alldrinks.length===0) {
          try {
            let data = await fetchCalls.fetchDrinks()
            SetDrinks(data)
            SetAllDrinks(data)
          } catch (e) {
            console.error(e)
          }
        } else {
          // Ability to filter the data
          // Filter by name of drinks
          let filteredDrinks = alldrinks.filter((drink) => {
            return drink.name.toLowerCase().includes(text.toLowerCase())
          })
          console.log(filteredDrinks)
          SetDrinks(filteredDrinks)
        } 
      }
      getDrinks()
    }, [text])

    //Add handle function to set text off search form
    const handleTextChange = async (event) => {
      setText(event.target.value)
    }

    //List of drinks
    const listOfDrinks = drinks.map((drink, i) => {
      return (
        <Col style={{width: '250px'}} className="mb-5">
            <Drink {...drink} key={i}/>
        </Col>
      )})

    return (
        <Container>
            <Filter placeholder="Filter drinks" handleChange={handleTextChange}/>
            <Row xs={1} md={3} className="justify-content-sm-around justify-content-center">
              { listOfDrinks }
            </Row>
        </Container>
    )
}

export default DrinkPage;





// Old code
// //List of drinks
// const listOfDrinks = drinks.map((drink, i) => {
//   console.log('render', drink)
//   return (
//       <ListGroup.Item key={i}>
//         <Drink {...drink} />
//       </ListGroup.Item>
//   )})