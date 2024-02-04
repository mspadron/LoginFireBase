import React from 'react';
import appFirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(appFirebase);

const Home = ({ correoUsuario }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h2>Página Principal</h2>
              <button className='btn btn-primary' onClick={() => signOut(auth)}>Logout</button>
            </div>
            <div className="card-body">
              <h3 className="card-title">¡Bienvenido, {correoUsuario}!</h3>
              <p className="card-text">
                Gracias por autenticarte con Firebase. La autenticación segura es esencial para proteger tu aplicación y garantizar que solo los usuarios autorizados puedan acceder a ciertas funcionalidades.
              </p>
              <p className="card-text">
                Firebase proporciona una solución completa de autenticación que facilita la gestión de usuarios y la implementación de características de inicio de sesión seguro.
              </p>
              <p className="card-text">
                ¡Disfruta explorando las funciones de tu aplicación segura!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
