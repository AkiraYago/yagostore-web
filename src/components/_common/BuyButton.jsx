import PurchaseConfirm from './PurchaseConfirm'

const BuyButton = ({ children, isDisabled, onClickEvent }) => {

  return (
    <div>
      <button disabled={isDisabled} type="button" className="btn btn-color-2 w-100" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">
        {children}
      </button>
      <PurchaseConfirm onConfirm={onClickEvent} />
    </div>
  )
}

export default BuyButton