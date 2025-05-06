import { useState } from "react";
import "./App.css";

import { ToastContainer, Bounce } from "react-toastify";

import Password from "./formElements/generated-password/Password.jsx";
import PasswordRange from "./formElements/password-range/PasswordRange.jsx";
import UpperCaseCheck from "./formElements/checkBoxes/UpperCaseCheck.jsx";
import LowerCaseCheck from "./formElements/checkBoxes/LowerCaseCheck.jsx";
import NumberCheck from "./formElements/checkBoxes/NumberCheck.jsx";
import CharactersCheck from "./formElements/checkBoxes/CharactersCheck.jsx";
import Submit from "./formElements/submit/Submit.jsx";
import ShowHide from "./formElements/show-hide-button/ShowHide.jsx";
import ResetButton from "./formElements/resetButton/resetButton.jsx";
import CopyButton from "./formElements/copyButton/CopyButton.jsx";

import UseFormSubmit from "./controllers/submitController/UseFormSubmit.js";
import UseToggle from "./controllers/toggleController/UseToggle.js";
import Loader from "./loader/Loader.jsx";

function App() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [displayButton, setDisplayButton] = useState(false);
  const [range, setRange] = useState(4);
  const [formData, setFormData] = useState({
    generatedPassword: "",
    upperCase: false,
    lowerCase: false,
    number: false,
    char: false,
  });

  const { handleSubmit } = UseFormSubmit({
    range,
    setFormData,
    formData,
    setDisplayButton,
    setLoading,
  });

  const { showHide } = UseToggle({ setShowPassword });
  return (
    <>
      <section
        className="border-2 border-gray-300 rounded-lg mx-auto
        mt-[20px] p-4 bg-white shadow-md w-full max-w-[500px] text-2xl flex flex-col gap-4"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Password showPassword={showPassword} formData={formData} />
          <PasswordRange loading={loading} range={range} setRange={setRange} />
          <UpperCaseCheck
            loading={loading}
            formData={formData}
            setFormData={setFormData}
          />
          <LowerCaseCheck
            loading={loading}
            formData={formData}
            setFormData={setFormData}
          />
          <NumberCheck
            loading={loading}
            formData={formData}
            setFormData={setFormData}
          />
          <CharactersCheck
            loading={loading}
            formData={formData}
            setFormData={setFormData}
          />
          <Submit loading={loading} />
        </form>
        <ShowHide
          loading={loading}
          displayButton={displayButton}
          showHide={showHide}
          showPassword={showPassword}
        />
        <CopyButton
          formData={formData}
          displayButton={displayButton}
          loading={loading}
        />
        <ResetButton
          loading={loading}
          setFormData={setFormData}
          setRange={setRange}
          setShowPassword={setShowPassword}
          displayButton={displayButton}
          setDisplayButton={setDisplayButton}
        />
        <Loader loading={loading} />
      </section>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
