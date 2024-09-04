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

function completePurchase(){
    if(paymentMethod === 'credit-debit'){
        document.getElementById('card-payment-form').style.display = 'block';
        document.getElementById('confirm-button').style.display = 'none';
        
        
    } else if(paymentMethod === 'paypal'){
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



