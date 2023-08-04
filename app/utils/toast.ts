
import exp from "constants";
import { Slide, ToastClassName, ToastContainer, toast } from "react-toastify";
// import tostify css
import "react-toastify/dist/ReactToastify.css";

const showToast = (message: string) => {  
    toast.success(message, {
        theme: "dark",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000, //3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        transition: Slide
      });
}

export default showToast;