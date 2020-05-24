import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CloudConf from './img/cloudconf_onair.png';

function Home(){
    return(
        <Container>
            <Row className="justify-content-md-center">
                <Col sm={8}>
                    <h3>Full Stack Developer always looking for new challenges</h3>

                    <br />

                    <a class="bodylink" href="#">Most recent post</a>
                    <p>24/05/2020</p>

                    <a class="bodylink" href="#">Another recent post</a>
                    <p>24/05/2020</p>
                </Col>
                <Col sm={4}>
                    <h3>Next events:</h3>
                    <br />
                    <p>
                        <a href="https://2020.cloudconf.it/onair.html"><img src={CloudConf} alt={"CloudConf"}/></a>                        
                    </p>                                                     
                </Col>
            </Row>
        </Container>
    );
}

export default Home;