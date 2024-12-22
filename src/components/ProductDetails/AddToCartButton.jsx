const AddToCartButton = ({ onClickEvent }) => {

  const handleClickButton = () => {
    onClickEvent();
  }

  return (
    <>
      <button onClick={handleClickButton} type="button" className="btn btn-color-3 w-100">
        Add to Cart
      </button>
    </>
  )
}

export default AddToCartButton