import React from 'react';
import About from './About';
import Auth from './Auth';
import { Route } from 'react-router';


const Home = () => {
    return (
        <div>
                <Route path="/About" exact component={About}/>    
         
            <Auth/>
        </div>
    )
}

export default Home;
