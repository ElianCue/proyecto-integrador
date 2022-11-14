import {PERSISTENCE_TYPES} from '../config.js';
import ProductModelMongoDB from '../model/products-mongodb.js';
import ProductModelMem from '../model/products-mem.js';
import ProductModelFile from '../model/products-fs.js';

class ProductModel {

    static get(type) {
        switch (type) {
            case PERSISTENCE_TYPES.TYPE_MEM:
                console.log(`#### Persistencia MEM ####`);
                return new ProductModelMem();
            case PERSISTENCE_TYPES.TYPE_FILE:
                console.log(`#### Persistencia FILE ####`);
                return new ProductModelFile();
            case PERSISTENCE_TYPES.TYPE_MONGODB:
                console.log(`#### Persistencia MONGODB ####`);
                ProductModelMongoDB.connectDB();
                return new ProductModelMongoDB();
            default:
                console.log(`#### Persistencia POR DEFECTO ####`);
                return new ProductModelMem();
        }
    }
}

export default ProductModel;