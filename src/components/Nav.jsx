import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="nav">
      <div className="nav__brand">CoopDinámica</div>
      <nav className="nav__links">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/calculadora">Calculadora</NavLink>
        <NavLink to="/calculadora-prestamos">Calculadora de préstamos</NavLink>
        <NavLink to="/formulario">Formulario</NavLink>
        <NavLink to="/enviado">Enviado</NavLink>
      </nav>
    </header>
  );
};

export default Nav;
