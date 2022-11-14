window.setTimeout(()=>{
const scriptHTML = document.getElementById('products-template').innerHTML;
const template = Handlebars.compile(scriptHTML);
const products ={
    productsContent:[
        {id:08, name: 'Mario Bross figuras', description: 'Combo de figuras de Mario', price :8000,codImage:"toy3"},
        {id:28, name: 'Muñecas Barbie', description: 'Combo de muñecas Barbie', price :10000,codImage:"toy1"},
        {id:17, name: 'Lego Harry Potter', description: 'Juego de Harry Potter para PlayStation 4', price :5000,codImage:"toy4"},
        {id:20, name: 'Laberinto de bolitas', description: 'Laberinto de bolitas para niños', price :3000,codImage:"toy2"},
        {id:35, name: 'Nintendo Switch', description: 'Consola Nintendo Switch Oled con 500gb de memoria', price :80000,codImage:"toy5"},
        {id:08, name: 'Mario Bross figuras', description: 'Combo de figuras de Mario', price :8000,codImage:"toy3"},
        {id:28, name: 'Muñecas Barbie', description: 'Combo de muñecas Barbie', price :10000,codImage:"toy1"},
        {id:17, name: 'Lego Harry Potter', description: 'Juego de Harry Potter para PlayStation 4', price :5000,codImage:"toy4"},
        {id:20, name: 'Laberinto de bolitas', description: 'Laberinto de bolitas para niños', price :3000,codImage:"toy2"},
        {id:35, name: 'Nintendo Switch', description: 'Consola Nintendo Switch Oled con 500gb de memoria', price :80000,codImage:"toy5"}
    ]
};
const compiled = template(products);
document.querySelector('.cards-container').innerHTML = compiled;
},100);