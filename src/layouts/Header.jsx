import logo from "../assets/imgs/yagostore-logo.png";
import NavbarBrand from "../components/Header/NavbarBrand";
import NavbarToggler from "../components/Header/NavbarToggler";
import SearchBar from "../components/Header/SearchBar";
import CartButton from "../components/Header/CartButton";
import { useEffect } from "react";
import useProductsStore from "../store/productsStore";
import DropdownButton from "../components/_common/DropdownButton";
import useCategoriesStore from "../store/categoriesStore";
import { useNavigate } from "react-router-dom";
import useCartProductsStore from "../store/cartProductsStore";

const Header = () => {
  const { categories, setCategorySelected, getAllCategories } = useCategoriesStore();
  const { getAllProducts, getProductsByCategory, findProductsByKeyword } = useProductsStore();
  const { cartProducts } = useCartProductsStore();
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories();
  }, []);

  const handleNavbarBrandClick = () => {
    getAllProducts();
    setCategorySelected("All Products");
  }

  const handleDropdownClick = (categorySelected) => {
    navigate("/");
    getProductsByCategory(categorySelected);
    setCategorySelected(categorySelected);
  }

  const handleSearch = (keyword) => {
    navigate("/");
    findProductsByKeyword(keyword);
    setCategorySelected(`Results for "${keyword}"`);
  }

  return (
    <header className="navbar navbar-expand-lg bg-color-1 position-sticky top-0 z-1">
      <nav className="container">
        <NavbarBrand image={logo} onClickEvent={handleNavbarBrandClick} />

        <NavbarToggler />
        
        <article className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <DropdownButton
              innerText="Categories"
              textColor="color-4"
              onClickEvent={handleDropdownClick}
              menuTexts={categories}
            />
          </div>
          <SearchBar onSearchEvent={handleSearch} />
          <CartButton numProductsOnCart={cartProducts.length} />
        </article>
      </nav>
    </header>
  );
};

export default Header;