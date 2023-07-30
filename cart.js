let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Lenovo Ideapad',
        image: 'img5.webp',
        price: 299900
    },
    {
        id: 2,
        name: 'Lenovo Gaming',
        image: 'img6.webp',
        price: 56900
    },
    {
        id: 3,
        name: 'HP Pavallion',
        image: 'img7.webp',
        price: 82490
    },
    {
        id: 4,
        name: 'HP 15 s',
        image: 'img8.webp',
        price: 42490
    },
    {
        id: 5,
        name: 'HP',
        image: 'img9.webp',
        price: 520000
    },
    {
        id: 6,
        name: 'HP Pavallion',
        image: 'img10.webp',
        price: 68450
    },
    {
        id: 7,
        name: 'HP Gaming',
        image: 'img11.webp',
        price: 520000
    },
    {
        id: 8,
        name: 'HP',
        image: 'img12.webp',
        price: 78450
    },
    {
        id: 9,
        name: 'Realme',
        image: 'm1.webp',
        price: 29990
    },
    {
        id: 10,
        name: 'Realme',
        image: 'm2.webp',
        price: 12490
    },
    {
        id:11 ,
        name: 'Poco',
        image: 'm3.webp',
        price: 12490
    },
    {
        id: 12,
        name: 'Poco',
        image: 'm5.webp',
        price: 32490
    },
    {
        id: 13,
        name: 'Google Pixel',
        image: 'm6.webp',
        price: 520000
    },
    {
        id: 14,
        name: 'Google Pixel',
        image: 'm4.webp',
        price: 520000
    },
    {
        id: 15,
        name: 'Vivo',
        image: 'm9.webp',
        price: 18450
    },
    {
        id: 16,
        name: 'Vivo',
        image: 'm12.webp',
        price: 28380
    },
    {
        id: 17,
        name: 'Jacket',
        image: 'c1.webp',
        price: 2990
    },
    {
        id: 18,
        name: 'Denim Shirt',
        image: 'c2.webp',
        price: 5990
    },
    {
        id: 19,
        name: 'Formal Shir',
        image: 'c3.webp',
        price: 1990
    },
    {
        id: 20,
        name: 'Denim Shirt',
        image: 'c4.webp',
        price: 4490
    },
    {
        id: 21,
        name: 'Wooden Stand',
        image: 'f1.webp',
        price: 4490
    },
    {
        id: 22,
        name: 'Table',
        image: 'f2.webp',
        price: 6990
    },
    {
        id: 23,
        name:  'Stool',
        image: 'f3.webp',
        price: 2490
    },
    {
        id: 24,
        name: 'Table',
        image: 'f4.webp',
        price: 4490
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <img src="/${value.image}"/>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}