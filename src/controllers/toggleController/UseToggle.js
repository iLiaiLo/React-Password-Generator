const UseToggle = ({ setShowPassword }) => {
  const showHide = () => {
    setShowPassword((prewShow) => !prewShow);
  };
  return { showHide };
};

export default UseToggle;
