import { useEffect } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import ProductCard from "../components/Home/ProductCard";
import LoadingSpinner from "../components/_common/LoadingSpinner";
import ErrorAPI from "../components/_common/ErrorAPI";
import useProductsStore from "../store/productsStore";
import DropdownButton from "../components/_common/DropdownButton";
import useCategoriesStore from "../store/categoriesStore";
import CategoryTitle from "../components/Home/CategoryTitle";
import NumResults from "../components/Home/NumResults";

const Home = () => {
  const { products, loading, searching, error, getAllProducts, sort } = useProductsStore();
  const { categorySelected } = useCategoriesStore();

  useEffect(() => {
    if (!searching && categorySelected === "All Products") {
      getAllProducts();
    }
  }, []);

  const productsList = products?.map(product =>
    <ProductCard
      key={`product-card-${product.id}`}
      id={product.id}
      title={product.title}
      image={product.image}
      price={product.price}
    />
  );

  const handleDropdownClick = (optionSelected) => {
    if (optionSelected === "Lowest Price") {
      sort("asc");
    } else {
      sort("desc");
    }
  }

  return (
    <DefaultLayout>
      <header className="home-header d-flex justify-content-between">
        <section className="left-section">
          <CategoryTitle title={categorySelected} />
        </section>
        <section className="right-section d-flex align-items-center">
          <NumResults quantity={loading ? "..." : products.length} />
          <DropdownButton
            innerText="Sort By"
            textColor="color-4"
            color="color-1"
            menuTexts={["Lowest Price", "Highest Price"]}
            onClickEvent={handleDropdownClick}
          />
        </section>
      </header>
      <main className={`row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4 mt-1`}>
        {
          error ? <ErrorAPI /> :
            loading ? <LoadingSpinner /> : productsList
        }
      </main>
    </DefaultLayout>
  );
};

export default Home;