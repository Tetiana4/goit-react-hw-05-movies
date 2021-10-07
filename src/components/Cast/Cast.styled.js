import styled from '@emotion/styled';

export const Container = styled.ul`
  margin: 0 -10px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
`;

export const Item = styled.li`
  margin: 10px;
  padding: 5px;

  width: 200px;
  height: 300px;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: #ea2128;
  border: rgba(0, 0, 0, 0.08) solid 1px;
`;

export const Image = styled.img`
  width: 140px;
  height: 180px;
  object-fit: cover;
`;
