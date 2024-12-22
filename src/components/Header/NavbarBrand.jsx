import { NavLink } from "react-router-dom";

const NavbarBrand = ({ image, onClickEvent }) => {
  const handleClick = () => {
    onClickEvent();
  }

  return (
    <NavLink to="/" className="navbar-brand" onClick={handleClick}>
      <img src={image} alt="Logo Image" />
    </NavLink>
  );
};

export default NavbarBrand;