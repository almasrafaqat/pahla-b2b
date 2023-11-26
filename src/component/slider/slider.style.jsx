import styled from "styled-components";
import { IpadTablets, Mobile } from "../../responsive";
import { Container } from "../../globalStyle";

export const SliderSection = styled.section``;

export const SliderContainer = styled(Container)`
   position: relative;
   margin-top: 2%;

  & .slider-image{
    width: 100%;
    max-height: 400px;
    border-radius: 30px;
    object-fit: cover;

    ${Mobile({ height: "300px", borderRadius: "10px" })}
    ${IpadTablets({ height: "320px", borderRadius: "15px"})}
   }
`;








