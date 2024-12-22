const PurchaseDetail = ({ children, value }) => {
  return (
    <li className="d-flex justify-content-between border-bottom border-color-1 pt-2 pb-2">
      <span>{children}</span>${value}
    </li>
  )
}

export default PurchaseDetail