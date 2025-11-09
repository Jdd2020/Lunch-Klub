import { useState } from "react";
import Toast from "../component/toast";

const useNotify = () => {
  const [toast, setToast] = useState<null | {
    message: string;
    type: "success" | "error";
  }>(null);

  const notifySuccess = (message: string) => {
    setToast({ message, type: "success" });
    setTimeout(() => setToast(null), 3000);
  };

  const notifyError = (message: string) => {
    setToast({ message, type: "error" });
    setTimeout(() => setToast(null), 3000);
  };

  const ToastRenderer = () =>
    toast ? <Toast message={toast.message} type={toast.type} /> : null;

  return { notifySuccess, notifyError, ToastRenderer };
};

export default useNotify;
