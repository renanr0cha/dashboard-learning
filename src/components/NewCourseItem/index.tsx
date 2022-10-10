import { Container } from "./styles"


interface CourseProps {
  courseImg: any,
  title: string,
  content: string,
  pillTextDuration: string,
  pillTextType: string,

}


export function NewCourseItem({ courseImg, title, content,pillTextDuration, pillTextType }:CourseProps) {
  return(
    <Container>
      <img src={courseImg} alt="" />
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="pills">
          <button>{pillTextDuration}</button>
          <button>{pillTextType}</button>
        </div>
      </div>
    </Container>
  )
}