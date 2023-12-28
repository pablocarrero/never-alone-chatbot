# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo en la aplicación
WORKDIR /usr/src/app


# Instala las dependencias
RUN apt-get update && apt-get install -y npm && npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "index.js"]
