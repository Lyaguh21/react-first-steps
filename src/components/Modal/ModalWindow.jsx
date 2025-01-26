import { useEffect, useRef } from "react";
import "./Modal.scss";
import { createPortal } from "react-dom";
export default function ModalWindow({ children, open }) {
  const dialog = useRef();
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]); //   указание зависимости

  return createPortal(
    <dialog ref={dialog}>{children}</dialog>,
    document.getElementById("modal")
  );
}
