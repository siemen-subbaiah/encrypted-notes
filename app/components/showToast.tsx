// Desc: This component is used to show toast messages
import { ToastContainer } from "react-toastify";

const ShowToast = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      🎉 Your Unique site is available!
      <ToastContainer />
    </>
  );
};

export default ShowToast;