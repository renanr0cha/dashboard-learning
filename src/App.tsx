import { Container, Header, Banner, Menu, MenuButton, AvailableCertificates, ContinueLearning, LastCertificates, Ranking, RecentCertificate } from "./styles"

import profilePic from "./assets/user-picture.png"
import courseImg1 from "./assets/course-1.png"
import userImg1 from "./assets/user-1.png"
import userImg2 from "./assets/user-2.png"
import userImg3 from "./assets/user-3.png"
import userImg4 from "./assets/user-4.png"
import userImg5 from "./assets/user-5.png"
import arrowDown from "./assets/arrow-down.png"
import courseImg2 from "./assets/course-2.png"
import courseImg3 from "./assets/course-3.png"
import courseCardImg1 from "./assets/video-miniature-1.png"
import hamburguerMenu from "./assets/hamburguer-menu.svg"
import certificateIcon from "./assets/certificate-icon.png"

import { NewCourseItem } from "./components/NewCourseItem"
import { CourseCard } from "./components/CourseCard"
import { RankingUser } from "./components/RankingUser"
import { CertificateItem } from "./components/CertificateItem"


function App() {

  return (
      <Container className="App">
          <Header>
            <Banner />

            <Menu>
              <div>
                <p>Welcome, Ben </p>
                <img src={profilePic} alt="" />
              </div>
              <MenuButton>
                <p>Menu</p>
                <img src={hamburguerMenu} alt="" />
              </MenuButton>
            </Menu>

          </Header>
          <div>
            
          </div>
            <AvailableCertificates>
              <h1>Available Certificates</h1>
              <div className="course-items">
                <NewCourseItem
                  courseImg={courseImg1}
                  title="Self-knowledge"
                  content="Learn techniques to know yourself and use it at your favor at the job."
                  pillTextDuration="8H"
                  pillTextType="Essential"
                />
                <NewCourseItem
                  courseImg={courseImg2}
                  title="Carreer planning"
                  content="How do you plan your 
                  career? Learn this and more
                  in this course."
                  pillTextDuration="6H"
                  pillTextType="Essential"
                />
                <NewCourseItem
                  courseImg={courseImg3}
                  title="Communication"
                  content="Learn how to comunicate 
                  with other colleagues. Be
                  more conversational."
                  pillTextDuration="8H"
                  pillTextType="Essential"
                />
                <NewCourseItem
                  courseImg={courseImg1}
                  title="Self-knowledge"
                  content="Learn techniques to know yourself and use it at your favor at the job."
                  pillTextDuration="8H"
                  pillTextType="Essential"
                />
                
              </div>
            
            </AvailableCertificates>
            <div className="middle">
            <ContinueLearning>
                <h1>Continue your recent learning</h1> 
                <div>
                  <CourseCard
                  courseCardImg={courseCardImg1}
                  title="Sales training"
                  content="Manage a production it’s not an easy task, you need a wide set of skills in ord..."
                  buttonTitle="Continue Learning"
                  />
                </div>
              </ContinueLearning>
              <LastCertificates>
                <h1>Last certificates seen</h1>
                <div className="certificate-items">
                  <CourseCard
                  courseCardImg={courseCardImg1}
                  title="Sales training"
                  content="Manage a production it’s not an easy task, you need a wide set of skills in ord..."
                  buttonTitle="Continue Learning"
                  />
                  <CourseCard
                  courseCardImg={courseCardImg1}
                  title="Sales training"
                  content="Manage a production it’s not an easy task, you need a wide set of skills in ord..."
                  buttonTitle="Continue Learning"
                  />
                </div>
              </LastCertificates>
            </div>
              <div className="left">
              <Ranking>
              <h1>Ranking</h1>
              <div className="ranking">
                <RankingUser
                  userImg={userImg1}
                  position="1st:"
                  name="John Stuart"
                  points="faltam 102 pontos"
                />
                <RankingUser
                  userImg={userImg2}
                  position="2nd:"
                  name="Dinah E."
                  points="faltam 73 pontos"
                />
                <RankingUser
                  userImg={userImg3}
                  position="3rd:"
                  name="Lily Audrin"
                  points="faltam 29 pontos"
                />
                <RankingUser
                  userImg={profilePic}
                  position="You are"
                  name="4th of 73"
                  points="402 pontos"
                />
                <RankingUser
                  userImg={userImg4}
                  position="5th:"
                  name="Larry M."
                  points="372 pontos"
                />
                <RankingUser
                  userImg={userImg5}
                  position="6th:"
                  name="Lara C."
                  points="342 pontos"
                />
                <div>
                  <img src={arrowDown} alt="" />
                </div>
              </div>
              </Ranking>

              <RecentCertificate>
                <h1>Most recent award</h1>
                <CertificateItem
                courseImg={certificateIcon}
                title="Line management"
                content="Learn techniques to know yourself and use it at your favor at the job."
                awardedDate="Awarded in 12/09/2022"
                />
              </RecentCertificate>
              </div>
              
      </Container>
  )
}

export default App
