const UseFormReset = ({
  setFormData,
  setRange,
  setDisplayButton,
  setShowPassword,
}) => {
  const handleReset = () => {
    setFormData({
      generatedPassword: "",
      upperCase: false,
      lowerCase: false,
      number: false,
      char: false,
    });
    setRange(4);
    setDisplayButton(false);
    setShowPassword(false);
  };
  return { handleReset };
};

export default UseFormReset;
