create database facturacion2

use facturacion2

create table facturas(
	Id int identity(1,1) primary key,
	Nombre varchar(255),
	Apellido varchar(255),
	cantidad_pedido int,
	pedido varchar(255),
	descripcion_pedido varchar(255),
	Fecha_hora datetime,
	--la garantia siempre sera de 15 dias el producto
	--el software termino siendo enfocado a un negocio de ventas de pc
)



select * from facturas

delete from facturas where Id = 1