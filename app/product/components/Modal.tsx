import React from "react";

interface modalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  children: React.ReactNode
}


const Modal = ({ modalOpen, setModalOpen, children }: modalProps) => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* The button to open modal */}
      <label htmlFor="my_modal_6" className="btn">open modal</label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className={`modal ${modalOpen ? "modal-open" : ""}`} role="dialog">
        <div className="modal-box">
          <div className="modal-action">
            <label onClick={() => setModalOpen(false)} className="btn">Close!</label>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
export default Modal