const express = require ('express');
const server = express();
const productsroute = require ('./routes/products.route')
const cartsroute = require ('./routes/cart.route')
server.use(express.urlencoded({extended:true}))
server.use(express.json())

server.use('/api/products/', productsroute);
server.use('/api/products/',productsroute);
server.use('/api/products/',productsroute);
server.use('/api/products/',productsroute);
server.use('/api/products/',productsroute);


//Rutas del cart

server.use('/api/carts/',cartsroute);
server.use('/api/carts/',cartsroute);
server.use('/api/carts/',cartsroute);

server.listen(8080,()=>{
    console.log("Servidor Escuchando en el puerto 8080")
})

