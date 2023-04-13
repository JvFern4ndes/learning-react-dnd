import styled from 'styled-components';

const Container = styled.div`
  background: ${({ theme }) => theme.backgroundColor};
  width: 100%;
  padding: 0 0 16px 0;
  height: 120px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  border-radius: 16px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const Label = styled.div`
  background: red;
  width: 100%;
  height: 12px;
  flex-grow: 0;
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.backgroundColor};
  margin: 0 auto;
  padding: 16px 16px 0;
  width: 100%;
  flex-grow: 1;
`;

export default Container;
