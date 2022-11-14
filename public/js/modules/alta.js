import productController from '/js/controllers/product.js';

class Alta{
    static form
    static fields
    static btnCreate

    static validators = {
        'name':/^[a-zA-Z\-]+$/,
        'price':/^[0-9]+$/,
        'description':/^[\wáéíóúüÁÉÍÓÚÜ ¿?¡!.,:-]{1,200}$/,
    };

    static emptyForm(){
        Alta.fields.forEach(field=> field.value = '');
    }

    static completeForm(product){
        Alta.fields.forEach(field =>{
            field.value = product[field.name];
        })
    }

    static validate (value, validator){
        return validator.test(value);
    }

    static validateForm(){
        let allValidated = true;
        const productSave = {};
        for (const field of Alta.fields){
            const validated = Alta.validate(field.value, Alta.validators[field.name]);
            console.log(field.name, validated);
            if (!validated){
                allValidated = false;
                break;
            } else {
                productSave[field.name] = field.value;
            }
        }
        console.log('allValidated:', allValidated);
        if(!allValidated){
            return false;
        }
        return productSave;
    }

    static async addFormEvents(){
        Alta.form.addEventListener('submit', async e =>{
            e.preventDefault();

            const productSave = Alta.validateForm();
            if(productSave){
                const savedProduct = await Alta.savedProduct(productSave);
                Alta.emptyForm();
            }
        });
    }

    static async init(){
        Alta.form = document.getElementById('form-product__alta');
        Alta.fields= Alta.form.querySelectorAll('input, textarea');

        Alta.addFormEvents();

        const products = await productController.getProducts();
    }
}

export default Alta;
