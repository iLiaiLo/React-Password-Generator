const UpperCaseCheck = ({ formData, setFormData, loading }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, upperCase: e.target.checked });
  };
  return (
    <div className="flex gap-2 ml-1.5">
      <input
        disabled={loading}
        type="checkbox"
        id="upperCase"
        className="scale-200"
        checked={formData.upperCase}
        onChange={handleChange}
      />
      <label htmlFor="upperCase" className="hover:underline cursor-pointer">
        Inclue uppercase letter
      </label>
    </div>
  );
};

export default UpperCaseCheck;
