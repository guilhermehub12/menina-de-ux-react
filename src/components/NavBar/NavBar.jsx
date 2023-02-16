import "./NavBar.css";

function NavBar() {
  const pages = ["Início", "Estude", "Cursos", "Bootcamps", "Sobre", "Contato"];

  return (
    <nav id="navbar" className="navbar">
      <ul>
        {pages.map((page, index) => {
          return (
            <li key={`${page}-${index}`}>
              <a className="nav-link scrollto" href="#">
                {page}
              </a>
            </li>
          )
        })}
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
  );
}

export default NavBar;
