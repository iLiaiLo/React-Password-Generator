

const NumberCheck = ({formData,setFormData}) => {
  return (
    <div className="flex gap-2 ml-1.5">
        <input type="checkbox"
        id="number"
        className="scale-200"
        checked={formData.number}
        onChange={(e)=>setFormData({...formData,number:e.target.checked})} />
        <label htmlFor="number" className="hover:underline cursor-pointer">Inclue number</label>
    </div>
  )
}

export default NumberCheck