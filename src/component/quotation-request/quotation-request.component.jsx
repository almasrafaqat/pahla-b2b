import React from 'react'
import { QuotationBody, QuotationContainer, QuotationHeader, QuotationHeading, QuotationIconBox, QuotationSection } from './quotation.-request.style'
import { useGlobalState } from '../../context/GlobalStates';
import { QuotationIcon } from '../../globalStyle';
import QuotationForm from '../form/quotation-form';




const QuotationRequest = () => {
  const { AllProducts } = useGlobalState();

  return (
    <QuotationSection>
      <QuotationContainer>
        <QuotationHeader>
          <QuotationIconBox>
            <span>RF</span>
            <QuotationIcon style={{ fontSize: "10px!important" }} />
          </QuotationIconBox>
          <QuotationHeading>
            Request for Quotation
          </QuotationHeading>
          <p>
            Get customized quotes quickly
          </p>
        </QuotationHeader>
        <QuotationBody>
          <QuotationForm products={AllProducts} />
        </QuotationBody>
      </QuotationContainer>
    </QuotationSection>
  );
};

export default QuotationRequest