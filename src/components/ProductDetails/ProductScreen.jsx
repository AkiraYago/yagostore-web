import AddToCartButton from "./AddToCartButton"
import BuyButton from "../_common/BuyButton"
import Message from "./Message";

const ProductScreen = ({ title, category, description, image, price, addToCartClick, updateQuantity, messageRef }) => {

  const handleSelectChange = (event) => {
    updateQuantity(Number(event.target.value));
  }

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-7 p-5 d-flex justify-content-center align-items-center">
          <img src={image} className="img-fluid rounded-start object-fit-contain" style={{width: "300px", height: "300px"}} alt="Product Image" />
        </div>
        <div className="col-md-5">
          <div className="card-body d-flex flex-column justify-content-center h-100">
            <small className="text-capitalize text-color-2 border border-color-3 rounded p-1 align-self-start">{category}</small>
            <h3 className="card-title mt-3">{title}</h3>
            <p className="card-text overflow-auto" style={{ height: "150px" }}>{description}</p>
            <section className="d-flex align-items-center" onChange={handleSelectChange}>
              <h5 className="text-color-2 fw-bold mt-0 ms-0 mb-0 me-2" style={{ width: "80px" }}>${price}</h5>
              <select className="form-select w-auto bg-color-3" aria-label="Default select example">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </section>
            <section className="mt-3">
              <div className="mb-2">
                <AddToCartButton onClickEvent={addToCartClick} />
                <Message messageRef={messageRef} />
              </div>
              <div>
                <BuyButton>Buy Now</BuyButton>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductScreen