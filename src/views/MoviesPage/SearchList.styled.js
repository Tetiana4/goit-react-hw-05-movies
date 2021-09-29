import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  list-style: none;
  padding: 0;
`;
export const Image = styled.img`
  display: block;
  cursor: pointer;
  padding: 0;
  width: 300px;
  heigth: 100%;
  margin: 5px;
`;
export const LinkStyle = styled(Link)`
  padding: 0;
  margin: 0;
  display: block;
`;
