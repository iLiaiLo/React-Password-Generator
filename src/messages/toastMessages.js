import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
const assets={
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
}
export const generateSuccess=()=>toast.info("Password Generated!", assets);
export const copySuccess=()=>toast.info("Password Copied!", assets);
export const generateWarn=()=>toast.warning("Please fill one of the box", assets);