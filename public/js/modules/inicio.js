import productController from '/js/controllers/product.js';


class PageInicio {
    
    static async renderTemplateCards(products) {
        const hbsFile = await fetch('templates/inicio.hbs').then(r => r.text());
        const template = Handlebars.compile(hbsFile);
        const html = template({ products });
        document.querySelector('.cards-container').innerHTML = html;
    }
    
    static async init () {
        const products = await productController.getProducts();        
        await PageInicio.renderTemplateCards(products);
        
    }
}

export default PageInicio;

