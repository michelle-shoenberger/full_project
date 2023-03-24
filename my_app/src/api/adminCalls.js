const baseURL = "http://127.0.0.1:8000/myapp/"

const tryCatchFetch = async (url, options) => {
  try {
    console.log('api call')
    let response = await fetch(url, options);
    let data = await response.json();
    return data
  }
  catch (error) {
    throw error
  }
};

const postToApi = async (formData, endpoint, token) => {
  const options = {
    method: "POST",
    mode: "cors",
    body: formData,
    headers: {
      'Authorization': 'Token ' + token
    }
  }
  let data = await tryCatchFetch(baseURL + endpoint, options)
  return data
};

export default {
  postToApi
};