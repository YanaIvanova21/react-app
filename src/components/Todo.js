import { useState } from "react"; //useState is called react hook

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  //props is parameter's name. It can be differents, but usually it is called props (naming convention)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen ? (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      ) : null}
      {modalIsOpen ? <Backdrop onCancel={closeModalHandler} /> : null}
    </div>
  );
}

export default Todo; // to use this function outside current file
//{props.text}  - we use text property of the props object. Curly bracets are needed to differ html tags text from java script elements. Props is java script element here
