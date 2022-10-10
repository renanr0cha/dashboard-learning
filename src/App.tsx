import { Container, Header, Banner, Menu, MenuButton, AvailableCertificates, ContinueLearning, LastCertificates, Ranking, RecentCertificate } from "./styles"
import profilePic from "./assets/user-picture.png"
import courseImg1 from "./assets/course-1.png"
import courseImg2 from "./assets/course-2.png"
import courseImg3 from "./assets/course-3.png"
import hamburguerMenu from "./assets/hamburguer-menu.svg"
import { NewCourseItem } from "./components/NewCourseItem"


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
                
              </div>
            
            </AvailableCertificates>
              <ContinueLearning>
                <h1>Continue your recent learning</h1> 

              </ContinueLearning>
              <LastCertificates>
                <h1>Last certificates seen</h1>
              </LastCertificates>
              <Ranking>
              <h1>Ranking</h1>
              </Ranking>

              <RecentCertificate>
                <h1>Most recent award</h1>
              </RecentCertificate>
      </Container>
  )
}

export default App
