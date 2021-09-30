import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Gallery = styled.ul`
  margin: 0 auto;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  list-style: none;
`;

export const Image = styled.img`
  margin: 5px;
  padding: 0;

  width: 300px;
  heigth: 100%;

  display: block;
  cursor: pointer;
`;

export const LinkStyle = styled(Link)`
  margin: 0;
  padding: 0;

  display: block;
`;
