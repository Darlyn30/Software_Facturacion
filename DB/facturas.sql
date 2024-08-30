create database facturacion

use facturacion

create table facturas(
	Id int identity(1,1) primary key,
	Nombre varchar(255),
	Apellido varchar(255),
	Fecha_hora datetime,
	Garantia_vencimiento datetime --la garantia siempre sera de 15 dias el producto
	--el software termino siendo enfocado a un negocio de ventas de pc
)