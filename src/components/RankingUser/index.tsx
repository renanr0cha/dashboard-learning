import { Container } from "./styles"


interface UserProps {
  userImg: any,
  position: string,
  name: string,
  points: string,
}


export function RankingUser({ userImg, position, name, points }:UserProps) {
  return(
    <Container>
      <img src={userImg} alt="" />
      <div>
        <h2>{position} {name}</h2>
        <p>{points}</p>
      </div>
    </Container>
  )
}