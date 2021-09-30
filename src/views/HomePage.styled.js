import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 0;
  padding: 50px;
`;
export const List = styled.ul`
  list-style: none;
  font-size: 25px;
  line-height: 1.5;
  margin: 0;
`;
export const LinkStyle = styled(Link)`
  color: #ea2128;
  text-decoration: none;
  &:hover {
    color: black;
    text-decoration: underline dotted;
  }
`;
