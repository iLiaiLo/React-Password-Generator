import formDataArray from "../globalFormVariables";
import { generateWarn } from "../../messages/toastMessages";
import randomCharRages from "../randomCharRages";
import GeneratedPassword from "../generatePassoword";
import { generateSuccess } from "../../messages/toastMessages";
import { timeDelay } from "../timeDelay/timeDelay";
const UseFormSubmit = ({
  range,
  setFormData,
  formData,
  setDisplayButton,
  setLoading,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const Generate = (form) => {
        const Data = formDataArray(form);
        if (Data.every((elem) => !elem)) {
          generateWarn();
          return;
        }
        const RandRages = randomCharRages(Data);
        const generatedPassword = GeneratedPassword(range, RandRages);
        setFormData({ ...formData, generatedPassword });
        setDisplayButton(true);
        generateSuccess();
      };

      setLoading(true);
      await timeDelay(2000);
      setLoading(false);
      Generate(formData);
    } catch (error) {
      console.log(error.message);
    }
  };
  return { handleSubmit };
};

export default UseFormSubmit;
