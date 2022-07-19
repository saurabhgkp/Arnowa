const express=require("express");
const router=express.Router();
require('../db/conn'); 
const jwt = require('jsonwebtoken');
const authenticate = require ("../middleware/Authenticate")
const User=require("../models/userSchema");
var bcrypt = require('bcryptjs');

router.get("/",(req,res)=>{

    res.send("this is home page/auth")
});

router.post('/register', async (req, res) => {

    const { name, email, password, india, oman,  us,  growth,   loss} = req.body;//getting data by object destructuring
    
    if (!name || !email || !password ||  !india || !oman || !us || !growth || !loss) { //user should fill all feild
       return res.status(422).json({ error: "plz fill all feild" })
    }
    
    try {
       const userExist = await User.findOne({ email: email })//this connects email from userschema.js to this email from auth.js
 
       if (userExist) {
          return res.status(422).json({ error: "email already exists" })
       }  else {
          const user = new User({ name, email, password,  india, oman,  us,  growth,   loss})// adding data to database || if both key and value and are same no need to write twice 
          //hashing done before save
          await user.save() //saving data in user constant 
          res.status(201).json({ message: "user registetred sucessfully" })
       }
    } catch (error) {
       console.log(error);
       
    }
 })


 router.post("/signin",async (req,res)=>{
    try{
    const {email,password}=req.body;
    if(!email || !password) res.status(400).json({message:"plz fill all the frield"});
    

    const userLogin= await User.findOne({email:email});
    
    const token = await userLogin.generateAuthToken();
    console.log(`the token is :- ${token}`);

    res.cookie("jwtoken", token, { 
       expires: new Date(Date.now() + 25892000000),
       httpOnly: true  //for secure connection 
    })

    const isMatch= await  bcrypt.compareSync(password,userLogin.password);
//const isMatch= await bcrypt.campair(password,userLogin.password);
       if(!isMatch){res.status(400).json({err:"login error"})}
     else{  res.json({message:"logedin"})}


    if(!userLogin) {res.json({err:"error Login"})}
    else{ res.json({message:"Login Successfully"})}

   }
       catch {(err)=>console.log("error")}
    

 })




 router.get('/about',authenticate,(req,res)=>{
   res.send(req.rootUser); 
});
router.get('/getdata',authenticate,(req,res)=>{
   // console.log(`hello  home`); 
   res.send(req.rootUser); 
});

module.exports= router;