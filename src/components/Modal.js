import { React } from 'react';

function Modal({
  active,
  children,
  closeModal,
}) {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={closeModal}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
