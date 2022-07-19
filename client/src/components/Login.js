import React, { useState } from 'react'
import { Grid,Paper, TextField, Button, Typography} from '@material-ui/core';
import { NavLink,useHistory } from 'react-router-dom';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Login=()=>{
const history = useHistory();
const [email,setEmail]=useState("");
const [password,setPassword]= useState("");

const loginUser =async (e) =>{
e.preventDefault();
const res= await fetch("/signin",{
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    body:JSON.stringify({
        email,password
    })
});
const data=res.json();
if(res.status===400||!data) {
    window.alert("inv credential");

}else {
    window.alert("Login successfull");
    history.push("/About");
}
}

    const paperStyle={padding :40,height:'70vh',width:"60%", margin:"40px auto"}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                   
                    <h1 >Log In</h1>
                </Grid> 
                <from method="POST" >
                <TextField className="p-2" label='email' placeholder='Enter email' name="email" value={email} 
                onChange={(e)=>setEmail(e.target.value)} fullWidth required/>

                <TextField  className="p-2" label='Password' placeholder='Enter password' name="password" value={password}
                 onChange={(e)=>setPassword(e.target.value)} type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' onClick={loginUser} color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <NavLink to="#" >
                        Forgot password ?
                </NavLink>
                </Typography>
                <Typography > Create Accont 
                     <NavLink to="/Signup" >
                        Sign Up 
                </NavLink>
                </Typography> </from>
            </Paper>
        </Grid>
    )
}

export default Login