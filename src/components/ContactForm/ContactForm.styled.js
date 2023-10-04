import { Form, ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
    border-radius: 0.75rem;
   background-color: rgba(17, 24, 39, 0.9);
    padding: 2rem;
    color: rgba(243, 244, 246, 1);
`;

export const StyledForm = styled(Form)`
 margin-top: 1.5rem;
`;

export const Label = styled.label`
display: flex;
flex-direction:column;
gap: 10px;
margin-bottom:20px;
`;

export const Button = styled.button`
 display: block;
  width: 100%;
  background-color: rgba(167, 139, 250, 1);
  padding: 0.75rem;
  text-align: center;
  color: rgba(17, 24, 39, 1);
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  &:hover
 {
    color: var(--mien-title-color);
    background-color: rgba(167, 139, 250, 0.6);
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
}
`;

export const ErrorMsg = styled(ErrorMessage)`
color: red;
`;

export const Input = styled(Field)`
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid rgba(55, 65, 81, 1);
  outline: 0;
  background-color: rgba(17, 24, 39, 1);
  padding: 0.75rem 1rem;
  color: rgba(243, 244, 246, 1);
`;
