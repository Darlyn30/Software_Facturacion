using CapaDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaLogica.Interface
{
    public interface IFactura
    {
        List<Factura> GetFacturas();
        void agregarFactura(Factura model); // este metodo agrega la factura a la base de datos
    }
}
