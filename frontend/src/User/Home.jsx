import React, { useState, useEffect } from 'react';  
import ReactDOM from 'react-dom';
import { Link, NavLink, useLocation} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import shapeone from '../Auth/images/shpaeone.png';
import shapetwo from '../Auth/images/shapetwo.png'; 
import logoRight from '../Auth/images/login_right.jpg'; 
import '../Auth/Auth.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';


function Home() {  
  const navigate = useNavigate();
  const [nasaImage, setNasaImage] = useState('https://cdn.pixabay.com/photo/2015/02/22/17/56/loading-645268_960_720.jpg');
  const [nasaImageTitle, setNasaImageTitle] = useState('Image title');
  const [userName, setUserName] = useState(localStorage.getItem('userName'));
  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=mOpPcNjyDZeuUdgh3EDLqXATWWs8Xu34n5339gHj')
    .then(function (response) {  
        setNasaImage(response.data.url)
        setNasaImageTitle(response.data.title)
        toast.success("Image loaded succesfully!!")
    }).catch(function (error) { 
        toast(`Error`)
        toast.error("Some issue to load image.")
    }) 
  },[]);

  const logout = ()=> {
    localStorage.removeItem("accessToken"); 
    toast.success("Logout succesfully!!")
    navigate(`/`);
  }
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
                <div className="col-md-8">
                    <div className="custom_border">  
                        <img src={nasaImage} className='nasa_img_setting' />
                    </div>
                </div> 
                <div className="col-md-4 text_div">
                    <span className="image_title mb-4">Welcome: {userName}</span> <br /><br />
                    <span className="image_title">Image Title : {nasaImageTitle}</span> 
                    <div className="login_left">  
                        <button onClick={logout} className="google_button">
                            Logout
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
export default Home;
