import {Container, Row, Col} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import fetchCalls from '../api/fetchCalls.js';
import MenuItem from '../components/MenuItem.js';
import Filter from '../components/Filter.js';


const MenuPage = (props) => {
    const [foods, SetFoods] = useState([])
    const [allfood, SetAllFood] = useState([])
    const [text, setText] = useState("")


    useEffect(() => {
      console.log('useeffect')
      const getFood = async () => {
        if (allfood.length===0) {
          try {
            let data = await fetchCalls.fetchFoods()
            data.sort((a,b) => {
              if (a.name < b.name) {
                return -1
              } else if (a.name > b.name) {
                return 1
              } else {
                return 0
              }
            })
            SetFoods(data)
            SetAllFood(data)
          } catch (e) {
            console.error(e)
          }
        } else {
          // Ability to filter the data
          // Filter by name of drinks
          let filteredFoods = allfood.filter((item) => {
            return item.name.toLowerCase().includes(text.toLowerCase())
          })
          console.log(filteredFoods)
          SetFoods(filteredFoods)
        } 
      }
      getFood()
    }, [text])

    //Add handle function to set text off search form
    const handleTextChange = async (event) => {
      setText(event.target.value)
    }

    //List of drinks
    const listOfFood = foods.map((item, i) => {
      return (
        <Col style={{width: '250px'}} className="mb-5">
            <MenuItem {...item} key={i}/>
        </Col>
      )})

    return (
        <Container>
            <Filter placeholder="Filter menu" handleChange={handleTextChange}/>
            <Row xs={1} md={3} className="justify-content-sm-around justify-content-center">
              { listOfFood }
            </Row>
        </Container>
    )
}

export default MenuPage;