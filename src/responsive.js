import { css } from "styled-components";

export const Mobile = (props) => {
  return css`
    @media only screen and (max-width: 480.98px) {
      ${props}
    }
  `;
};




export const IpadTablets = (props) => {
  return css`
    @media only screen and (min-width: 481px) and (max-width: 768.98px) {
      ${props}
    }
  `;
};




export const LaptopsSmallScreen = (props) => {
  return css`
    @media only screen and (min-width: 768px) and (max-width:1024.98px) {
      ${props}
    }
  `
}


export const DesktopsLargeScreens = (props) => {
  return css`
  @media only screen and (min-width: 1025px) and (max-width: 1200.98px)  {
      ${props}
    }
  `
}
export const ExtraLargeScreenTV = (props) => {
  return css`
  @media only screen and (min-width: 1201px) {
      ${props}
    }
  `
}


