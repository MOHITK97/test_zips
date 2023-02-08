import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedAdmin = () => {
    var authenticate = localStorage.getItem('accessToken');
    if(authenticate){
        return <Navigate to="/home" replace/> 
    }else{
        return <Outlet /> 
    } 
}

export default ProtectedAdmin;