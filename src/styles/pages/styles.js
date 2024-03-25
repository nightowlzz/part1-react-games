import styled from "styled-components";
import { Dflex, DflexCenter } from "../common";

// Layout page
export const LayoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  margin: 0 auto;
  width: 600px;
  height: 100vh;
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

// Home page
export const HomeWrap = styled(DflexCenter)`
  flex: 11;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  padding: 50px 20px;
  border: 4px dashed #444;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    transform: translateX(-50%);
    border-right: 4px dashed #444;
  }
  > a {
    display: block;
    padding: 40px 0;
    background-color: #b14545;
    border-radius: 30px;
  }
`;
export const Games = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  text-align: center;
  .img {
    &__dice {
      height: 100px;
    }
    &__hands {
      width: 50px;
      padding: 25px 0;
    }
  }
`;
export const ImgCenter = styled(Dflex)`
  padding: 25px 0;
  justify-content: center;
`;
