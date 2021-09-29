import styled from '@emotion/styled';
export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -10px;
  list-style: none;
  padding: 20px;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  width: 300px;
  background-color: #a1045a;
  border: rgba(0, 0, 0, 0.08) solid 1px;
  margin: 10px;
`;
export const Image = styled.img`
  min-height: 175px;
  object-fit: cover;
`;
