import { useNavigate } from "react-router-dom"

const PurchaseConfirm = ({ onConfirm = () => {} }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Are you sure?</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Do yo want to continue?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-color-3" data-bs-dismiss="modal">Cancel</button>
              <button onClick={() => onConfirm()} className="btn btn-color-2" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Continue</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Your purchase was successful!</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column align-items-center">
              <img className="w-50" src="/yagostore-icon.svg" alt="YagoStore Icon" />
              Have a nice day!
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-color-3" data-bs-dismiss="modal">Close</button>
              <button type="button" onClick={() => navigate("/")} data-bs-dismiss="modal" className="btn btn-color-2">Keep Exploring</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PurchaseConfirm