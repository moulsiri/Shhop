import React from 'react'
import {Navigate} from 'react-router-dom'
const ProtectedRoute = ({value,children}) => {
  if(!value){
    return <Navigate to='/' replace/>
  }
  return children
}

export default ProtectedRoute