import React from 'react';
import { BrowserRouter as Router,Routes, Route, Navigate  } from 'react-router-dom';
import Login from './Auth/Login'; 
import Home from './User/Home';  
import ProtectedRoute from './middleware/ProtectedRoute'; 
import RedirectIfLogin from './middleware/RedirectIfLogin'; 

function App() { 
  return (
    <div className="App">
    <Router>
        <Routes> 
          <Route element = { <RedirectIfLogin/>}>
              <Route path="/" element={<Login/>} />   
          </Route> 
          <Route element={<ProtectedRoute /> }>
              <Route path="/home" element={<Home/> } />   
          </Route>  
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
