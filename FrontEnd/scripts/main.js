const btn = document.querySelectorAll('.btnPay');


for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", () => {
        window.location = "./subpages/payment.html";
    })
}