# Instalación de NeverAlone ChatBot

Para aprovechar al máximo las funciones de este bot, debes de instalarlo en tu ordenador personal, o si quieres, desplegarlo en un servidor gratuito para que esté disponible 24/7. Ambas opciones son MUY SENCILLAS!

1. [Instale NodeJS](https://nodejs.org/en/download/) según las instrucciones para su plataforma.
2. Clone mi repositorio en una carpeta de su ordenador para poder utilizar el bot. Debes de tener cuenta de GitHub

    > **git clone https://github.com/pablocarrero/never-alone-chatbot.git**

o descargue [Descarga](https://github.com/pablocarrero/never-alone-chatbot/archive/refs/heads/main.zip) y extraiga el contenido en algún directorio. Si clona el repositorio, será mucho más fácil mantenerlo actualizado. Si descarga el archivo zip, descomprímalo en un directorio vacío
3. Abra una ventana de línea de comandos en el directorio donde clonó/descomprimió NeverAlone ChatBot. Botón derecho y abrir una terminal (o desde la barra de direccion, borrando y escribiendo cmd)
4. Ejecute npm install en esa ventana de comandos para instalar todos los módulos de NodeJS en los que depende el proyecto.

___
# Configuring TuxTwitchTalker

TuxTwitchTalker is configured using [a JSON file](https://en.wikipedia.org/wiki/JSON), which allows complex expressions and lists to flexibly customize it.  The default configuration file is **config.json**

There is a sample configuration file called **sample_config.json**.  It's important to note that JSON file doesn't support comments, so the documentation is included as JSON format as lines starting with **"COMMENT"**.
1. Copy **sample_config.json** to **config.json**
2. Edit config.json in your favorite text editor.  Do not use Word, or Wordpad, or any other word processing program that will change characters to non-ASCII characters.  On Windows, Notepad will work.
3. Follow the directions in the config file to fill in the rest of the file, like users to respond to, etc.  All sections that start with **"COMMENT** are just documentation to help you, and should not be changed.

The most important settings to update before the bot will run are:
- "BOT_NAME"
- "TMI_OAUTH"
- "IGNORE_USERS"
- "ADMIN_USERS"
- "CHANNELS"

___
# Running TuxTwitchTalker

1. Open up a terminal/command window and change to the directory you set up TuxTwitchTalker in
2. type
> npm start

If you need to specify an alternate configuration file, type
> npm start MY_CONFIGURATION_FILE.json
