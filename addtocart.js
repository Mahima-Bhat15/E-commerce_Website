const product = [
    {
        id:0,
        image:'img/dress1.png',
        title:'Blouse with Ruffled sleeves',
        price:58,
    },
    {
        id:1,
        image:'img/dress2.png',
        title:'Tie-up Knot with long sleeves ',
        price:65,
    },
    {
        id:2,
        image:'img/dress3.png',
        title:'Collared Stylish Blouse',
        price:45,
    },
    {
        id:3,
        image:'img/dress4.png',
        title:'Office Look Blouse',
        price:34,
    },
    {
        id:4,
        image:'img/dress5.png',
        title:'Puffed sleeves Blouse ',
        price:54,
    },
    {
        id:5,
        image:'img/dress6.png',
        title:'White blouse with V neck',
        price:77,
    },
    {
        id:6,
        image:'img/dress7.webp',
        title:'Floral Blouse with Collar ',
        price:33,
        
    },
    {
        id:7,
        image:'img/dress8.avif',
        title:'Semi-Formal Blouse ',
        price:38,
    }
];
const categories=[...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price}=item;
    return(
        `<div class='box.>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
    )
}).join('')

var cart=[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a,1);
    displaycart();
}
function displaycart(a){
    let j=0,total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = 'Your cart is empty';
        document.getElementById("total").innerHTML="$ "+0+".00";

    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image,title,price}=items;
            total=total+price;
            document.getElementById("total").innerHTML= "$ "+total+".00";

            return(
                `<div class= 'cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>$ ${title}</p>
                <h2 style='font-size:15px;'>$ ${price}.00<h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
            );
        }).join('')
    }
}