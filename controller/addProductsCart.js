import Cart from ("../model/cart");
import ProductModel from ("../model/products");

const addProductCart = async (req, res)=>{
    const {name, img, price} = req.body;

    const loadedProducts = await ProductModel.findOne({name});

    const empty = name !== "" && img ==! "" && price !== "";

    const loadedCart = await Cart.findOne({name});

    if (!loadedProducts){
        res.status(400).json({
            mensaje:"este producto no se encuentra en la base de datos"
        })
    } else if (empty && !loadedCart){
        const newProductInCart = new Cart({name,img,price,amount:1});

        await ProductModel.findByIdAndUpdate(
            loadedProducts?._id,
            {inCart: true, name, img, price},
            {new: true}
        )
        .then((product))
    }
}