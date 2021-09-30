import styled from '@emotion/styled';

export const SearchForm = styled.div`
  padding: 12px 24px;

  min-height: 64px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
`;

export const Form = styled.form`
  max-width: 500px;

  display: flex;
`;

export const Input = styled.input`
  padding: 0 4px;

  display: inline-block;

  font: inherit;
  font-size: 20px;
  border: 2px solid #ea2128;
  outline: none;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  width: 48px;
  height: 48px;

  display: inline-block;

  background-color: #ea2128;
  border: 0;
  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
