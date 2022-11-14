import mongoose from 'mongoose';
import config from '../config.js';

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    codImage: String,
})

const ProductsModel = mongoose.model('products',productSchema);

class productModelMongoDB {
    static connected = false;
    static async connectDB(){
        try{
            await mongoose.connect(config.MONGODB_CONNECTION_STR,{
                useNewUrlParser: true,
                useUnifiedTopology:true,
                serverSelectionTimeoutMS: config.MONGODB_TIMEOUT
            });
            console.log('conexion exitosa')
            productModelMongoDB.connected = true;
        } catch(error) {
            console.error(`Error al intentar establecer la conexión:${error.message}`)
        }
    }

    //CREATE//

    async createProduct (product){
        if (!productModelMongoDB.connected){
            return {};
        }
        try {
            const newProd = new ProductsModel(product);
            newProd.save();
            return newProd;
        } catch (error){
            console.error('Error al dar de alta');
            return {};
        }
    }

    //READ//

    async readProducts (){
        if(!productModelMongoDB.connected){
            return[]
        }
        try{
            const products = await ProductsModel.find({});
            return products;
        } catch (error){
            console.error('Error al intentar leer los productos')
        }
    }

    async readProductsId(id){
        if (!productModelMongoDB.connected){
            return {};
        }

        try{
            const product = await ProductsModel.findbyId(id) || {};
            return product;
        } catch (error){
            console.error(`Error al intentar obtener el producto #${id}:`,error.message)
            return {};
        }
    }

    //UPDATE//

    async updateProduct (id, product){
        if (!productModelMongoDB.connected){
            return {};
        }
        try{
            const updateProduct = await ProductsModel.findOneAndUpdate({_id: id}, {$set: product},{
                returnDocument:'after'
            })
            return updateProduct || {};
        } catch (error){
            console.log(`Error al actualizar`,error.message)
            return {}
        }
    }

    //DELETE//
    async deleteProduct (id, product){
        if (!productModelMongoDB.connected){
            return {};
        }
        try{
            const deleteProduct = await ProductsModel.findOneAndDelete(id) || {};
            return deleteProduct;
        } catch (error){
            console.log(`Error al eliminar`,error.message)
            return {}
        }
    }

}

export default productModelMongoDB;


