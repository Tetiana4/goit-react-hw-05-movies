import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
`;
export const NavLinkStyle = styled(NavLink)`
  margin: 0;
  color: #dca4c3;
  text-decoration: none;
`;
export const Item = styled.li`
  width: 120px;
  height: 50px;
  background-color: #a1045a;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  padding: 10px;
`;
