import React from 'react';
import './App.css';


function App() {
  return (
    <div>
      <header>
        <h1>Negocio de Impresión 3D</h1>
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section id="inicio">
        <h2>Inicio</h2>
        <p>Ofrecemos soluciones personalizadas para todas tus necesidades de impresión 3D.</p>
      </section>

      <section id="servicios">
        <h2>Servicios</h2>
        <ul>
          <li>Impresión 3D en PLA y PETG.</li>
          <li>Diseño 3D personalizado.</li>
          <li>Prototipado rápido.</li>
        </ul>
      </section>

      <section id="contacto">
        <h2>Contacto</h2>
        <form>
          <label>
            Nombre:
            <input type="text" name="nombre" />
          </label>
          <br />
          <label>
            Correo:
            <input type="email" name="correo" />
          </label>
          <br />
          <label>
            Mensaje:
            <textarea name="mensaje"></textarea>
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default App;
