import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 0;

  display: flex;

  list-style: none;
`;

export const NavLinkStyle = styled(NavLink)`
  margin: 0;

  color: black;
  text-transform: uppercase;
  text-decoration: none;
`;

export const Item = styled.li`
  margin-left: 10px;
  padding: 10px;

  width: 120px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ea2128;
`;
export const Button = styled.button`
  margin: 10px 50px 0;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 10px;
  background-color: red;
`;
