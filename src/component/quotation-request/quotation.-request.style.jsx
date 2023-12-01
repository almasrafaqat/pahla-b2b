import styled from "styled-components";
import { Container } from "../../globalStyle";

export const QuotationSection = styled.section`
  /* background-color: ${({ theme }) => theme.colors.white}; */
`;

export const QuotationContainer = styled(Container)`
  padding: 20px;
`;
export const QuotationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const QuotationIconBox = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  font-weight: 700;
  border-radius: 20px;
`;

export const QuotationHeading = styled.h1``;

export const QuotationBody = styled.div`
  padding: 10px;
`;


