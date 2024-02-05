import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Importación de Firebase
import appFirebase from '../src/credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(appFirebase)

//Importación Componentes
import Login from '../src/components/Login'
import Home from '../src/components/Home'
import './App.css'

function App() {

  const [usuario, setUsuario] = useState(null);
  const auth = getAuth(appFirebase);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    });

    // Limpiar el efecto al desmontar el componente
    return () => unsubscribe();
  }, [auth]);

  return (
    <div>
         <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={usuario ? <Home correoUsuario={usuario.email} /> : <Login />}
          ></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
