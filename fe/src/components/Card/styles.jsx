import styled from 'styled-components';

const Container = styled.div`
  background: ${({ theme }) => theme.backgroundColor};
  width: 100%;
  padding: 0 0 16px 0;
  height: max-content;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  box-sizing: border-box;
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const Label = styled.div`
  background: red;
  width: 100%;
  height: 12px;
`;

export const ContentContainer = styled.div`
  background: ${({ theme }) => theme.backgroundColor};
  margin: 0 auto;
  padding: 16px 16px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  margin-bottom: 8px;
  padding: 8px;
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }

  strong, span {
    margin: 0 16px;
  }
`;

export default Container;
