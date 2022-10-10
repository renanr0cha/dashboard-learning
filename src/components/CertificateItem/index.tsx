import { Container } from "./styles"


interface CourseProps {
  courseImg: any,
  title: string,
  content: string,
  awardedDate: string,

}


export function CertificateItem({ courseImg, title, content, awardedDate }:CourseProps) {
  return(
    <Container>
      <img src={courseImg} alt="" />
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="pills">
          <button>{awardedDate}</button>
        </div>
      </div>
    </Container>
  )
}