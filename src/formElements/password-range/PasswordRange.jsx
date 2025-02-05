

const PasswordRange = ({range,setRage}) => {
  return (
    <div>
        <label>choose password length</label>
        <input type="range"  min={4} max={50} value={range} onChange={e=>setRage(+e.target.value)} />
        <span>{range}</span> 
    </div>
  )
}

export default PasswordRange