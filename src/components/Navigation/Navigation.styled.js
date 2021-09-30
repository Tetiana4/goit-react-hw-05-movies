import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  margin: 0 20px;

  display: inline-block;

  font-size: 25px;
  text-transform: uppercase;
  text-decoration: none;
  font-variant: small-caps;
  color: #30011b;

  &.active {
    color: #eae5e8;
  }
`;

export const Container = styled.div`
  padding: 50px;

  background-color: #ea2128;
`;
