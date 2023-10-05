import React from "react";
import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <div>
      <Toaster
        // toastOptions={{
        //   success: {
        //     style: {
        //       background: "green",
        //       color: "white"
        //       // border: "1px solid blue",
        //     },
        //   },
        //   error: {
        //     style: {
        //       background: "red",
        //     },
        //   },
          
        // }}
      />
    </div>
  );
};

export default ToastProvider;
