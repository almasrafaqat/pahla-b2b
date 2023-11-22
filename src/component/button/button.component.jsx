import { BaseButton, GoogleSignInButton, InvertedButton, SearchButton } from "./button.style";


export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
    search_btn: 'search-btn',

}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.search) => ({
  [BUTTON_TYPE_CLASSES.base]: BaseButton,
  [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
  [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  [BUTTON_TYPE_CLASSES.search_btn]: SearchButton,
}[buttonType]);


const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;