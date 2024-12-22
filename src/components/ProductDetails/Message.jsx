const Message = ({ messageRef }) => {
  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div ref={messageRef} id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <img src="/yagostore-icon.svg" className="rounded me-2" alt="YagoStore Icon" />
          <strong className="me-auto">Product Added</strong>
          <small>1s ago</small>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body">
          Hello, world! This is a toast message.
        </div>
      </div>
    </div>
  )
}

export default Message