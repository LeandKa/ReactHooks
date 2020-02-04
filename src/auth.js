import React from 'react';
import {Route,Redirect} from 'react-router-dom';

 const isAuth = () =>{
   if(localStorage.getItem('accessToken')!== null){
     return true
   }else{
     return false
   }
}


const PrivateRoute = ({component: Component,...rest}) =>{

  return(  
    <Route 
    {...rest}
    render={props => 
    isAuth() ? (
        <Component {...props} />
    ): (
        <Redirect 
            to={{
                pathname: '/login',
                state: { message: 'Usuário não autorizado' }
            }}
        />
    )}
/>
  )

}


export default PrivateRoute;


