import { NavLink } from "react-router-dom";

const CartProductItem = ({ id, title, image, category, price, quantity, updateQuantity, onDeleteProduct }) => {
  const handleSelectChange = (event) => {
    updateQuantity(id, Number(event.target.value));
  }

  const handleClickDelBtn = () => {
    onDeleteProduct(id);
  }

  return (
    <div className="card mb-3">
      <div className="row g-0 p-2" style={{ height: "200px" }}>
        <div className="col-3 d-flex justify-content-center align-items-center h-100">
          <img src={image} className="h-75 w-75 object-fit-contain img-fluid rounded-start" alt="Product Image" />
        </div>
        <div className="col-9">
          <div className="card-body pt-3 pb-2 pe-2 d-flex flex-column justify-content-between h-100">
            <section>
              <small className="text-capitalize text-color-2 border border-color-3 rounded p-1 align-self-start">{category}</small>
              <NavLink className="text-decoration-none text-color-1 align-self-start" to={`/products/${id}`}>
                <h5 className="card-title mt-3">{title}</h5>
              </NavLink>
            </section>
            <section className="d-flex align-items-center" onChange={handleSelectChange}>
              <h6 className="text-color-2 fw-bold mt-0 ms-0 mb-0 me-2" style={{ width: "60px" }}>${price}</h6>
              <select className="form-select w-auto me-2 bg-color-3" aria-label="Default select example" defaultValue={quantity}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
              <button onClick={handleClickDelBtn} className="btn btn-color-5 border border-color-3">
                <i className="bi bi-trash text-color-2"></i>
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProductItem