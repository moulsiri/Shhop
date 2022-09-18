import {useState,useEffect} from 'react'
import css from './Register.module.scss';
import { Link } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { clearErrorAsync} from '../../asyncActions/userAction';
import { useAlert } from 'react-alert';
const Register = () => {

  const alert=useAlert();
  const {isAuthenticated,error}=useSelector((store)=>store.user)
  const nevigate=useNavigate();
  const dispatch=useDispatch();

  const [rToggle,setRToggle]=useState(false);
  const [signUpInfo,setSignUpInfo]=useState({
    name:"",
    username:"",
    email:"",
    password:""
  })
  const [logInInfo,setlogInInfo]=useState({
    username:"",
    password:""
  })


  useEffect((e)=>{
    if(isAuthenticated){
      nevigate('/');
    }
    if(error){
      alert.error(error);
      dispatch(clearErrorAsync())
    }
  },[isAuthenticated,error])


  let authElement=(rToggle)
  ?<SignUp rToggle={rToggle} 
           setRToggle={setRToggle} 
           signUpInfo={signUpInfo}
           setSignUpInfo={setSignUpInfo}
           />
  : <Login rToggle={rToggle} 
           setRToggle={setRToggle}
           logInInfo={logInInfo}
           setlogInInfo={setlogInInfo}
            />
  return (
    <div className={css.register}>
      <div className={css.overlay}>
        <div className={css.auth}>
        <Link to="/" style={{textDecoration: 'none'}}><h3 className={css.logo}>Shhop<span>.</span></h3></Link>
          {authElement}
        </div>
      </div> 
  
    
    </div>
  )
}

export default Register;