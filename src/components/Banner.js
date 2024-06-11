
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';


export const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
           
              <div>
                <span className="tagline">Welcome</span>
                <h1>{`Hi I'm Adhith`}</h1>
                  <p> I am skilled in various programming languages, which allow me to tackle complex projects with ease. 
                 My passion for web development drives me to continually improve and stay up-to-date with the latest trends and technologies. 
                Thank you for visiting my website, and I look forward to working with you.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>
           
          </Col>
          <Col xs={12} md={6} xl={5}>
           
             
                <div>
                  <img src="bannerimg.png" alt="Header Img"/>
                </div>
         
          </Col>
        </Row>
      </Container>
    </section>
  )
}
