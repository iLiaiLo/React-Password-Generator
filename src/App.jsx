import { useState} from 'react'
import './App.css'

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

function App() {
  const [showPassword,setShowPassword]=useState(false);
  const [range,setRage]=useState(4);
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
          alert("please fill one of the box")
          return
        }
        const RandRages=randomCharRages(Data)
        const generatedPassword=GeneratedPassword(range,RandRages)
        setFormData({...formData,generatedPassword})
      }
      Generate(formData)
    } catch (error) {
      console.log(error)
    }
  }
  const showHide=()=>{
    setShowPassword(!showPassword)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Password showPassword={showPassword} formData={formData} />
        <PasswordRange range={range} setRage={setRage} />
        <UpperCaseCheck formData={formData} setFormData={setFormData} />
        <LowerCaseCheck formData={formData} setFormData={setFormData} />
        <NumberCheck formData={formData} setFormData={setFormData} />
        <CharactersCheck formData={formData} setFormData={setFormData} />
        <Submit />
      </form>
      <ShowHide showHide={showHide} showPassword={showPassword} />      
    </>
  )
}

export default App
