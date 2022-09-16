import React from 'react';
import { Navigate } from 'react-router-dom';


const Protected = ({account,children}) => {

     if(!account){
       return <Navigate to='/login' replace />
     }
     return children;
};

export default Protected;
