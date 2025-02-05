
const LowerCaseCheck = ({formData,setFormData}) => {
  return (
    <div>
        <label>include lowercase letter</label>
        <input type="checkbox"
        value={formData.lowerCase}
        onChange={(e)=>setFormData({...formData,lowerCase:e.target.checked})} />
    </div>
  )
}

export default LowerCaseCheck