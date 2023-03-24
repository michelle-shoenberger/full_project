import { useNavigate } from 'react-router-dom';
import authCalls from '../api/authCalls.js';

const SignUpPage = (props) => {
  const navigate = useNavigate();
  const signUp = async (e) => {
    e.preventDefault()
    let email = e.target['0'].value
    let pwd= e.target['1'].value
    let result = await authCalls.createUser(email, pwd)
    console.log(result)
    props.handleSignin(result)
    navigate('/')
  };

  return (
    <div className="login-wrapper text-center">
      <h1> Please Sign Up! </h1>
      <form className="d-flex flex-column align-items-center" onSubmit={signUp}>
        <input type="email" placeholder="Email..." />
        <input type="text" placeholder="Password..." />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default SignUpPage;