import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 350px;
  gap: 10px;
  list-style: none;
  padding: 0px;
`;

const Item = styled.li`
  border: 1px solid black;
  :hover {
    background: green;
  }
`;

const LinkItem = styled(Link)`
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #212121;
  width: 100%;
  :hover {
    color: white;
  }
`;
export { List, Item, LinkItem };