const cartManager = require('../cartmanager');
const ProductManager = require('../productmanager');

const cart = new cartManager(__dirname + '/../cart.json');
const pm = new ProductManager('./src/products.json');

const createcart = async (req, res) => {
  const resp = await cart.CreateFile();
  res.json({ msg: 'se creo el carro de forma exitosa', id: resp });
};

const getchango = async (req, res) => {
  const resp = await cart.getchango(req.params.cid);
  if (resp.error) {
    res.json(resp.status).send(resp);
  } else {
    res.json(resp);
  }
};

const addProductCart = async (req, res) => {
  const { cid, pid } = req.params;
  const products = await pm.getProductsById(pid);
  if (!products.error) {
      await cart.addProductCart(cid, products.id);
      res.json();
    } else {
      res.json(products.status).send(products);
  }
//   if (products.error) {
//     res.json(products.status).send(products);
//   } else {
//     const respu = await cart.addProductCart(cid, products.id);
//     if (respu.error) {
//       res.json(respu.status).send(respu);
//     } else {
//       res.json({ msg: 'Producto agregado con exito' });
//     }
//   }
};

module.exports = {
  createcart,
  getchango,
  addProductCart,
};
