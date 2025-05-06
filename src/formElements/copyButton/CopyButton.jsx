import UsePasswordCopy from "../../controllers/copyController/UsePasswordCopy.js";

const CopyButton = ({ formData, displayButton, loading }) => {
  const { generatedPassword } = formData;
  const { handleCopy } = UsePasswordCopy(generatedPassword);
  return (
    <>
      {displayButton ? (
        <div className="flex flex-col justify-center mt-4">
          <button
            disabled={loading}
            onClick={handleCopy}
            className="p-2 cursor-pointer border-2 border-gray-300 rounded-md hover:bg-blue-400 hover:text-white"
          >
            Copy
          </button>
        </div>
      ) : null}
    </>
  );
};

export default CopyButton;
