import styled from "styled-components";
import { Container } from "../../globalStyle";

export const QuotationSection = styled.section`
  background-color: ${({theme}) => theme.colors.border};
`;

export const QuotationContainer = styled(Container)`
  padding: 20px;
`;
export const QuotationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const QuotationHeading = styled.h1``;

export const QuotationBody = styled.div`
  padding: 50px;
`;


