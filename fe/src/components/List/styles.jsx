import styled from 'styled-components';

const Container = styled.div`
  background: #4285f4;
  margin: 0 32px 32px 0;
  padding: 16px;
  height: max-content;
  display: flex;
  width: 100%;
  justify-content: center;
  border-radius: 16px;
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.15);
  box-sizing: border-box;
`;

export const Header = styled.div`
  background: white;
  margin: 16px;
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

export default Container;
