const CharactersCheck = ({ formData, setFormData, loading }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, char: e.target.checked });
  };
  return (
    <div className="flex ml-1.5 gap-2">
      <input
        disabled={loading}
        type="checkbox"
        id="char"
        className="scale-200"
        checked={formData.char}
        onChange={handleChange}
      />
      <label htmlFor="char" className="hover:underline cursor-pointer">
        Include character
      </label>
    </div>
  );
};

export default CharactersCheck;
