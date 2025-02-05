
const ShowHide = ({showHide,showPassword}) => {
  return (
    <div>
        <button onClick={showHide}>{showPassword?"Hide":"Show"} Password</button>
    </div>
  )
}

export default ShowHide