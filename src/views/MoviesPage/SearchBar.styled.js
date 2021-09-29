import styled from '@emotion/styled';

export const SearchForm = styled.div`
  padding: 12px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  min-height: 64px;
  color: #fff;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Input = styled.input`
  padding: 0 4px;
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
