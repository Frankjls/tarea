const mongoose = require("mongoose")

const url = " mongodb://127.0.0.1:27017/crm-clientes";

const DBConnection = async ()=>{

    try{
        await mongoose.connect(uri);
    console.log('DB is connection');
    }catch (error){
        console.log(error)
        throw new Error('failed to initialise database')
    }

};


module.exports = DBConnection;