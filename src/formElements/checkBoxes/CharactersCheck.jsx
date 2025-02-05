

const CharactersCheck = ({formData,setFormData}) => {
  return (
    <div>
        <label>include character</label>
        <input type="checkbox"
        value={formData.char}
        onChange={(e)=>setFormData({...formData,char:e.target.checked})} />
    </div>
  )
}

export default CharactersCheck