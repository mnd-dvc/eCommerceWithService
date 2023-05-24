import { NavLink } from "react-router-dom";
import { ShoppingCartOutlined, UserAddOutlined } from "@ant-design/icons";
import { Badge, Button } from "antd";

function Header() {
  return (
    <header>
      <div className="logo">PAUL SAWYER</div>

      <div
        className="myNavBar"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <NavLink
          className="navlink-button"
          to="/"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              textDecoration: "none",
            };
          }}
        >
          Anasayfa
        </NavLink>

        <NavLink
          className="navlink-button"
          to="/products"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              textDecoration: "none",
            };
          }}
        >
          Ürünler
        </NavLink>

        <NavLink
          className="navlink-button"
          to="/info"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              textDecoration: "none",
            };
          }}
        >
          Hakkımızda
        </NavLink>

        <NavLink
          className="basket-button"
          to="/basket"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              textDecoration: "none",
            };
          }}
        >
          <ShoppingCartOutlined key="basket" />
          <a href="#">
            <Badge count={5} className="bildirim">
            </Badge>
          </a>
        </NavLink>
  
      
      </div>
      <NavLink
      to="/login">
           <Button className="giris" >
             <span>Giriş Yap</span>
             <UserAddOutlined key="login" />
       </Button> </NavLink>


      <div className="search-box ">
        <input id="searchInput" type="text" placeholder="Arama Yapın!" />
        <button type="submit">Ara</button>
      </div>
    </header>
  );
}

export default Header;
