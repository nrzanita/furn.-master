let productInfo = [
    {productId : 1, productName : "Wooden chair", ImgSrc: "assets/images/collection/arrivals1.png", price : 65},
    {productId : 2, productName : "Single armchair", ImgSrc: "assets/images/collection/arrivals2.png", price : 80},
    {productId : 3, productName : "Wooden armchair", ImgSrc: "assets/images/collection/arrivals3.png", price : 40},
    {productId : 4, productName : "Stylish chair", ImgSrc: "assets/images/collection/arrivals4.png", price : 100},
    {productId : 5, productName : "Modern armchair", ImgSrc: "assets/images/collection/arrivals5.png", price : 120},
    {productId : 6, productName : "Mapple wood dinning table", ImgSrc: "assets/images/collection/arrivals6.png", price : 140},
    {productId : 7, productName : "Arm chair", ImgSrc: "assets/images/collection/arrivals7.png", price : 90},
    {productId : 8, productName : "Wooden bed", ImgSrc: "assets/images/collection/arrivals8.png", price : 140},
]

let newArrivalsRow = document.getElementById("new-arrivals-row")

productInfo.forEach(function(elm){

    newArrivalsRow.insertAdjacentHTML("beforeend", 
`        <div class="col-md-3 col-sm-4">
        <div class="single-new-arrival">
            <div class="single-new-arrival-bg">
                <img src= ${elm.ImgSrc}  alt="new-arrivals images">
                <div class="single-new-arrival-bg-overlay"></div>
                <div class="sale bg-1">
                    <p>sale</p>
                </div>
                <div class="new-arrival-cart">
                    <p class= "add-to-cart">
                        <span class="lnr lnr-cart"></span>
                        <a href="#">add <span>to </span> cart</a>
                    </p>
                    <p class="arrival-review pull-right">
                        <span class="lnr lnr-heart"></span>
                        <span class="lnr lnr-frame-expand"></span>
                    </p>
                </div>
            </div>
            <h4 id = "product-name"><a href="product-details.html">${elm.productName}</a></h4>
            <p class="arrival-product-price">$${elm.price}</p>
        </div>
    </div>`
    )
    console.log(elm.price)
    let productNameTag = document.getElementById("product-name")
    productNameTag.addEventListener("click", event=>{
        console.log(elm.price)
    })

    // let addToCArt = document.querySelector(".add-to-cart")
    // addToCArt.addEventListener("click", event=>{
    //     console.log(event)
    // })
})