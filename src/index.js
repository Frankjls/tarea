const express = require("express")
const morgan = require("morgan")
const  cors = require("cors")

const productRoutes = require("./routes/productos.routes")
const customerRoutes = require("./routes/customer.routes")
const DBConnection = require("./database/DBConnection")

// camel case funcion para definir la constante por StartExpressServer
   async function starExpressServer(params){

   const  app = express();

     app.use(morgan("dev"))

      app.use (cors())
      app.use(express.json())

const baseURL= "/api/v1"

app.use(`${baseURL}/product`, productRoutes);
app.use(`${baseURL}/customer`, customerRoutes)


app.get("/", (req, res) =>{
  res.json({messge: 'Express hi'});
    
         });
      

    await DBConnection();


 const PORT = 4800;

 app.listen(PORT, ()=>{
console.log(`server listo en http://localhost:${PORT}`);
 
} )

   }
   startExpressServer()

   