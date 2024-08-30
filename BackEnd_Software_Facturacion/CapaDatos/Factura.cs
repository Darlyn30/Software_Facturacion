using System;
using System.Collections.Generic;

namespace CapaDatos;

public partial class Factura
{
    public int Id { get; set; }

    public string? Nombre { get; set; }

    public string? Apellido { get; set; }

    public int? CantidadPedido { get; set; }

    public string? Pedido { get; set; }

    public string? DescripcionPedido { get; set; }

    public DateTime? FechaHora { get; set; }
}
