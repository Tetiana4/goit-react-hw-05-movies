import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: #dca4c3;
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
  color: #a1045a;
  text-decoration: none;
  &:hover {
    text-decoration: underline dotted;
  }
`;
