import React,{useState} from 'react'
import { Grid,Paper, TextField, Button, Typography} from '@material-ui/core'
import { NavLink,useHistory } from 'react-router-dom';



const Signup=()=>{

const history= useHistory();
const [user,setUser]= useState({
    name:"",email:"",password:"",
    

        india:Math.floor((Math.random()*600)+150),
        oman:Math.floor((Math.random()*600)+150),
        us:Math.floor((Math.random()*600)+150),
        growth:Math.floor((Math.random()*95)+15),
        loss:Math.floor((Math.random()*95)+15)
    

})
let name,value;
const handlevalue=(e)=>{

name=e.target.name;
value=e.target.value;
setUser({...user,[name]:value});
console.log(user);
}
const postdata= async (e)=>{
    e.preventDefault();
    const { name,email,password, india, oman,  us,  growth,   loss }=user;
const res= await fetch("/register",{
    method:"POST",
    headers: {
        "Content-Type": "application/json"
    }, body:JSON.stringify({ name,email,password,india, oman,  us,  growth,   loss   })
});
const data = await res.json();
if(data.status===422|| !data){
    window.alert("invaid");
    console.log("invalid");
} else {
    window.alert("res success");
    console.log("res success")
    history.push("/Login");
}

}

    const paperStyle={padding :40,height:'70vh',width:"80%", margin:"40px auto"}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle} method>
                <Grid align='center'>
                   
                    <h1 >Sign Up</h1>
                </Grid>
                <form method="POST">
                <TextField className="p-2" label='Name' name="name" placeholder='Enter username' 
                onChange={handlevalue} value={user.name} fullWidth required/>
               
                <TextField  className="p-2" label='email' name="email" placeholder='Enter email' 
                onChange={handlevalue} value={user.email}  fullWidth required/>
                <TextField className="p-2" label='Password' type='password' name="password" placeholder='Enter username' 
                onChange={handlevalue} value={user.password} fullWidth required/>
               

                <Button type='submit' color='primary' onClick={postdata}
                variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                </form>
          
                <Typography > have an account ?
                     <NavLink to="/Login" >
                        Log In
                </NavLink>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Signup;