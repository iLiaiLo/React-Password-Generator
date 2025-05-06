import Loader from "../../loader/Loader";

const Submit = ({ loading }) => {
  return (
    <div className="flex flex-col justify-center mt-4">
      <button
        disabled={loading}
        type="submit"
        className="p-2 cursor-pointer border-2 border-gray-300 rounded-md hover:bg-blue-400 hover:text-white flex items-center justify-center"
      >
        {!loading ? "Generate" : <Loader />}
      </button>
    </div>
  );
};

export default Submit;
