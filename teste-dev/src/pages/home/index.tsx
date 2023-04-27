import "./styles.css";
import Logo from "../../assets/Logo.svg";
import Cart from "../../assets/Cart.svg";
import Union from "../../assets/Union.svg";
import { useState } from "react";
import { NavBarMobile } from "../../components/navBarMobile";
import { RxHamburgerMenu } from "react-icons/rx";
import Rectangle39 from "../../assets/Rectangle39.svg";
import Rectangle40 from "../../assets/Rectangle40.svg";
import Rectangle41 from "../../assets/Rectangle41.svg";
import Rectangle42 from "../../assets/Rectangle42.svg";
import Rectangle43 from "../../assets/Rectangle43.svg";
import Product1 from "../../assets/Product1.svg";
import Product2 from "../../assets/Product2.svg";
import Product3 from "../../assets/Product3.svg";
import Vector from "../../assets/Vector.svg";
import VectorRight from "../../assets/VectorRight.svg";
import Selo from "../../assets/Selo.svg";
import Payment from "../../assets/Payment.svg";
import LojaProtegida from "../../assets/LojaProtegida.svg";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header>
        <button
          className="open-menu-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <RxHamburgerMenu color="#000" size={"30px"} />
        </button>
        <img alt="logo" src={Logo} />
        <nav className="menu-desktop">
          <span>Loja</span>
          <span>Login</span>
          <span>Sobre</span>
          <span>Contato</span>
        </nav>
        <div className="input-area">
          <input placeholder="Digite aqui sua busca" className="input-header" />
          <img src={Union} alt="iconSearch" className="iconSearch" />
        </div>
        <img alt="iconCart" src={Cart} className="iconCart" />
      </header>
      {menuOpen && <NavBarMobile />}
      
      <main>
        <section className="images-section">
          <div className="images-area">
            <img src={Rectangle40} />
            <img src={Rectangle41} />
          </div>

          <img src={Rectangle39} className="central-image" />

          <div className="images-area">
            <img src={Rectangle42} />
            <img src={Rectangle43} />
          </div>
        </section>

        <section className="showcase">
          <div className="showcase-text-area">
            <h1 className="showcase-text showcase-title">
              Confira as Novidades
            </h1>
            <p className="showcase-text">
              Vestibulum vestibulum sed lacus non pellentesque.
            </p>
          </div>

          <section className="showcase-products-section">
            <img src={Vector} className="vector-image"/>
            <div className="showcase-product">
              <img src={Product1} />
              <p className="showcase-product-name focus">
                Lorem Ipsum dolor sit amet
              </p>
              <div className="showcase-product-price-area">
                <span className="showcase-product-price focus">R$159,90</span>
                <span className="showcase-product-price promotional focus">
                  R$159,90
                </span>
              </div>
            </div>

            <div className="showcase-product">
              <img src={Product2} />
              <p className="showcase-product-name">
                Lorem Ipsum dolor sit amet
              </p>

              <span className="showcase-product-price promotional">
                R$159,90
              </span>
              <span className="showcase-product-name-credit">
                em até 3x de R$53,30 no cartão
              </span>
            </div>

            <div className="showcase-product">
              <img src={Product3} />
              <p className="showcase-product-name ">
                Lorem Ipsum dolor sit amet
              </p>
              <div className="showcase-product-price-area">
                <span className="showcase-product-price ">R$159,90</span>
                <span className="showcase-product-price promotional ">
                  R$159,90
                </span>
              </div>
            </div>

            <div className="showcase-product">
              <img src={Product1} />
              <p className="showcase-product-name">
                Lorem Ipsum dolor sit amet
              </p>
              <div className="showcase-product-price-area">
                <span className="showcase-product-price ">R$159,90</span>
                <span className="showcase-product-price promotional">
                  R$159,90
                </span>
              </div>
            </div>
            <img src={VectorRight} className="vector-image"/>
          </section>
        </section>
      </main>


      <footer>
        <section className="footer-section">
          <h2>Central de Atendimento</h2>
          <div className="line-style" />

          <h3>Whatsapp: (11) 987654321</h3>

          <p>São Paulo: (11) 1234-5678</p>
          <p>Rio de Janeiro: (21) 1234-5678</p>
          <p>Belo Horizonte: (31) 1234-5678</p>
          <p>Santos: (13) 1234-5678</p>
          <p>Curitiba: (41) 1234-5678</p>

          <h3>Nossos Horários</h3>
          <p>Segunda a sexta das 0:00 às 8:00hs</p>
          <p>Sábado das 9:00 às 12:00</p>
        </section>

        <section className="footer-section">
          <h2>Selos de Segurança</h2>
          <div className="line-style" />
          <div>
            <img src={Selo} />
            <img src={LojaProtegida} />
          </div>
        </section>

        <section className="footer-section">
          <h2>Formas de Pagamento</h2>
          <div className="line-style" />
          <img src={Payment} />
        </section>
      </footer>
    </>
  );
};

export default HomePage;
