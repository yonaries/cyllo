import React from "react";
import "../css/toast-message.css";
interface Props {
  type: string;
  message: string;
}

const ToastMessage = ({ type, message }: Props) => {
  function toastColor() {
    if (type === "error") {
      return {
        backgroundColor: "#EB1D36",
        color: "white",
        // animation: "5s showToast ease forwards;",
      };
    }
    if (type === "success") {
      return {
        backgroundColor: "#71fa40",
        // animation: "5s showToast ease forwards;",
      };
    }

    return {
      backgroundColor: "white",
      // animation: "5s showToast ease forwards;",
    };
  }
  return (
    <div className="main-container">
      <div className="toast" style={toastColor()}>
        <p>{message}</p>
      </div>
    </div>
  );
};
export default ToastMessage;
