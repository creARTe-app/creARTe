import React, { useEffect, useState } from "react";
import popupStyles from "./custom-popup.module.css";
import PropTypes from "prop-types";
import { useHistory } from 'react-router-dom';


const CustomPopup = (props) => {
  const history = useHistory();
  const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
    history.push('/');
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <>
        <div
        style={{
            visibility: show ? "visible" : "hidden",
            opacity: show ? "1" : "0"
        }}
        className={popupStyles.overlay}
        >
        <div className={popupStyles.popup}>
            <h2>{props.title}</h2>
            <span className={popupStyles.close} onClick={closeHandler}>
            &times;
            </span>
            <div className={popupStyles.content}>{props.children}</div>
        </div>
        </div>
    </>
  );
};

CustomPopup.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
export default CustomPopup;

