// src/pages/Home.jsx
import Header from '../../components/Header';
import '../../styles/Home.css'



function Home() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section id="hero">
        <h2>Bem-vindo à Gentleman</h2>
        <p>A sua loja de grife</p>
        <a href="#products" id="cta-button">Ver produtos</a>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>Sobre Nós</h2>
        <p>Desde 1977, nossa loja italiana de ternos de grife é referência em elegância e alfaiataria de alta qualidade. Com mais de 40 anos de tradição, já vestimos grandes nomes como Lionel Messi, David Beckham e Ronaldinho Gaúcho, oferecendo ternos sob medida que combinam sofisticação e estilo.</p>
      </section>

      {/* Services Section */}
      <section id="services">
        <h2>Nossos Serviços</h2>
        <p>Oferecemos uma variedade de produtos que te transformam em um Gentleman.</p>
      </section>

      {/* Products Section */}
      <section id="products">
        <div className="destaques">
        Conheça nossos destaques
        </div>
        <div className="product-gallery">
          <div className="product-item">
            <img src="https://s2.glbimg.com/wEtEDhhM9TGnOkZRN20WwwBLalU=/600x900/smart/e.glbimg.com/og/ed/f/original/2018/09/24/gettyimages-1039403684.jpg" alt="Terno 1" />
            <p>Terno Clássico</p>
          </div>
          <div className="product-item">
            <img src="https://i.pinimg.com/736x/19/3c/71/193c71c5270f90f0e241a78ab1708c07.jpg" alt="Terno 2" />
            <p>Terno Moderno</p>
          </div>
          <div className="product-item">
            <img src="https://api.dooca.store/files/49781/files/david-beckham-com-terno-georgius-masn-store-1.png" alt="Terno 3" />
            <p>Terno Slim Fit</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Entre em Contato</h2>
        <p>Vendas@gentleman.com</p>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Minha Empresa. Todos os direitos reservados.</p>
      </footer>
    </>
    
  );
  
}

export default Home;
