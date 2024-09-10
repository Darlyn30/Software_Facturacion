//obtener los parametros por URL
const params = new URLSearchParams(window.location.search);
const paymentMethod = params.get('payment-method');
const itemName = params.get('item-name');
const amount = params.get('amount');

//asignar los elementos del HTML
document.getElementById('item-name').textContent = itemName;
document.getElementById('amount').textContent = amount;

const paymentIcon = document.getElementById('payment-icon');
const selectedMethodElement = document.getElementById('selected-method');

if(paymentMethod === 'credit-debit'){
    paymentIcon.src = 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg';
    selectedMethodElement.textContent = 'Tarjeta de Credito o Debito';
} else if(paymentMethod === 'paypal'){
    paymentIcon.src = 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg';
    selectedMethodElement.textContent = 'PayPal';
}

//funcion para confirmar el pago

function completePurchase() {
    if (paymentMethod === 'credit-debit') {
        // Mostrar el formulario de pago con tarjeta
        document.getElementById('card-payment-form').style.display = 'block';
        document.getElementById('confirm-button').style.display = 'none'; // Ocultar botón de confirmación

        // Agregar el evento al botón de pagar con tarjeta
        document.querySelector(".btnPay").addEventListener("click", function(event) {
            event.preventDefault(); // Prevenir que el formulario se envíe automáticamente
            swal("Pago completado con tarjeta!", "Gracias por su compra", "success")
            .then(() => {
                //aqui tiene que generarle un pdf al usuario con la factura
                window.location.href = "./factura.html";
            })
        });
        
    } else if (paymentMethod === 'paypal') {
        // Redirigir a PayPal con el monto y el producto
        window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=darlynolivo15@gmail.com&item_name=${encodeURIComponent(itemName)}&amount=${encodeURIComponent(amount)}&currency_code=USD`;
    }
    
}



//funcion para volver atras y cambiar el metodo de pago

function goBack(){
    window.history.back();
}

//funcion para volver a home

function backHome(){
    window.location.href = '../index.html';
}



//compartir un modulo para utilizarlo en el script de la factura

// export const datos = {
//     namee : document.getElementById("card-name").value,
//     item : itemName,
//     monto: amount
// }
