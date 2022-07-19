

import './App.css'
import {Route} from 'react-router-dom'
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <>
   <Route exact path='/'>
<About />
   </Route>

   <Route path="/Login">
     <Login />
   </Route>
   <Route path="Signup">
   <Signup/>
   </Route>
    </>
  );
}

export default App;
