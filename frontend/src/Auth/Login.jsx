import React from 'react';  
import ReactDOM from 'react-dom';
import { Link, NavLink, useLocation} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import shapeone from './images/shpaeone.png';
import shapetwo from './images/shapetwo.png'; 
import logoRight from './images/login_right.jpg'; 
import './Auth.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';


function Login() {  
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: codeResponse => { 
        axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${codeResponse.access_token}`)
        .then(function (response){   
          axios.post('http://localhost:3001/login',response)
            .then(function (response) {  
              localStorage.setItem('accessToken', response.data.token);
              localStorage.setItem('userName', response.data.data.username);
              navigate(`/home`);
              toast.success(`Welcome ${response.data.data.username}`) 
            }).catch(function (error) { 
              toast(`Error`)
              console.log(error);
            }) 
        })
        .catch(function (error) { 
          console.log(error);
        })
    }
  });

  return (
    <div className="login_outer"> 
    <ToastContainer />   
    <img src={shapeone} className="shapeone" />
    <img src={shapetwo} className="shapetwo" />
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="login_inner">
            <div className="row">
              <div className="col-md-12">
                <div className="login_left custom_border">  
                  <button onClick={() => login()} className="google_button">
                    <img src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_960_720.png" style={{ width:"40px",height:"40px"}} /> Log In Using Google
                  </button> 
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
  );
}
export default Login;
