import React, { useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../css/toast-message.css";

interface Props {
  toastType: string;
  toastMessage: string;
  waitingFor?: any;
}

const Notify = ({ toastType, toastMessage, waitingFor }: Props) => {
  if (toastType === 'error') {
    return toast.error(toastMessage, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  if (toastType === 'success') {
    return toast.success(toastMessage, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return toast.promise(waitingFor, {
    pending: toastMessage,
    error: 'Request Failed 🤯'
  }, {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export default Notify;
