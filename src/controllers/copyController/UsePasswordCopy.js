import { copySuccess } from "../../messages/toastMessages.js";
const UsePasswordCopy = (password) => {
    const handleCopy=async ()=>{
        try {
            
            if (navigator.clipboard) {
                await navigator.clipboard.writeText(password);
                copySuccess();
            } else {
                const input = document.createElement('textarea');
                input.value = password;
                document.body.appendChild(input);
                input.select();
                document.execCommand('copy');
                document.body.removeChild(input);
                copySuccess();
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    return {handleCopy};
}

export default UsePasswordCopy;