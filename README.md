# WahtsApp WEB + ChatGPT

Esta aplicación que permite convertir la bandeja de entrada de WhatsApp en un Chatbot mediante el escaneo de un código QR.

### Instalación del proyecto
1. Clonar este repositorio y el repositorio [gpt-back](https://github.com/SCodify/gpt-back) (seguir las instrucciones de instalación de [gpt-back](https://github.com/SCodify/gpt-back)).
2. Instalar las dependencias con el comando `npm install`.
3. Crear el archivo de variable de entorno con el comando `touch .env`
4. Definir las variables de entorno del archivo `.env` con el mismo nombre de las variables de `.env.example`.

### Ejecución del proyecto
1. Ejecutar el comando `npm start` y se generará un codigo QR en la terminal.
2. Escanear el código QR con la aplicación de Whatsapp y esperar a que se muestre por terminal el mensaje `El cliente está listo!`.
3. El recibir un mensaje que empiece con `gpt:` la respuesta será dada por `gpt-back`. Una prueba de funcionamiento puede ser `gpt: cuéntame un chiste`.

### Archivos del proyecto
```
📦wpw/
 ├── 📄.env
 ├── 📄.env.example
 ├── 📄.gitignore
 ├── 📄api.js
 ├── 📄index.js
 ├── 📄package-lock.json
 ├── 📄package.json
 └── 📄README.md
```

### Dependencias utilizadas
- axios
- dotenv
- qrcode-terminal
- whatsapp-web.js