import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, title, image, price }) => {
  const navigate = useNavigate();
  const [isMouseHover, setIsMouseHover] = useState(false);

  const handleCardClick = () => {
    navigate(`/products/${id}`);
  }

  return (
    <article className="col" style={{ height: "400px" }}>
      <div role="button" onMouseEnter={() => setIsMouseHover(true)} onMouseLeave={() => setIsMouseHover(false)} onClick={handleCardClick} className={`card w-100 h-100 text-decoration-none ${isMouseHover && "border border-color-2"}`}>
        <section className="h-50">
          <img src={image} className="card-img-top h-100 object-fit-contain p-4" alt="Product Image" />
        </section>
        <section className="card-body h-50 d-flex flex-column justify-content-between">
          <h5 className="card-title">{title}</h5>
          <h5 className="text-color-2 fw-bold">${price}</h5>
        </section>
      </div>
    </article>
  );
};

export default ProductCard