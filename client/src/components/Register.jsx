import {useState} from 'react'
import css from '../style/Register.module.scss';
import Login from './Login';
import SignUp from './SignUp';

const Register = ({isLoggedIn,setIsLoggedIn}) => {
  const [rToggle,setRToggle]=useState(false);
  const [signUpInfo,setSignUpInfo]=useState({
    name:"",
    username:"",
    password:""
  })
  const [logInInfo,setlogInInfo]=useState({
    username:"",
    password:""
  })

  let authElement=(rToggle)
  ?<SignUp rToggle={rToggle} 
           setRToggle={setRToggle} 
           signUpInfo={signUpInfo}
           setSignUpInfo={setSignUpInfo}
           setIsLoggedIn={setIsLoggedIn}
           />
  : <Login rToggle={rToggle} 
           setRToggle={setRToggle}
           logInInfo={logInInfo}
           setlogInInfo={setlogInInfo}
           isLoggedIn={isLoggedIn}
           setIsLoggedIn={setIsLoggedIn}
            />
  return (
    <div className={css.register}>
      <div className={css.overlay}>
        <div className={css.auth}>
          {authElement}
        </div>
      </div>  
    </div>
  )
}

export default Register;