using CapaDatos;

using CapaLogica.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaLogica.Logica
{
    public class FacturaLogica : IFactura
    {
        // aplicaremos facade para la factura
        FacturaContext dbContext;

        public FacturaLogica(FacturaContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public List<Factura> GetFacturas()
        {
            var result = dbContext.Facturas.ToList(); //esto lo que busca dentro de la base de datos en X tabla
            // y la imprime, practicamente un SELECT en SQL
            return result;
        }
        public void agregarFactura(Factura model)
        {
            dbContext.Add(model); // este metodo es practicamente un INSERT into X tabla
            dbContext.SaveChanges(); // esto lo agrega en la base de datos la factura
            //luego lo mostraremos en un pdf, la factura consumida en el front
        }

    }
}
