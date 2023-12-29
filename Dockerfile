# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo en la aplicación
WORKDIR /usr/src/app

COPY package*.json ./

# Instala las dependencias
RUN apt-get update && apt-get install -y npm && npm install

# Copia el resto de los archivos de la aplicación
COPY . .


# Comando para iniciar la aplicación
CMD ["node", "index.js"]
