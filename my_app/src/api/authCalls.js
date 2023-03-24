const baseURL = "http://127.0.0.1:8000/myapp/"

const tryCatchFetch = async (url, options) => {
  try {
    let response = await fetch(url, options);
    let data = await response.json();
    return data
  }
  catch (error) {
    throw error
  }
};

const createUser = async (email, pwd) => {
  const data = {
    email: email,
    password: pwd
  }
  let options = {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }
  return tryCatchFetch(baseURL + "signup/", options)

}

const whoAmI = async () => {
  let options = {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers:{
      "Content-Type": "application/json"
    }
  }
  return tryCatchFetch(baseURL + "whoami/", options)
}

const authUser = async (email, pwd) => {
  const data = {
    'email': email,
    'password': pwd
  }
  let options = {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }
  return tryCatchFetch(baseURL + "login/", options)

}

const requestLogOut = async () => {

  let options = {
    method: "POST",
    mode: "cors",
    credentials: "include",
  }
  return tryCatchFetch(baseURL + "logout/", options)

}

export default {
  createUser,
  authUser,
  requestLogOut,
  whoAmI
};