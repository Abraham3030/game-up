Comunicación sobre el sprint 5:
===============================
Se dividirán las consignas del sprint 5, para que cada integrante realice una actividad.

----------------

----------------
Consigna 1 Realizar un breve retrospectiva
===============================
José Abraham Montelongo Campos
----------------
Cesar Antonio Villa Flores
----------------

Nuevamente piensen qué hicieron bien en el sprint anterior, qué hicieron mal, qué
deberían empezar a hacer, qué deberían dejar de hacer.

----------------

----------------
Consigna 2 Actualizar el tablero de trabajo
===============================
José Abraham Montelongo Campos
----------------

Discutan las tareas que se desprenden de este documento, determinen en qué orden deberán ser realizadas, asignen integrantes a cada tarea.

----------------

----------------
Consigna 3 (Opcional) Implementar daily / weekly standups
===============================
José Abraham Montelongo Campos
----------------
Cesar Antonio Villa Flores
----------------

----------------

Usuarios y middlewares
===============================
----------------

----------------
Consigna 4 Implementar la entidad de usuarios
===============================
José Abraham Montelongo Campos
----------------

Tomando como ejemplo lo que hicieron para productos, replicar la estructura de archivos y directorios que necesitarán para implementar las funcionalidades.

● Rutas: src/routes/users.js
● Controlador: src/controllers/usersController.js
● Vistas: src/views/users/
● Directorio para imágenes: public/images/users/
● Colección: src/data/users.json


----------------

----------------
Consigna 5 Implementar el registro de usuarios
===============================
José Abraham Montelongo Campos
----------------
Tomando como referencia el formulario de creación de productos, implementar el formulario de registro de usuarios.

● Deberá incluir los campos mínimos mencionados en el sprint anterior.
● Deberá permitir la subida de una imagen de perfil (con Multer).
● Deberá encriptar la contraseña ingresada por el usuario (con bcrypt.js).
● Deberá guardar los datos enviados en el archivo JSON de usuarios.

----------------

----------------
Consigna 6 Implementar el login de usuarios
===============================
Cesar Antonio Villa Flores
----------------

Ahora, es momento de poner en práctica middlewares, sesiones y cookies. Deberán implementar un formulario de login que:

1. Incluya los campos de email y password.
2. Verifique la información enviada por el usuario y según el caso:
2.1 Redireccione a la home o a la página de perfil en caso de éxito y muestre los datos del usuario en algún lugar del sitio, como el header.
2.2 Redireccione nuevamente al login en caso de error.

----------------

----------------
Consigna 7 (Opcional) Implementar la función de recordar al usuario
===============================
Cesar Antonio Villa Flores
----------------
Deberán agregarle al formulario de login la posibilidad de que se recuerde al usuario (checkbox). En caso de que el usuario decida ser recordado:

● Utilizar cookies para guardar esa información en el navegador.
● Implementar un middleware de aplicación que busque la cookie y loguee al
   usuario en caso de que exista y sus datos sean correctos.

----------------

----------------
Consigna 8 Implementar rutas de huéspedes y de usuarios
===============================
Cesar Antonio Villa Flores
----------------
Ahora que tienen un login funcionando, su próximo desafío será el de separar las rutas que se pueden acceder en cualquier momento, de las que se puede acceder solo si uno no está logueado y, por último, de las que requieren estar logueado.

En cada caso deberán implementar el comportamiento que corresponda:
● Rutas accesibles por cualquiera → sin cambios
● Rutas accesibles solo sin login → redirigen al perfil
● Rutas accesibles solo con login → redireccionan al login



----------------

