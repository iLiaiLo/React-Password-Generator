

const Password = ({showPassword,formData}) => {
  const {generatedPassword} = formData;
  return (
    <div className="flex flex-col">
        <input disabled className="border-2 border-gray-300 rounded-md p-2 outline-none"
        type={showPassword?"text":"password"} defaultValue={generatedPassword} placeholder='******' />
    </div>
  )
}

export default Password