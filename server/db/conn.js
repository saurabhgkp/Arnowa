const mongoose =require("mongoose")
//const DB=process.env.DATABASE;
const DB='mongodb+srv://mern:mern1234@cluster0.8nwu3.mongodb.net/mern?retryWrites=true&w=majority';

mongoose.connect(DB,
    {useNewUrlParser: true, useUnifiedTopology: true}
     ).then(()=> console.log('connected with db') ).catch((err)=>console.log('error'));
   