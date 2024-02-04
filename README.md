# Login con Firebase y Vite

Esta aplicación React utiliza Vite como su entorno de desarrollo y Firebase para la autenticación de usuarios.

## Instalación

1. **Instalar Vite globalmente:**

   ```bash
   npm install -g create-vite
2. **Crear un nuevo proyecto Vite con React**
npx create-vite login-firebase --template react
## Configurar Firebase
**Crea un archivo llamado credenciales.js en la carpeta src.**

3. **Obtén la configuración de Firebase desde la consola de Firebase y colócala en credenciales.js. Debería tener una estructura similar a esta:**
   // src/credenciales.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'TU_API_KEY',
  authDomain: 'TU_AUTH_DOMAIN',
  projectId: 'TU_PROJECT_ID',
  storageBucket: 'TU_STORAGE_BUCKET',
  messagingSenderId: 'TU_MESSAGING_SENDER_ID',
  appId: 'TU_APP_ID',
};

const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;
4. **Instalar dependencias de Firebase:**
npm install firebase
## AUTENTICACIÓN
La autenticación en esta aplicación se maneja mediante Firebase Authentication. 
Se utiliza el componente Login para gestionar el registro e inicio de sesión de usuarios.
## Ejecutar localmente
**Para ejecutar la aplicación localmente, usa el siguiente comando en el directorio del proyecto:**
npm run dev

