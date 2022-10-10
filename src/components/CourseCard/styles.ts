import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  width: 45.3rem;
  height: 14.4rem;
  background: #FFFFFF;
  display: flex;
  gap: 2.4rem;
  padding: 18px 24px;
  border-radius: 4px;
  align-items: center;

  h2 {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 6px;
  }

  p {
    width: 24.3rem;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 6px;
  }

  img {
    width: 15rem;
    height: 11rem;
    border-radius: 2px;
  }
  div {
    
  }

  button {
    cursor: pointer;
    padding: 6px 8px;
    font-size: 1.4rem;
    justify-self: end;
    align-self: flex-end;
  }
`