using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CapaDatos.FacturacionModel;

public partial class Factura
{
    [Key]
    public int Id { get; set; }

    public string? Nombre { get; set; }

    public string? Apellido { get; set; }

    public DateTime? FechaHora { get; set; }

    public DateTime? GarantiaVencimiento { get; set; }
}
