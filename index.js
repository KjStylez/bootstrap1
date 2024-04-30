$("document").ready( function (){getProducts();} );

let btnCreate = document.querySelector("#btnCreate");
btnCreate.onclick = function (){
    let floatingProductName = document.querySelector("#floatingProductName");
    let floatingPrice = document.querySelector("#floatingPrice");
    createProduct(floatingProductName.value, floatingPrice.value);

  
};

btnUpdate.onclick = function (){
    
}

function createProduct (productName, productPrice){ if (!productName) return alert (" Product Name is Required");
else if (!productPrice) return alert (`Product must have a price.`);




let product = {name: productName, price: productPrice};

let products = JSON.parse(localStorage.getItem("product"));
if (!products) products = [];
else product = JSON.parse(products)

let productIsExisting = product.findIndex ((p) => { return p.name == product.name;
});

if (productIsExisting >= 0)
return alert (`${product.name} is already in the database.`);


product.push(product)
localStorage.setItem("product", JSON.stringify(product));

getProducts();

$("#btnCancelCreate")
alert (`${product.name} has been successfully added.`);


$("#floatingProductName").value =""
$("floatingPrice").value = ""
$("#btnCancelCreate").




    console.log("Creating product...", productName, productPrice);


}
function getProducts(){
$("tbodyProducts").html("");

let products = localStorage.getItem("product");
if (!products) products = [];
else products = JSON.parse(products);

products.forEach ((p) => { $("#tbodyProducts").append(`<tr> <td> ${p.name}</td> <td> ${p.price}</td> <td> <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateProductModal> Update </button> <button class="btn btn-danger onclick="deleteProduct (${i})"> delete </button></td> </tr>`);
});
}

function updateProduct(product){

let products = localStorage.getItem("product");

if (!products) products = [];
else products = JSON.parse(products);



}
function openUpdateModal (productIndex){
    let products = localStorage.getItem("product");
    if (!products) products = [];
    else products = JSON.parse(products);

}


function deleteProduct (productIndex) {


    let products = localStorage.getItem("product");
    if (!products) products = [];
    else products = JSON.parse(products);



    products[productIndex].isDeleted = true;

    localStorage.setItem("product", JSON.stringify(products));
    getProducts();
}

