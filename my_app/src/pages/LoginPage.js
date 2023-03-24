
import {Link, useNavigate} from 'react-router-dom';
import authCalls from '../api/authCalls.js'


const LoginPage = (props) => {
  const navigate = useNavigate();
  const logIn = async (e) => {
    e.preventDefault()
    let email = e.target['0'].value
    let pwd= e.target['1'].value
    let result = await authCalls.authUser(email, pwd)
    console.log(result)
    props.handleLogin(result)
    navigate('/')
  };
  const logOut = async (e) => {
    e.preventDefault()
    let result = await authCalls.requestLogOut()
    props.handleLogin(null)
    navigate('/')
  }

  return (
    <div className="login-wrapper text-center">
      <h1> Please Log In! </h1>
      <form className="d-flex flex-column align-items-center" onSubmit={logIn}>
        <input type="text" placeholder="Username..." />
        <input type="text" placeholder="Password..." />
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <Link to="/signup">Not a member? Sign up!</Link>
      <div>
        <button className='btn btn-secondary' onClick={logOut}>Log Out</button>
      </div>
    </div>
  )
}

export default LoginPage;