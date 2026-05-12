/* global React */
const { useState, useEffect } = React;

// Shared brand mark — uses actual brand isotipo image. Variants: sage | terracota | white | honeycomb | deepblue
window.OralogyMark = function ({ size = 32, variant = "sage", style = {} }) {
  return (
    <img
      src={`assets/logos/isotipo-${variant}.jpg`}
      alt="Oralogy"
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        background: "transparent",
        mixBlendMode: variant === "white" || variant === "honeycomb" ? "screen" : "multiply",
        ...style
      }} />);


};

// Horizontal logotipo (isotipo + wordmark, no tagline) used in header
window.OralogyWord = function ({ variant = "sage" }) {
  return (
    <a href="index.html" className="brand brand--header" aria-label="Oralogy">
      <img
        src="assets/logos/logotipo-horizontal-sage.png"
        alt="Oralogy®"
        className="brand__img" />
    </a>);

};

window.SiteHeader = function ({ current = "home" }) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <window.OralogyWord />
        <nav className="nav">
          <ul className="nav__links">
            <li><a href="index.html#enfoque" aria-current={current === "home" ? "page" : undefined}>Enfoque</a></li>
            <li><a href="index.html#servicios">Servicios</a></li>
            <li><a href="acerca-de.html" aria-current={current === "about" ? "page" : undefined}>Acerca de</a></li>
            <li><a href="index.html#testimoniales">Testimoniales</a></li>
            <li><a href="index.html#contacto">Contacto</a></li>
          </ul>
          <a href={window.WHATSAPP_URL} className="btn btn--primary nav__cta" target="_blank" rel="noopener" style={{ color: "rgb(255, 255, 255)" }}>
            Agendar cita
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </nav>
      </div>
    </header>);

};

window.WhatsAppFAB = function () {
  return (
    <a href={window.WHATSAPP_URL} className="whatsapp-fab" target="_blank" rel="noopener" aria-label="Agendar por WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0s-.5.1-.8.4c-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.3 1.7.7 2.4.8 3.3.7.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z" />
        <path d="M20.5 3.5C18.2 1.2 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.7 1.4 6.6 0 12-5.4 12-12 .1-3.2-1.2-6.2-3.4-8.3zM12 21.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.2 0-5.4 4.5-9.9 9.9-9.9 2.6 0 5.1 1 7 2.9 1.9 1.9 2.9 4.4 2.9 7-.1 5.4-4.5 9.8-9.9 9.8z" />
      </svg>
      <span>WhatsApp</span>
    </a>);

};

window.SiteFooter = function () {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src="assets/logos/imagotipo-cdo-honeycomb.jpg"
              alt="Oralogy"
              style={{ height: 44, width: "auto", marginBottom: "1.2rem", mixBlendMode: "screen" }} />
            
            <p>No solo movemos dientes — corregimos funciones de respiración, postura y sueño.</p>
          </div>
          <div className="footer-col">
            <h5>Sitio</h5>
            <ul>
              <li><a href="index.html#enfoque">Enfoque</a></li>
              <li><a href="index.html#servicios">Servicios</a></li>
              <li><a href="acerca-de.html">Acerca de Valeria</a></li>
              <li><a href="index.html#testimoniales">Testimoniales</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contacto</h5>
            <ul>
              <li><a href={window.WHATSAPP_URL} target="_blank" rel="noopener">WhatsApp</a></li>
              <li><a href="mailto:hola@oralogy.mx">hola@oralogy.mx</a></li>
              <li><a href="index.html#contacto">Ubicación</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li><a href="aviso-privacidad.html">Aviso de privacidad</a></li>
              <li><a href="#">Términos</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Oralogy® · Centro de Salud Oral</span>
          <span>Hecho con cuidado en México</span>
        </div>
      </div>
    </footer>);

};