APIT-TP-2c2014
==============

Trabajo practico de Arquitectura de proyectos IT. No SQL

#Instrucciones de compilación y ejecución
## Usando docker
Junto a la POC se provee un contenedor de Docker, el cual está listo para correr la última versión de código subido al repositorio https://github.com/bordanzig/APIT-TP-2c2014.git.

El uso de este container pre configurado, evita que la persona que quiera ejecutar la POC deba instalar y configurar localmente: MongoDB, npm, NodeJS y todas las dependencias del proyecto.

### Pre condiciones
Para poder compilar y ejecutar la POC usando Docker, es necesario:

* Tener Docker previamente instalado
* Tener acceso a internet al momento de ejecutar el container

### Ejecución
Para ejecutar el contenedor con la POC se deben ejecutar los siguientes pasos:

* Iniciar el servicio de docker (en linux: "sudo service docker start")
* ejecutar el comando: "docker run -p 3000:3000 mrebasti/apit-tp-2c2014"

El comando anterior indica que se va a descargar y ejecutar el container mrebasti/apit-tp-2c2014 publicado en dockerhub, y va a asociar el puerto 3000 del container con el puerto 3000 de localhost.

A partir de este punto, se puede ingresar a la aplicación de la POC desde un browser con las URLs:

* frontend: http://localhost:3000/frontend/
* Content manager: http://localhost:3000/contentmngr/
* Api rest: http://localhost:3000/api/phone

## Sin el uso de docker
En esta opción, se detalla como compilar y ejecutar la POC sin el uso del container de Docker pre configurado.

Para eso, es necesario instalar en la computador en la que se va a correr la POC todas las herramientas necesarias previamente.

### Pre condiciones
Para poder compilar y ejecutar la POC, es necesario:

* Tener instalado previamente:
 * Git
 * NodeJS
 * Npm
 * MongoDB
* Tener iniciada una instancia de MongoDB localmente, y que esté configurada para aceptar conexiones al puerto 27017
* Tener acceso a internet al momento de compilar la POC

### Compilación y ejecución
Para poder compilar y ejecutar la POC de forma local, se deben ejecutar los comandos:

* git clone https://github.com/bordanzig/APIT-TP-2c2014.git
* cd APIT-TP-2c2014/poc-app
* npm install
* nodejs index.js

A partir de este punto, se puede ingresar a la aplicación de la POC desde un browser con las URLs:

* frontend: http://localhost:3000/frontend/
* Content manager: http://localhost:3000/contentmngr/
* Api rest: http://localhost:3000/api/phone