
//guardar esos datos en la base de datos

const API_KEY = 'http://localhost:5119/api/factura';

fetch(API_KEY)
.then(res => res.json())
.then(data => console.log(data));

// Obtener el botón
document.getElementById('download-pdf').addEventListener('click', function () {
    // Crear un nuevo documento PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    

    const currentDay = new Date
    const idCompra = () => idCompra;
    const cantidadProducto = '1';
    const nombreCliente = 'darlyn'; // contenido de testing
    const apellido = "olivo"; // contenido de testing
    const producto = 'pc' // contenido de testing
    const descripcionProducto = 'pc de escritorio blah blah...'; // contenido de testing
    const fechaCompra = currentDay.toISOString();
    const vencimientoGarantia = '';


    const data = {
        "id": idCompra,
        "apellido": apellido,
        "cantidadPedido": cantidadProducto,
        "descripcionPedido": descripcionProducto,
        "fechaHora": fechaCompra,
        "nombre": nombreCliente,
        "pedido": producto,
    }
    fetch(API_KEY, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    })
    .then(data => {
        console.log("success", data);
    })
    // Datos del cliente y compra

    
    // Agregar título
    doc.setFontSize(18);
    doc.text("Detalles de la Compra", 14, 20);
    
    // Agregar subtítulo con información
    doc.setFontSize(12);
    doc.text(`ID de compra: ${idCompra}`, 14, 30);
    doc.text(`Cliente: ${nombreCliente}`, 14, 40);
    doc.text(`Fecha de compra: ${fechaCompra}`, 14, 50);
    doc.text(`Vencimiento de garantía: ${vencimientoGarantia}`, 14, 60);
    
    
    
    // Descargar el PDF
    doc.save("detalles_compra.pdf");
    swal({
        title: "Factura Generada!",
        text: "Factura  guardada en Descargas!",
        icon: "success",
    })
    .then(() => {
        window.location.href = '../index.html';
    });
});
