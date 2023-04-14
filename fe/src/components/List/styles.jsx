import styled from 'styled-components';

export const Container = styled.div`
  background: #4285f4;
  margin: 32px 16px;
  padding: 32px;
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 16px;
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.15);
  box-sizing: border-box;
`;

export const Header = styled.div`
  background: white;
  margin: 0 0 64px;
  padding: 16px;
  height: max-content;
  display: flex;
  width: 100%;
  justify-content: center;
  border-radius: 16px;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: 800;
  color: #4285f4;
`;
