import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  margin: 0 20px;
  color: #30011b;
  font-size: 25px;
  text-transform: uppercase;
  font-variant: small-caps;
  text-decoration: none;

  &.active {
    color: #eae5e8;
  }
`;
export const Container = styled.div`
  background-color: #a1045a;
  padding: 50px;
`;
