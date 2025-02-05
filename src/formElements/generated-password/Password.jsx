

const Password = ({showPassword,formData}) => {
  return (
    <div>
        <input type={showPassword?"text":"password"} defaultValue={formData.generatedPassword} placeholder='******' />
    </div>
  )
}

export default Password