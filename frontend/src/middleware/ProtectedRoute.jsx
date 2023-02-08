import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => { 
    var authenticate = localStorage.getItem('accessToken');
    if(!authenticate){ 
        return <Navigate to="/" replace/>
    }else{ 
        return <Outlet />
    } 
}

export default ProtectedRoute;