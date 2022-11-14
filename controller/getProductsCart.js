import Cart from ("../model/cart");

const getProductsCart = async (req, res)=>{
    const productsCart = await Cart.find();

    if(productsCart){
        res.json({productsCart});
    } else{
        res.json({mensaje: "no hay productos en el carrito"});
    }
}

export default getProductsCart;