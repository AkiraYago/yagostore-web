import { useEffect, useRef } from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import ProductScreen from '../components/ProductDetails/ProductScreen'
import useProductsStore from '../store/productsStore'
import { useLocation } from 'react-router-dom'
import LoadingSpinner from "../components/_common/LoadingSpinner"
import useCartProductsStore from '../store/cartProductsStore'

const ProductDetails = () => {
  const { productFound, loading, findProductById, clearProductFound } = useProductsStore();
  const { cartProducts, addProductsOnCart } = useCartProductsStore();
  let location = useLocation();
  const quantityRef = useRef(1);
  const messageRef = useRef();

  useEffect(() => {
    const productId = Number(location.pathname.split("/").pop());
    findProductById(productId);

    return () => clearProductFound();
  }, []);

  const handleAddToCartClick = () => {

    // Agregar producto sin que se pase de 8 unidades
    const productOnCart = cartProducts?.find(product => product.id === productFound.id);

    if (!productOnCart) {
      addProductsOnCart({ ...productFound, quantity: quantityRef.current });
    }

    if (productOnCart.quantity < 8 && productOnCart.quantity + quantityRef.current <= 8) {
      addProductsOnCart({ ...productFound, quantity: quantityRef.current });
    } else {
      alert("La cantidad excede el stock | Cada producto tiene un stock de 8 unidades");
    }

    // Mostrar mensaje
    const message = bootstrap.Toast.getOrCreateInstance(messageRef.current);
    message.show();
  }

  const updateQuantity = (quantitySelected) => {
    quantityRef.current = quantitySelected;
  }

  return (
    <DefaultLayout>
      <div>
        {
          loading ? <LoadingSpinner /> :
            <ProductScreen
              title={productFound.title}
              category={productFound.category}
              description={productFound.description}
              image={productFound.image}
              price={productFound.price}
              addToCartClick={handleAddToCartClick}
              updateQuantity={updateQuantity}
              messageRef={messageRef}
            />
        }
      </div>
    </DefaultLayout>
  )
}

export default ProductDetails