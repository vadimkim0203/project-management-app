import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      }
    };
  });

  return createPortal(
    <dialog ref={dialog}>
      {children}
      <form action="" method="dialog"></form>
      <button onClick={() => dialog.current.close}>{buttonCaption}</button>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
