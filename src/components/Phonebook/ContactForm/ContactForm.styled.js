import styled from 'styled-components';

export const PhonebookForm = styled.form`
  position: relative;
  display: flex;
  gap: 30px;
  padding: 10px;
  height: 20px;
  width: 615px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
`;

export const PhonebookInputButton = styled.input`
  position: absolute;
  top: 50%;
  left: 83%;
  transform: translateY(-50%);
  background-color: white;
  color: black;
  border-radius: 5px;
  border-color: transparent;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
  padding: 5px 10px;
`;
