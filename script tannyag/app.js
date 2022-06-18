/* alert('hello js!'); // felugró ablakot hoz létre at alert.
const vegburger = document.getElementById('vegburger')
const nav = document.getElementById('nav') */

vegburger.addEventListener('click', function (event) {
    nav.classList.toggle('menu-active')
    // klikkre kicseréli az osztályokat
    vegburger.classList.toggle('fi-align-justify')
    vegburger.classList.toggle('fi-arrow-left')
})
 
const products = [
    {
        name: 'Málna',
        picture: 'malna.jpg',
        description: 'Kézzel készült egészség',
        price: 3800,
        inStock: true,
    },
    {
        name: 'Áfonya',
        picture: 'afonya.jpg',
        description: 'Kézzel készült egészség',
        price: 3250,
        inStock: true,
    },
    {
        name: 'Szeder',
        picture: 'szeder.jpg',
        description: 'Kézzel készült egészség',
        price: 1700,
        inStock: true,
        variations: ['fehér' , 'fekete']
    },

    {
        name: 'Szeder',
        picture: 'szeder.jpg',
        description: 'Kézzel készült egészség',
        price: 1700,
        inStock: true,
        variations: ['fehér' , 'fekete']
    },


]

const productsSection = document.getElementById('products')



products.forEach(product => {
    productsSection.innerHTML += `<div>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <img src="/script tannyag/pictures/${product.picture}">
        <h3>${product.price}Ft</h3>
            <a href="#">Kosárba</a>

    </div>`
} )
// videóban 1.23.30 nál járok!
document.getElementById("szép").innerHTML = "Első JavaScript kódom.";
