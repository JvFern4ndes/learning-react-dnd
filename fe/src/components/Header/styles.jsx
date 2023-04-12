import styled from 'styled-components';

export const Container = styled.div`
  background-color: #4285f4;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.15);
`;

export const Content = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.backgroundColor};

  h1:hover {
    color: #ddd;
    cursor: pointer;
  }
`;
