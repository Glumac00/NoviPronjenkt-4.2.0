import React, { useState } from "react";
import Button from "./button";
type modalProps = {
  content?: string;
};

const Modal = ({ content }: modalProps) => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <Button onClick={onOpenModal} text="Open modal" color="red"></Button>
      <div className="modal__overlay">
        <div className="modal">
          {open}
          <div className="modal__header">
            <h2>Modal title</h2>
          </div>
          <div className="modal__body">{content}</div>
          <div className="modal__footer">
            <Button color="red" onClick={onCloseModal} text="Close"></Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
