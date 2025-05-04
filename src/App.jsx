import { useState} from 'react'
import './App.css'

import { ToastContainer, Bounce } from 'react-toastify';

import formDataArray from './controllers/globalFormVariables.js';
import randomCharRages from './controllers/randomCharRages.js';
import GeneratedPassword from './controllers/generatePassoword.js';

import Password from './formElements/generated-password/Password.jsx';
import PasswordRange from './formElements/password-range/PasswordRange.jsx';
import UpperCaseCheck from './formElements/checkBoxes/UpperCaseCheck.jsx';
import LowerCaseCheck from './formElements/checkBoxes/LowerCaseCheck.jsx';
import NumberCheck from './formElements/checkBoxes/NumberCheck.jsx';
import CharactersCheck from './formElements/checkBoxes/CharactersCheck.jsx';
import Submit from './formElements/submit/Submit.jsx';
import ShowHide from './formElements/show-hide-button/ShowHide.jsx';
import ResetButton from './formElements/resetButton/resetButton.jsx';
import CopyButton from './formElements/copyButton/CopyButton.jsx';

import { generateWarn , generateSuccess } from './messages/toastMessages.js';

function App() {
  const [showPassword,setShowPassword]=useState(false);
  const [displayButton,setDisplayButton]=useState(false);
  const [range,setRange]=useState(4);
  const [formData,setFormData]=useState({
    generatedPassword:"",
    upperCase:false,
    lowerCase:false,
    number:false,
    char:false
  });


  const handleSubmit=(e)=>{
    e.preventDefault()
    try {
      const Generate=(form)=>{
        const Data=formDataArray(form)
        if(Data.every(elem=>!elem)){
          generateWarn();
          return;
        }
        const RandRages=randomCharRages(Data);
        const generatedPassword=GeneratedPassword(range,RandRages);
        setFormData({...formData,generatedPassword});
        setDisplayButton(true);
        generateSuccess();
      }
      Generate(formData);
    } catch (error) {
      console.log(error.message);
    }
  }
  const showHide=()=>{
    setShowPassword(!showPassword);
  }

  return (
    <>
    <section className='border-2 border-gray-300 rounded-lg mx-auto
        mt-[20px] p-4 bg-white shadow-md w-full max-w-[500px] text-2xl flex flex-col gap-4'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <Password showPassword={showPassword} formData={formData} />
        <PasswordRange range={range} setRange={setRange} />
        <UpperCaseCheck formData={formData} setFormData={setFormData} />
        <LowerCaseCheck formData={formData} setFormData={setFormData} />
        <NumberCheck formData={formData} setFormData={setFormData} />
        <CharactersCheck formData={formData} setFormData={setFormData} />
        <Submit />   
      </form>
      <ShowHide displayButton={displayButton} showHide={showHide} showPassword={showPassword} />
      <CopyButton formData={formData} displayButton={displayButton} />    
      <ResetButton
      setFormData={setFormData}
      setRange={setRange}
      setShowPassword={setShowPassword}
      displayButton={displayButton}
      setDisplayButton={setDisplayButton} />
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
  )
}

export default App
