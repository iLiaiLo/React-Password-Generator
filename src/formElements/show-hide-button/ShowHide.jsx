
const ShowHide = ({displayButton,showHide,showPassword}) => {
  return (
    <>
    {
    displayButton
    ?
    <div className="flex flex-col justify-center mt-4">
      <button onClick={showHide} className="p-2 cursor-pointer border-2 border-gray-300 rounded-md hover:bg-blue-400 hover:text-white">{showPassword?"Hide":"Show"} Password</button>
    </div>
    :
    null
    }
    </>
  )
}

export default ShowHide;