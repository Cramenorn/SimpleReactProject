import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About(){
    return(
        <Container>
            <Row className="justify-content-md-center">
                <Col sm={8}>
                    <h2>This is what I do!</h2>
                    <p>
                        Hi everyone, my name is Davide Dolce. I am an IT Consultant, I worked with different technologies during my job career like .NET Framework, .NET Core, Javascript etc.
                    </p>

                    <p>
                        I got a Diploma in Computer Science from Giuseppe Peano (Italy) high school and a Diploma in Integrated Back-End Services, post-high school course from ITS ICT Piemonte (Italy) with a score of 84/100.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;