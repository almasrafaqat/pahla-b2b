import { InputContainer, StyledInput } from "./input.style";

const Input = ({ type, hasButton, placeholder, onInputChange }) => {
  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    // Perform any additional actions on input change, e.g., call onInputChange prop
    if (onInputChange) {
      onInputChange(inputValue);
    }
  };

  return (
    <InputContainer>
      <StyledInput
        type={type}
        placeholder={placeholder}
        hasButton={hasButton}
        onChange={handleInputChange}
      />
    </InputContainer>
  );
};

export default Input;