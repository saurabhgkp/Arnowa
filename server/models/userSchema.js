const mongooose = require('mongoose');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = new mongooose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
         type: String,
        required:true
    },
   
   
    password: {
         type: String,
        required:true
    },
    
            india:{
                type: Number,
        required:true
            },
            oman:{
                type: Number,
        required:true
            },
            us:{
                type: Number,
        required:true
            },
            growth:{
                type: Number,
        required:true
            },
            loss:{
                type: Number,
        required:true
            },
            tokens:[
                {
                    token:{
                        type:String,
                        required:true
                    }
                }
            ]


        
    
})

userSchema.pre('save',async function(next){
    const salt = bcrypt.genSaltSync(12);
    if(this.isModified("password")){
      
        this.password=bcrypt.hashSync(this.password,salt);
        
       
       
    }
   
next();
});

userSchema.methods.generateAuthToken = async function(){ 
    try {
        let tokenNew =jwt.sign({_id:this._id},"aaaaaaaaaaaaaaaaaaaahereisSECRET_KEY");
         this.tokens= this.tokens.concat({token:tokenNew}) 
         await this.save();
         return tokenNew;  
    } catch (error) {              
        console.log(error);
        
    }
}

const User = mongooose.model('USER', userSchema);

module.exports = User;
