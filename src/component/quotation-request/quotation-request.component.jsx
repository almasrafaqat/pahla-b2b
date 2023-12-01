import React from 'react'
import { QuotationBody, QuotationContainer, QuotationHeader, QuotationHeading, QuotationSection } from './quotation.-request.style'
import FormComponent from '../form/form.component';
import { useGlobalState } from '../../context/GlobalStates';




const QuotationRequest = () => {
  const { AllProducts } = useGlobalState();

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
          <FormComponent products={AllProducts} />
        </QuotationBody>
      </QuotationContainer>
    </QuotationSection>
  );
};

export default QuotationRequest