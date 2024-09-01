//obtener el metodo de pago seleccionado por la URL
const params = new URLSearchParams(window.location.search);
const paymentMethod = params.get('payment-method');
//mostrar el metodo de pago seleccionado
const selectMethodElement = document.getElementById('selected-method');
selectMethodElement.textContent = paymentMethod === 'credit-debit' ? 'tarjeta de credito o debito' : 'paypal';


//formulario de pago con tarjeto de ser necesario

if(paymentMethod === 'credit-debit'){
    document.getElementById('card-payment-form').style.display = "block";
    document.getElementById('confirm-button').style.display = 'none';
}

//funcion para confirmar la compra

document.getElementById('confirm-button').addEventListener("click", () => {
    completePurchase(paymentMethod);
})

//funcion para manejar el formulario de pago con tarjeta

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    //funcion del purchase
    swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
    });

})
// URL de la api para generar la factura
const API_KEY = 'http://localhost:5119/api/Factura';
//funcion para confirmar compra

function completePurchase(method){

    //logica de procesar el pago

    if(method === 'credit-debit'){
        document.getElementById('card-payment-form').style.display = 'block';
        document.getElementById('confirm-button').style.display = 'none';
    } else if(method === 'paypal'){
        window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=darlynolivo15@.com&item_name=PC%20Purchase&amount=100.00&currency_code=USD';
    }

}

//funcion para volver atras y cambiar el metodo de pago

function goBack(){
    window.history.back();
}


