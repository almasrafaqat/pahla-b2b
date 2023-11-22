import styled from "styled-components";
import { IpadTablets, Mobile } from "../../responsive";

export const SliderSection = styled.section``;

export const SliderContainer = styled.div`
   max-width: 80%;
   position: relative;
   margin: 0 auto;
   margin-top: 4%;
   width: 100%;

   ${Mobile({ maxWidth: "95%" })}
   ${IpadTablets({ maxWidth: "95%"})}

  
   & .slider-image{
    width: 100%;
    max-height: 400px;
    border-radius: 30px;
    object-fit: cover;

    ${Mobile({ height: "300px", borderRadius: "10px" })}
    ${IpadTablets({ height: "320px", borderRadius: "15px"})}
   }
`;








