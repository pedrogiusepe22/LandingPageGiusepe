// src/components/Header.jsx
import logo from '../../public/logo.png';
function Header() {
  return (
    <header>
      <img src={logo} alt='logo'/> 
      <nav>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#products">Produtos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
