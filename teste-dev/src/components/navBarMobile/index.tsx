import "./styles.css";
import Union from "../../assets/Union.svg";
import Cart from "../../assets/Cart.svg";
import "../../pages/home/styles.css";

export const NavBarMobile = () => {
  return (
    <div className="container-navBar-mobile">
      <div className="input-area-mobile">
        <input
          placeholder="Digite aqui sua busca"
          className=" input-header input-header-mobile"
        />
        <img src={Union} alt="iconSearch" className="iconSearch" />
      </div>
      <nav className="menu-mobile">
        <span>Loja</span>
        <span>Login</span>
        <span>Sobre</span>
        <span>Contato</span>
      </nav>
      <div className="cart-area-mobile">
        <span className="span-cart-area-mobile">Ver Carrinho</span>
        <img alt="iconCart" src={Cart} className="iconCart-mobile" />
      </div>
    </div>
  );
};
