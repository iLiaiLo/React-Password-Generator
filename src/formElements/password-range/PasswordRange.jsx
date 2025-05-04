

const PasswordRange = ({range,setRange}) => {

  const handleChange=(e)=>{
    setRange(+e.target.value);
  }
  return (
    <div>

        <label htmlFor="steps-range" className="block text-2xl mt-2">Choose password length</label>
        <input id="steps-range" type="range" min={4} max={50} value={range} step={1} onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />

        <span>{range}</span> 
    </div>
  )
}

export default PasswordRange