

const CharactersCheck = ({formData,setFormData}) => {
  return (
    <div className="flex ml-1.5 gap-2">
        <input type="checkbox"
        id="char"
        className="scale-200"
        checked={formData.char}
        onChange={(e)=>setFormData({...formData,char:e.target.checked})} />
        <label htmlFor="char" className="hover:underline cursor-pointer">Include character</label>
    </div>
  )
}

export default CharactersCheck