const LowerCaseCheck = ({ formData, setFormData, loading }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, lowerCase: e.target.checked });
  };
  return (
    <div className="flex ml-1.5 gap-2">
      <input
        disabled={loading}
        type="checkbox"
        id="lowerCase"
        className="scale-200"
        checked={formData.lowerCase}
        onChange={handleChange}
      />
      <label htmlFor="lowerCase" className="hover:underline cursor-pointer">
        Include lowercase letter
      </label>
    </div>
  );
};

export default LowerCaseCheck;
