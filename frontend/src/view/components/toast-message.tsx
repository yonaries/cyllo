import React, { useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../css/toast-message.css";

interface Props {
  toastMessage: string;
  toastType?: string;
  waitingFor?: any;
  time?: number | false;
  Icon?: false;
}
const errorId = "error-id-yes";
const successId = "success-id-yes";
const infoId = "info-id-yes";

const Notify = ({ toastType, toastMessage, waitingFor, time, Icon }: Props) => {
  if (toastType === 'error') {
    return toast.error(toastMessage, {
      toastId: errorId,
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  if (toastType === 'success') {
    return toast.success(toastMessage, {
      toastId: successId,
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  if (waitingFor) {
    return toast.promise(waitingFor, {
      pending: toastMessage,
      // error: 'Request Failed 🤯'
    }, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return toast.info(toastMessage, {
    toastId: infoId,
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    icon: !Icon && false,
  })
}

export default Notify;