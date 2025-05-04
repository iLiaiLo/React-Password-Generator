

const UpperCaseCheck = ({formData,setFormData}) => {
  return (
    <div className="flex gap-2 ml-1.5">
        <input type="checkbox"
        id="upperCase"
        className="scale-200"
        checked={formData.upperCase}
        onChange={(e)=>setFormData({...formData,upperCase:e.target.checked})} />
        <label htmlFor="upperCase" className="hover:underline cursor-pointer">Inclue uppercase letter</label>
    </div>
  )
}

export default UpperCaseCheck