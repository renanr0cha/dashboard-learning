import { ButtonHTMLAttributes } from "react"
import { Container } from "./styles"


interface CourseProps {
  courseCardImg: any,
  title: string,
  content: string,
  buttonTitle: string,

}


 export function CourseCard({ courseCardImg, title, content, buttonTitle }:CourseProps) {
  return(
    <Container>
      <img src={courseCardImg} alt="" />
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <button>{buttonTitle}</button>
      </div>
    </Container>
  )
}