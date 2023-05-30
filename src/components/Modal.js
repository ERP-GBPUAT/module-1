import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";

const Modal = ({ setModal }) => {
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const closeModalHandler = () => {
    setModal(false);
  };
  const onOptionChange = (e) => {
    setCategory(e.target.value);
  };
  const setCategoryHandler = () => {
    setModal(false);
    // console.log(category);
    navigate(`/form/${category}`);
  };

  return (
    <div className="backdrop">
      <div className="modal">
        <h2>Choose Leave Category</h2>
        <div className="radios">
          <div>
            <input
              type="radio"
              name="category"
              value="Casual Leave"
              id="casual"
              onChange={onOptionChange}
            />
            <label htmlFor="casual">Casual Leave</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              value="Earned Leave"
              id="earned"
              onChange={onOptionChange}
            />
            <label htmlFor="earned">Earned Leave</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              value="Medical Leave"
              id="medical"
              onChange={onOptionChange}
            />
            <label htmlFor="medical">Medical Leave</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              value="Official Duty Leave"
              id="official"
              onChange={onOptionChange}
            />
            <label htmlFor="official">Official Duty Leave</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              value="Outstation Leave"
              id="outstation"
              onChange={onOptionChange}
            />
            <label htmlFor="outstation">Outstation Leave</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              value="Others"
              id="others"
              onChange={onOptionChange}
            />
            <label htmlFor="others">Others</label>
          </div>
        </div>
        <div className="modBottom">
          <div className="choose" onClick={setCategoryHandler}>
            Choose
          </div>
          <div className="cancel" onClick={closeModalHandler}>
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
