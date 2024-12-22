import { NavLink } from "react-router-dom";

const CartButton = ({ numProductsOnCart = 0 }) => {
  return (
    <NavLink type="button" to="/cart" className="btn btn-color-2 position-relative">
      <i className="bi bi-cart2"></i>
      {
        numProductsOnCart > 0 &&
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {numProductsOnCart}
          <span className="visually-hidden">Products on cart</span>
        </span>
      }

    </NavLink>
  );
};

export default CartButton;