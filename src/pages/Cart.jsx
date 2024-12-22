import { useEffect } from 'react';
import CartProductItem from '../components/Cart/CartProductItem';
import DefaultLayout from '../layouts/DefaultLayout'
import useCartProductsStore from '../store/cartProductsStore'
import shippingValue from '../utils/consts/shippingValue';
import truncValue from '../helpers/truncValue';
import PurchaseDetail from '../components/Cart/PurchaseDetail';
import BuyButton from '../components/_common/BuyButton';

const Cart = () => {
  const { cartProducts, subtotal, updateQuantity, setSubtotal, deleteProductById, deleteAllProducts } = useCartProductsStore();

  useEffect(() => {
    setSubtotal();
  }, [cartProducts]);

  const handleBuyCartClick = () => {
    deleteAllProducts();
  }

  const handleDeleteProductItem = (id) => {
    deleteProductById(id)
  }

  return (
    <DefaultLayout>
      <article className="container">
        <div className="row g-3">
          <section className="col-12 col-md-8">
            <h3>Your Shopping Cart</h3>
            <div className="h-100">
              {
                cartProducts.length > 0 ?
                  cartProducts.map(productItem =>
                    <CartProductItem
                      key={`cart-product-item-${productItem.id}`}
                      id={productItem.id}
                      title={productItem.title}
                      category={productItem.category}
                      image={productItem.image}
                      price={productItem.price}
                      quantity={productItem.quantity}
                      updateQuantity={updateQuantity}
                      onDeleteProduct={handleDeleteProductItem}
                    />
                  ) :
                  <p className="h-100 d-flex justify-content-center align-items-center">
                    No products added in to the cart...
                  </p>
              }
            </div>
          </section>
          <section className="col-12 col-md-4">
            <h3>Summary</h3>
            <div className="p-3 bg-color-5 border border-color-3 rounded">
              <ul className="p-0" style={{ listStyleType: "none" }}>
                <PurchaseDetail value={subtotal}>Subtotal</PurchaseDetail>
                {
                  cartProducts.length > 0 && <PurchaseDetail value={shippingValue}>Shipping</PurchaseDetail>
                }
                <PurchaseDetail value={truncValue(subtotal + (cartProducts.length > 0 ? shippingValue : 0))}>Total</PurchaseDetail>
              </ul>
              <BuyButton isDisabled={cartProducts.length <= 0} onClickEvent={handleBuyCartClick}>
                {cartProducts.length <= 0 ? "You don't have products yet" : "Buy"}
              </BuyButton>
            </div>
          </section>
        </div>
      </article>
    </DefaultLayout>
  )
}

export default Cart