import React from 'react'
import { QuotationBody, QuotationContainer, QuotationHeader, QuotationHeading, QuotationSection } from './quotation.-request.style'




const QuotationRequest = () => {


  return (
    <QuotationSection>
      <QuotationContainer>
        <QuotationHeader>
          <img src='./img/rfq.png' alt='rfq' width="50px" />
          <QuotationHeading>
            Request for Quotation
          </QuotationHeading>
          <p>
            Get customized quotes quickly
          </p>
        </QuotationHeader>
        <QuotationBody>


        </QuotationBody>
      </QuotationContainer>
    </QuotationSection>
  );
};

export default QuotationRequest