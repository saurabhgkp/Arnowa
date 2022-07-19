

import { Switch,Route } from 'react-router';

import Signup from './Signup';

import Login from './Login';
import Navbar from './Navbar';



function Auth() {
  return (
    <>
    
    <Navbar/>
      <Switch>
     
            <Route path="/Login" exact component={Login}/>    
            <Route path="/Signup" exact component={Signup}/>  

      </Switch>
     
      
    </>
  );
}

export default Auth;
