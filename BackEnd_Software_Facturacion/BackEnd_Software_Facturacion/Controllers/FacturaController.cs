using BackEnd_Software_Facturacion.Services;
using CapaDatos.FacturacionModel;
using CapaLogica.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd_Software_Facturacion.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FacturaController : ControllerBase
    {
        IFactura oFactura; // instanciamos nuestra interface ya que el constructor de nuestro servicio, utiliza
        //la interface como argumento
        FacturacionServices services;

        public FacturaController(IFactura oFactura)
        {
            this.oFactura = oFactura;
            services = new FacturacionServices(oFactura);
        }

        [HttpGet]

        public IActionResult GetFacturas()
        {
            var result = services.GetFacturas();
            return Ok(result);
        }

        [HttpPost]

        public void SetFacturas(Factura model)
        {
            services.setFactura(model);
        }

    }
}
