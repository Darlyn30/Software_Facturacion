using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace CapaDatos;

public partial class FacturaContext : DbContext
{
    public FacturaContext()
    {
    }

    public FacturaContext(DbContextOptions<FacturaContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Factura> Facturas { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Factura>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__facturas__3214EC072E55C1F8");

            entity.ToTable("facturas");

            entity.Property(e => e.Apellido)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.CantidadPedido).HasColumnName("cantidad_pedido");
            entity.Property(e => e.DescripcionPedido)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("descripcion_pedido");
            entity.Property(e => e.FechaHora)
                .HasColumnType("datetime")
                .HasColumnName("Fecha_hora");
            entity.Property(e => e.Nombre)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.Pedido)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("pedido");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
