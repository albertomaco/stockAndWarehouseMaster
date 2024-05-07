--liquibase formatted sql
--changeset stockAndWarehouseMaster tfgAlberto:valores_utilidades

INSERT INTO TIPO_ESTADOS values(1, 'CATEGORIA PRODUCTO');
INSERT INTO TIPO_ESTADOS values(2, 'ESTADOS PEDIDOS');
INSERT INTO TIPO_ESTADOS values(3, 'ESTADOS CAMIONES');


INSERT INTO UTILIDADES(RESUMEN, TIPO_ESTADO) values('TEXTILES', 1);
INSERT INTO UTILIDADES(RESUMEN, TIPO_ESTADO) values('ELECTRODOMÉSTICOS', 1);
INSERT INTO UTILIDADES(RESUMEN, TIPO_ESTADO) values('MUEBLES', 1);
INSERT INTO UTILIDADES(RESUMEN, TIPO_ESTADO) values('MATERIAL DEPORTIVO', 1);

INSERT INTO UTILIDADES(RESUMEN, TIPO_ESTADO) values('ACEPTADO', 2);
INSERT INTO UTILIDADES(RESUMEN, TIPO_ESTADO) values('EN PREPARACIÓN', 2);
INSERT INTO UTILIDADES(RESUMEN, TIPO_ESTADO) values('EN REPARTO', 2);
INSERT INTO UTILIDADES(RESUMEN, TIPO_ESTADO) values('ENTREGADO', 2);
INSERT INTO UTILIDADES(RESUMEN, TIPO_ESTADO) values('SOLICITADO DEVOLUCIÓN', 2);
INSERT INTO UTILIDADES(RESUMEN, TIPO_ESTADO) values('DEVOLUCIÓN ACEPTADA', 2);
INSERT INTO UTILIDADES(RESUMEN, TIPO_ESTADO) values('DEVUELTO', 2);

INSERT INTO UTILIDADES(RESUMEN, TIPO_ESTADO) values('LIBRE', 3);
INSERT INTO UTILIDADES(RESUMEN, TIPO_ESTADO) values('OCUPADO', 3);

--changeset stockAndWarehouseMaster tfgAlberto:tipo_envio
INSERT INTO TIPO_ESTADOS values(4, 'TIPO ENVIO PEDIDO');
INSERT INTO UTILIDADES(RESUMEN, TIPO_ESTADO) values('ENVÍO ESTÁNDAR', 4);
INSERT INTO UTILIDADES(RESUMEN, TIPO_ESTADO) values('ENVÍO RÁPIDO', 4);