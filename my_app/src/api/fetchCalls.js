const baseURL = "http://127.0.0.1:8000/myapp/"

const tryCatchFetch = async (url) => {
  try {
    console.log('api call')
    let response = await fetch(url);
    let data = await response.json();
    return data
  }
  catch (error) {
    throw error
  }
};

const fetchDrinks = async () => {
  let data = await tryCatchFetch(baseURL + 'drinks/')
  data.sort((a,b) => {
    if (a.name < b.name) {
      return -1
    } else if (a.name > b.name) {
      return 1
    } else {
      return 0
    }
  })
  return data
}

const fetchFoods = async () => {
  return tryCatchFetch(baseURL + 'food/')
}

export default {
  fetchDrinks,
  fetchFoods
};