let productInfo = [
    {id : 1, productName : "Wooden chair", ImgSrc: "assets/images/collection/arrivals1.png", price : 65, status: false},
    {id : 2, productName : "Single armchair", ImgSrc: "assets/images/collection/arrivals2.png", price : 80, status: false},
    {id : 3, productName : "Wooden armchair", ImgSrc: "assets/images/collection/arrivals3.png", price : 40,  status: false},
    {id : 4, productName : "Stylish chair", ImgSrc: "assets/images/collection/arrivals4.png", price : 100,  status: false},
    {id : 5, productName : "Modern armchair", ImgSrc: "assets/images/collection/arrivals5.png", price : 120,  status: false},
    {id : 6, productName : "Mapple wood dinning table", ImgSrc: "assets/images/collection/arrivals6.png", price : 140,  status: false},
    {id : 7, productName : "Arm chair", ImgSrc: "assets/images/collection/arrivals7.png", price : 90,  status: false},
    {id : 8, productName : "Wooden bed", ImgSrc: "assets/images/collection/arrivals8.png", price : 140,  status: false},
]

let userBasket = []
let totalPrice = 0;
let newArrivalsRow = document.getElementById("new-arrivals-row")
let cartList = document.querySelector(".cart-list")
let totalPriceContent = document.getElementById("total-price")

productInfo.forEach(function(product){
    
    newArrivalsRow.insertAdjacentHTML("beforeend", 
`        <div class="col-md-3 col-sm-4">
        <div class="single-new-arrival">
            <div class="single-new-arrival-bg">
                <img src= ${product.ImgSrc}  alt="new-arrivals images">
                <div class="single-new-arrival-bg-overlay"></div>
                <div class="sale bg-1">
                    <p>sale</p>
                </div>
                <div class="new-arrival-cart">
                    <p class= "add-to-cart"  data-product-id="${product.id}">
                        <span class="lnr lnr-cart"></span>
                        <span> add to cart</span>
                    </p>
                    <p class="arrival-review pull-right">
                        <span class="lnr lnr-heart"></span>
                        <span class="lnr lnr-frame-expand"></span>
                    </p>
                </div>
            </div>
            <h4 id = "product-name"><a href="product-details.html?id=${product.id}">${product.productName}</a></h4>
            <p class="arrival-product-price">$${product.price}</p>
        </div>
    </div>`
    )

    })    

//is used to select and return a static (non-live) NodeList of all elements in the DOM that match

document.querySelectorAll(".add-to-cart").forEach(function(btn){ // it selects all tags that have this class
    btn.addEventListener("click", function(){   // when user clickes it works
        
        let productId = this.getAttribute('data-product-id') 
        productId = Number(productId)

        product = productInfo.find(item=> item.id === productId)  // find the object with id that we have it from URL

            //In the context of an event listener, this refers to the element that the event listener is attached to.
            //It refers to the "add to cart" button that was clicked.
        
        addNewItemToCart(product)

        })

})



function addNewItemToCart(product){ // product is the object that user clickes on 
    
    if(!product.status){
       
        product.status = true
        userBasket.push(product)
        product.itemQuantity = 1; // it adds new properity to the clicked product because we didm't have this in the original product database
       

        cartList.insertAdjacentHTML("afterbegin", `

                                        <li class="single-cart-list">
                                            <a href="#" class="photo"><img src= ${product.ImgSrc} class="cart-thumb" alt="image" /></a>
                                            <div class="cart-list-txt">
                                                <h6><a href="#"> ${product.productName}</a></h6>
                                                <p> <span class = "item-quantity"> 1 </span> x - <span class="price">$${product.price}</span></p>
                                            </div><!--/.cart-list-txt-->
                                            <div class="cart-close">
                                                <span class="lnr lnr-cross" data-product-id="${product.id}"></span>
                                            </div><!--/.cart-close-->
                                        </li><!--/.single-cart-list -->`) 

    }
    
    // update the number of already existed product in the basket

    else{

        let itemQuantity = document.querySelector(".item-quantity")  //select the item quantity class in UI
        product.itemQuantity++  // plus the quantity
        itemQuantity.innerHTML = product.itemQuantity  // replace updated number
    }

    totalPrice += product.price // add the price to total price 
    totalPriceContent.innerHTML = totalPrice
    let cartClose = document.querySelector(".cart-close")
    cartClose.addEventListener("click", deleteCartFromBasket)
}



function deleteCartFromBasket(event){

    let crossIcon = event.target // access to the icon of the product that user pressed
    productId = crossIcon.getAttribute('data-product-id') // extract the id from data-product-id attribute
    productId = Number(productId) // Convert the productId to a number
    // Remove the cart item from the cart list
    let cartItem = crossIcon.closest('.single-cart-list');

    if (cartItem) {
        cartItem.remove();
    }

    let basketProduct = userBasket.find(item=> item.id === productId) // we find the object from userBasket array with product Id

    if(basketProduct !== -1){

        userBasket.splice(basketProduct, 1) // delete the object from shop basket
        let product = productInfo.find(item=> item.id === productId) // we find the object from productInfo array with product Id
        product.status = false
    }
    //console.log("user basket", userBasket)
    //console.log("info", productInfo)
}
