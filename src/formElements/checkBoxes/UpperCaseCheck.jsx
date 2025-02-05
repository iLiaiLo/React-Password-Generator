

const UpperCaseCheck = ({formData,setFormData}) => {
  return (
    <div>
        <label>inclue uppercase letter</label>
        <input type="checkbox"
        value={formData.upperCase}
        onChange={(e)=>setFormData({...formData,upperCase:e.target.checked})} />
    </div>
  )
}

export default UpperCaseCheck