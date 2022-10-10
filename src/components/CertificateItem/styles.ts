import styled from "styled-components";

export const Container = styled.div`
  width: 24.4rem;
  height: 10rem;
  background: #FFFFFF;
  display: flex;
  gap: 1.2rem;
  padding: 8px 12px;
  border-radius: 4px;
  align-items: center;

  h2 {
    font-size: 1.4rem;
    font-weight: 600;
    line-height: normal;
  }

  p {
    width: 13.2rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: normal;
  }

  img {
    width: 72rem;
    height: 5.9rem;
    border-radius: 2px;
  }

  div.pills {
    margin-top: 0.2rem;
    display: flex;
    gap: 0.8rem;
    justify-content: flex-end;
  }

  button {
    cursor: default;
    padding: 1px 4px 1px;
    font-size: 0.8rem;
    align-self: flex-end;
  }
`