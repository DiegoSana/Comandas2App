<p align="center">
    <h1 align="center">Aplicación Ionic 3 para <a href="https://github.com/DiegoSana/Comandas2">Comandas2</a></h1>
    <br>
</p>

Esta es una aplicación ionic 3 cuya finalidad es reflejar la información cargada en Comandas2 mediante servicios REST


REQUIREMENTS
------------

Servidor con Docker instalado


INSTALLATION
------------

### 1. Obtener el repositorio de github

~~~
cd /var/www
git clone git@github.com:DiegoSana/Comandas2App.git Comandas2App

~~~

### 2. Crear los contenedores Docker

Esto lo hacemos mediante el siguiente comando que obtiene las configuraciones del contenedor desde dockerHub [(Imagen Docker)](https://hub.docker.com/r/agileek/ionic-framework/)

Este paso puede demorar

~~~
docker run -ti --rm -p 8100:8100 -p 35729:35729 -v /var/www/Comandas2App/comandas2app/:/myApp:rw agileek/ionic-framework:3.19.1
~~~

### 3. Crear alias

~~~
alias ionicComandas="docker run -ti --rm --net host --privileged -v /dev/bus/usb:/dev/bus/usb -v ~/.gradle:/root/.gradle -v \$PWD:/myApp:rw agileek/ionic-framework:3.19.1 ionic"
~~~

### 4. Servir la aplicacion

~~~
ionicComandas serve
~~~