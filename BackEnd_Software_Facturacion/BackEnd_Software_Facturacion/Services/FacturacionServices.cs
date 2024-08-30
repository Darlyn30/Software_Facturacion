using CapaDatos.FacturacionModel;
using CapaLogica.Interface;

namespace BackEnd_Software_Facturacion.Services
{
    public class FacturacionServices
    {
        IFactura oFactura;

        public FacturacionServices(IFactura oFactura)
        {
            this.oFactura = oFactura;
        }

        public List<Factura> GetFacturas()
        {
            var result = oFactura.GetFacturas(); // instancio de la clase de FacturaLogica y lo que obtiene lo retorna
            return result;
        }

        public void setFactura(Factura model)
        {
            oFactura.agregarFactura(model);
        }
    }
}
