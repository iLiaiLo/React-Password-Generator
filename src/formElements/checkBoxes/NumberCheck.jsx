

const NumberCheck = ({formData,setFormData}) => {
  return (
    <div>
        <label>inclue number</label>
        <input type="checkbox"
        value={formData.number}
        onChange={(e)=>setFormData({...formData,number:e.target.checked})} />
    </div>
  )
}

export default NumberCheck