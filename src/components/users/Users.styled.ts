import styled from 'styled-components';

export const UsersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  table,
  th,
  td {
    border: 1px solid;
    border-collapse: collapse;
  }

  th {
    padding: 1rem;
  }

  td {
    padding: 1rem;
    width: 200px;
    text-align: center;

    &.img {
      width: 100px;
    }
  }
`;
