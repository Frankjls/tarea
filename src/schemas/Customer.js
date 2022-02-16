const {Schema, model} = require("mongoose");

const CustomerSchema = new Schcema ({
   
         name:{
             type: String, 
             require: true,
            //  trim: true,
            //  maxlength:
             

         },
         email:{
             typr:String,
             unique: true,
             require: true,
            

         },
         company:{
             type: String,
            require: true,
            
                 },
                

                phone:{
                    type: String,
                    require: true,
                  
                        },


});
 module.exports = model ('Customer', CustomerSchema, "Customers")