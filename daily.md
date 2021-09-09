----------------
Consigna 1 Realizar un breve retrospectiva
===============================
Nuevamente piensen qué hicieron bien en el sprint anterior, qué hicieron mal, qué
deberían empezar a hacer, qué deberían dejar de hacer.

----------------

----------------
Consigna 2 Actualizar el tablero de trabajo
===============================
Discutan las tareas que se desprenden de este documento, determinen en qué orden deberán ser realizadas, asignen integrantes a cada tarea.

----------------

----------------
Consigna 3 (Opcional) Implementar daily / weekly standups
===============================

----------------

Bases de datos y Sequelize
===============================
----------------

----------------
Consigna 4 Diagrama de base de datos
===============================
Toda buena base de datos empieza en la mesa de dibujo. Tendrán que armar el
Diagrama de Entidades y Relaciones (DER).
Recuerden que luego deberán implementar Sequelize y que, por lo general, los ORMs como este trabajan mejor con los nombres de tablas en inglés.

● Usuarios (recuerden ver los campos sugeridos en el sprint 3).
● Productos (recuerden ver los campos sugeridos en el sprint 3).
● Tablas secundarias (según lo requiera su proyecto).
○ Para productos: categorías, marcas, colores, talles, etc.
○ (Opcional) Para usuarios: categorías.
● (Opcional) Carrito de compras.
○ Con detalle de quién hizo la compra, cantidad de ítems y precio total.
● (Opcional) Productos de cada carrito de compras.

Entregable: diagrama de entidad-relación de su base de datos en formato PDF.
----------------

----------------
Consigna 5 Script de estructura
===============================
Tomando como referencia el diagrama del punto anterior, tienen que escribir las sentencias de SQL que crearán las tablas y sus relaciones.
● Deberá incluir la creación de la base de datos (create database…).
● Deberá incluir la creación de todas las tablas del sitio (create table…).
● Deberá incluir los tipos de datos de los campos y sus restricciones (primary keys, (not) null, unique, default, etc).
● Deberá incluir las relaciones entre las diferentes tablas (foreign keys).

Entregable: archivo structure.sql que permita crear la base de datos completa.

----------------

----------------
Consigna 6 (Opcional) Script de datos
===============================
Ya tenemos la estructura, ahora faltan los datos. El script de datos permite que cualquier desarrollador (o docente 😉) descargue el proyecto, ejecute el script y ya pueda ver el sitio funcionado sin más pasos.

El script debería:
● Poblar la tabla de usuarios.
● Poblar la tabla de productos.
● Poblar las tablas secundarias (categorías, marcas, colores, talles, etc).
● (Opcional) Poblar la tabla de carrito de compras.
● (Opcional) Poblar la tabla de productos de carritos de compras.

Una vez definidos los campos de sus tablas, nuevamente pueden utilizar Mockaroo, pero esta vez para generar el archivo SQL con datos. 😉☝️

Entregable: archivo con extensión data.sql que permita poblar la base con datos.

----------------

----------------
Consigna 7 Creación de carpeta Sequelize y archivos de modelos
===============================
Mediante la herramienta sequelize-cli deberán crear la carpeta que contenga los archivos de configuración de Sequelize. Una vez configurado Sequelize, seguirá crear los archivos de modelos para explicarle cómo es la estructura de la base de datos.

La carpeta database deberá incluir:
● Los archivos de configuración para que Sequelize se conecte a la base de datos.
● Los archivos de modelos para representar las tablas de:
○ Usuarios.
○ Productos.
○ Tablas secundarias (categorías, marcas, colores, talles, etc).
○ (Opcional) Carrito de compras.
○ (Opcional) Productos de cada carrito de compras.
● Los modelos deben incluir todas las relaciones existentes en la base de datos.

Entregable: carpeta database que incluya los archivos de configuración y archivos de modelos junto con sus relaciones.
----------------

----------------
Consigna 8 ¡CRUD!
===============================
Ya es hora de tener un CRUD como la gente. Qué bueno que tenemos a Sequelize de nuestro lado. Les pedimos que en su sitio se pueda:

● Para productos:
○ Crear
○ Editar
○ Eliminar
○ Listar
○ Ver el detalle
○ Buscar

● Para usuarios:
○ Crear
○ Editar
○ Ver el detalle

● (Opcional) CRUDs de tablas secundarias.
● (Opcional) Agregar paginado a los listados y buscadores.

Entregable: rutas, controladores y vistas necesarias para que suceda lo detallado previamente utilizando Sequelize para trabajar con la base de datos.
----------------