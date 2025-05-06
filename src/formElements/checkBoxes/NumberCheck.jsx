const NumberCheck = ({ formData, setFormData, loading }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, number: e.target.checked });
  };
  return (
    <div className="flex gap-2 ml-1.5">
      <input
        disabled={loading}
        type="checkbox"
        id="number"
        className="scale-200"
        checked={formData.number}
        onChange={handleChange}
      />
      <label htmlFor="number" className="hover:underline cursor-pointer">
        Inclue number
      </label>
    </div>
  );
};

export default NumberCheck;
