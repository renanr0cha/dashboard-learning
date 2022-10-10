import styled from "styled-components";
import { theme } from "./styles/theme";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 24.4rem auto 24.4rem;
  grid-template-rows: 13rem 4.5rem auto auto;

  grid-template-areas: 
  "banner banner banner"
  "menu menu menu"
  "courses continue-course ranking"
  "courses my-courses-list certificates";
`

export const Header = styled.header`
  width: 100vw;
  height: 18rem;
  display: flex;
  flex-direction: column;
`

export const Banner = styled.div`
  grid-area: banner;
  height: 13rem;
  background-image: url('https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1980&q=80');
  background-size: auto;
  background-repeat: no-repeat;
`

export const Menu = styled.div`
  grid-area: menu;
  margin-top: 0.8rem;
  margin-inline: 12rem;
  grid-area: menu;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;
  }
`

export const MenuButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;
    background: #FFFFFF;
    color: ${theme.colors.main};
    border-radius: 32px;
`

export const AvailableCertificates = styled.div`
  grid-area: courses;
  padding-left: 12rem;
  h1 {
    width: 24.4rem;
    margin-top: 1.5rem;
    margin-bottom: 1.2rem;
    font-size: 1.8rem;
    line-height: 150%;
    font-weight: 700;
  }

  div.course-items {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`

export const ContinueLearning = styled.div`
  grid-area: continue-course;
  
  h1 {
    width: 24.4rem;
    margin-top: 1.5rem;
    margin-bottom: 1.2rem;
    
    font-size: 1.8rem;
    line-height: 150%;
    font-weight: 700;
  }
`

export const LastCertificates = styled.div`
  grid-area: my-course-list;
  h1 {
    width: 24.4rem;
    margin-top: 1.5rem;
    margin-bottom: 1.2rem;
    
    font-size: 1.8rem;
    line-height: 150%;
    font-weight: 700;
  }
`


export const Ranking = styled.div`
  grid-area: ranking;
  h1 {
    width: 24.4rem;
    margin-top: 1.5rem;
    margin-bottom: 1.2rem;
    
    font-size: 1.8rem;
    line-height: 150%;
    font-weight: 700;
  }
`

export const RecentCertificate = styled.div`
  grid-area: certificates;
  h1 {
    width: 24.4rem;
    margin-top: 1.5rem;
    margin-bottom: 1.2rem;
    
    font-size: 1.8rem;
    line-height: 150%;
    font-weight: 700;
  }
`