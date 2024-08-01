import styled from 'styled-components';

export const LoginContainer = styled.div`
  padding: 1rem;
  margin: 1rem auto;
  max-width: 50%;

  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`;

export const FormControlWrapper = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 4px;
    font-size: 16px;
  }

  .error {
    margin-top: 0.5rem;
  }

  input {
    padding: 4px;
    width: 100%;
  }
`;
