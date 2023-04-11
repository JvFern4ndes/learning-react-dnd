import styled from 'styled-components';

export const Container = styled.div`
  background-color: #4285f4;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.backgroundColor};

  h1:hover {
    color: #ddd;
    cursor: pointer;
  }
`;
