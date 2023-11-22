import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  margin-right: ${(props) => (props.hasButton ? '1rem' : '5rem')};
  border: none;
  border-radius: 25px;
  outline: none;
  font-size: 0.8rem;

`;