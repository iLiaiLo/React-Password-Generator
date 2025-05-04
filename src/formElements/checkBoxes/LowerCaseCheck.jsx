
const LowerCaseCheck = ({formData,setFormData}) => {
  return (
    <div className="flex ml-1.5 gap-2">
        <input type="checkbox"
        id="lowerCase"
        className="scale-200"
        checked={formData.lowerCase}
        onChange={(e)=>setFormData({...formData,lowerCase:e.target.checked})} />
        <label htmlFor="lowerCase" className="hover:underline cursor-pointer">Include lowercase letter</label>
    </div>
  )
}

export default LowerCaseCheck