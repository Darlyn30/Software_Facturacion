//compra el producto, y recibe los parametros por url para pasarselos al siguiente state
//que seria payment
function buyProduct(itemName, amount){
    window.location.href = `./subpages/payment.html?item-name=${encodeURIComponent(itemName)}&amount=${amount}`;
}

//cuando haga click en el logo esto estara en todas las paginas, se redigira a la pagina principal
function home(){
    window.location.href = '../index.html';
}

// export const desc = document.querySelector('p');