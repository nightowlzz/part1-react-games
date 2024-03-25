import styled from "styled-components";

// Layout page
export const LayoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  margin: 0 auto;
  width: 650px;
  min-height: 100vh;
  background-color: #191f2c;
`;

export const Title = styled.h1`
  flex: 1;
  text-align: center;
  a {
    font-size: 32px;
    font-weight: bold;
  }
`;
