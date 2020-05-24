import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){
    return(
        <div className="fixed-bottom">
            <hr />
            <footer>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col sm={6}>
                            <ul id="footermenu">
                                <li><a class="bodylink" href="#">Linkedin</a></li>
                                <li><a class="bodylink" href="#">Twitter</a></li>
                                <li><a class="bodylink" href="#">Github</a></li>
                                <li><a class="bodylink" href="#">Facebook</a></li>
                            </ul> 
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default Footer;