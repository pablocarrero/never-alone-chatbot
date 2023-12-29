# Sobre este bot

Desarrollé este bot gratuito para que los streamers que se inician en el mundo de Twitch, nunca se sientan solos. La idea es simular el comportamiento de un espectador, que te hará preguntas sobre el juego
que estés stremeando cada 5 minutos. De momento, este tiempo no es configurable, pero se modificará en un futuro. De esta forma, el streamer estará interactuando constantemente, ya que esto es fundamental para seguir creciendo en Twitch, y qué mejor que probar con un bot antes de tener miles de viewers...

<br>
Este proyecto es <strong>open-source</strong>, es decir, si conoces de programación, podrás clonarte este repositorio y crear ramas, subiendo cambios para mejorar o añadir funcionalidades mediante Pull Requests

# Instalación de NeverAlone ChatBot

Para aprovechar al máximo las funciones de este bot, debes de instalarlo en tu ordenador personal, o si quieres, desplegarlo en un servidor gratuito para que esté disponible 24/7. Ambas opciones son MUY SENCILLAS!

1. [Instale NodeJS](https://nodejs.org/en/download/) según las instrucciones para su plataforma.
2. Clone mi repositorio en una carpeta de su ordenador para poder utilizar el bot. Debes de tener cuenta de GitHub

    > **git clone https://github.com/pablocarrero/never-alone-chatbot.git**

o descargue [Descarga](https://github.com/pablocarrero/never-alone-chatbot/archive/refs/heads/main.zip) y extraiga el contenido en algún directorio. Si clona el repositorio, será mucho más fácil mantenerlo actualizado. Si descarga el archivo zip, descomprímalo en un directorio vacío

3. Abra una ventana de línea de comandos en el directorio donde clonó/descomprimió NeverAlone ChatBot. Botón derecho y abrir una terminal (o desde la barra de direccion, borrando y escribiendo cmd)
4. Ejecute npm install en esa ventana de comandos para instalar todos los módulos de NodeJS en los que depende el proyecto.

___
# Configuración de NeverAlone ChatBot

NeverAlone se configura mediante un archivo JSON, que permite crear objetos que serán leidos por el código, útiles para setear variables de configuración. El archivo de configuración predeterminado es config.json.
Hay un archivo de configuración de muestra llamado sample_config.json. Lo único que tiene que hacer es crear otro archivo dentro de la carpeta donde haya clonado o movido el repositorio llamado config.json, y
pegar lo que ha copiado del archivo sample_config.json

1. Cree **config.json** y copie el contenido de **sample_config.json** al nuevo
2. Edita el archivo **config.json** con tu editor de texto favorito (bloc de notas por ejemplo)
3. Navege a la url [Generar Tokens](https://twitchtokengenerator.com/) y eliga la opcion de Bot Chat Bot.
4. Copie el Client ID y el Token de Acceso en las líneas del archivo que está editando. Esto permitirá hacer las conexiones con su canal de Twitch y el Chat
   
NO se le olvide de setear estos parametros, si no, no se podrá conectar. Los dos primeros los obtendrá del link anterior, el **BOT_NAME** es el nombre de su canal de Twitch, y **BOT_COMMAND** será el comando que utilize para iniciar el bot, en mi caso, utilizo **questions**:
- "OAUTH_ACCESS_TOKEN"
- "OAUTH_CLIENT_ID"
- "BOT_NAME"
- "BOT_COMMAND"

___
# Inicia NeverAlone ChatBot

1. En la misma terminal que abrió al principio, ejecute el comando **npm run dev**

Esto hará que se arranque en su ordenador (servidor local) el bot. Si ha configurado bien el **config.json**, deberá de ver por consola cómo su usuario se ha conectado al chat, si no, verá mensajes de error por consola y el bot no se iniciará..

Si todo ha ido correctamente, para iniciar el bot deberá de usar el comando **!BOT_COMMAND**, en mi caso, **!questions**

# Añadir preguntas y juegos

Para añadir preguntas para un videojuego en concreto, revise el archivo **preguntas.json**. Podrá editarlo con su editor de texto favorito para añadir más juegos y preguntas. Si por ejemplo stremea Fortine, pero este juego no se encuentra dentro del archivo o directamente no tiene preguntas asociadas, verá un mensaje de error cuando active el bot... 

¡CUIDADO! -> Cuando añada nuevos juegos, el nombre que añada tiene que coincidir con el nombre del juego en Twitch, si no, no se obtendrán las preguntas y verá un error.

Como recomendación, para generar preguntas puede utilizar ChatGPT. Las preguntas por cada juego deberán de ser como mínimo 50, ya que las preguntas se van obteniendo aleatoriamente generando un numero entre 0 y 49. Si por ejemplo usted solo añade 30 preguntas, y el numero que se genera es el 48, no existirá pregunta en esa posición y verá un error por pantalla...

# NeverAlone ChatBot 24/7

Como es lógico, si usted no arranca el bot en local tal y como se ha indicado en los pasos anteriores, al utilizar el comando en el chat de Twitch no obtendrá respuesta, ya que no hay un servidor por detrás que escuche los mensajes del chat y reaccione en torno a ellos. La idea sería iniciar este bot minutos antes de empezar el Streaming

Si desea que el bot esté activo 24/7, necesitará desplegarlo en un Host de Aplicaciones, que es como por ejemplo como yo lo tengo, en Render.com. Para ello, tendrá que crear un archivo .env en el proyecto y copiar el contenido del archivo de configuración, y deberá de hacer un deploy subiendo el proyecto a su repositorio, es decir, a su cuenta de Github
