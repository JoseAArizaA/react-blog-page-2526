export default function Header() {
    const secciones : string[] = ["Inicio", "Noticias", "Tutoriales", "Contacto"];
    // Intentar generar los lis a partir del array.
  return (
    <header className="header">
      <h1 className="header__title">Blog de Desarrollo Web</h1>
      <nav className="header__nav">
        <ul>
          <li>Inicio</li>
          <li>Noticias</li>
          <li>Tutoriales</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  );
}
