

const { Router } = require('express');

const { getProducts, createProducts, updateProducts, deleteProducts } = require('../controllers/product.controller')

const router = Router()

router.get('/get-products', getProducts);

router.post('/create-products', createProducts);

router.put('/update-products', updateProducts);

router.delete('/delete-products', deleteProducts);

module.exports = router;












// const {Router} = require("express");



// const { getProduscts } = require("../controllers/product.controller");

// const {} = require ("../routes/product.controller.js");

// const router = Router();

// router.get("/get-product", getProduscts);

// router.get("/get-product", (req, res)=>{
//     res.json({messasge: "hola desde get product"})

// });



// router.post("/create-product", (req, res)=>{
//     res.json({messasge: "hola desde la creacion de productos"})
// });



// router.put("/update-product", (req, res)=>{
//     res.json({messasge: "Actualizar"})
// });




// module.exports = router