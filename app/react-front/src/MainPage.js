import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';


function MainPage() {

    return (
        <>
            <section className="bg1">
                <Container>
                    <Row>
                        <Col sm={6}>
                            <h2 className="text-light m-3"><b>Brainstorming</b> for desired perfect Usability</h2>
                            <p className="text-light m-3">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                            <Button className="m-3" variant="light"><Link to={`/user`}>View Stats</Link></Button>
                        </Col>
                        <Col sm={6}><img src="./assets/mobile.png"></img></Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <h2 >Why <b>small business ownerslove</b> AppCo?</h2>
                            <p>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col>
                            <Card className="align-items-center p-3">
                                <Card.Img className="w-50" variant="top" src="./assets/Group 13.png" />
                                <Card.Title>Clean Design</Card.Title>
                                <Card.Text>
                                    Increase sales by showing true dynamics of your website.
                            </Card.Text>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="align-items-center p-3">
                                <Card.Img className="w-50" variant="top" src="./assets/Group 14.png" />
                                <Card.Title>Secure Data</Card.Title>
                                <Card.Text>
                                    Build your online store’s trust using Social Proof & Urgency.
                            </Card.Text>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="align-items-center p-3">
                                <Card.Img className="w-50" variant="top" src="./assets/Group 15.png" />
                                <Card.Title>Retina Ready</Card.Title>
                                <Card.Text>
                                    Realize importance of social proof in customer’s purchase decision.
                            </Card.Text>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bgc">
                <Container>
                    <Row >
                        <Col sm={6}>
                            <h2 className="text-light"><b>Start Managing your apps business, more faster</b></h2>
                            <p className="text-light">Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively.</p>
                            <Button variant="light">Learn more</Button>
                        </Col>
                        <Col sm={6}><img className="w-100" src="./assets/macbook.png"></img></Col>
                    </Row>

                </Container>
            </section>
            <section className="bg2 m-5">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h2 ><b>Afforadble Pricing and Packages</b>
                                <p>choose your best one</p></h2>
                            <p>Monotonectally grow strategic process improvements vis-a-vis integrated resources.</p>
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <Card className="align-items-center p-3">
                                <Card.Title>Basic</Card.Title>
                                <Card.Img className="w-50" src="./assets/undraw_online_test_gba7 1.png" />
                                <Card.Title>$29</Card.Title>
                                <Card.Text className="align-text-center">Push Notifications</Card.Text>
                                <Card.Text className="align-text-center"> Data Transfer</Card.Text>
                                <Card.Text className="align-text-center"> SQL Database</Card.Text>
                                <Card.Text className="align-text-center"> Search & SEO Analytics</Card.Text>
                                <Card.Text className="align-text-center"> 24/7 Phone Support</Card.Text>
                                <Card.Text className="align-text-center"> 2 months technical support</Card.Text>
                                <Card.Text className="align-text-center"> 2+ profitable keyword</Card.Text>
                                <Button className="bgc">Purchase now</Button>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="align-items-center p-3">
                                <Card.Title>Standard</Card.Title>
                                <Card.Img className="w-50" src="./assets/undraw_file_sync_ot38 1.png" />
                                <Card.Title>$149</Card.Title>
                                <Card.Text className="align-text-center">Push Notifications</Card.Text>
                                <Card.Text className="align-text-center"> Data Transfer</Card.Text>
                                <Card.Text className="align-text-center"> SQL Database</Card.Text>
                                <Card.Text className="align-text-center"> Search & SEO Analytics</Card.Text>
                                <Card.Text className="align-text-center"> 24/7 Phone Support</Card.Text>
                                <Card.Text className="align-text-center"> 2 months technical support</Card.Text>
                                <Card.Text className="align-text-center"> 2+ profitable keyword</Card.Text>
                                <Button className="bgc">Purchase now</Button>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="align-items-center p-3">
                                <Card.Title>Unlimited</Card.Title>
                                <Card.Img className="w-50" src="./assets/undraw_quiz_nlyh 1.png" />
                                <Card.Title>$39</Card.Title>
                                <Card.Text className="align-text-center">Push Notifications</Card.Text>
                                <Card.Text className="align-text-center"> Data Transfer</Card.Text>
                                <Card.Text className="align-text-center"> SQL Database</Card.Text>
                                <Card.Text className="align-text-center"> Search & SEO Analytics</Card.Text>
                                <Card.Text className="align-text-center"> 24/7 Phone Support</Card.Text>
                                <Card.Text className="align-text-center"> 2 months technical support</Card.Text>
                                <Card.Text className="align-text-center"> 2+ profitable keyword</Card.Text>
                                <Button className="bgc">Purchase now</Button>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg3">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <p>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </Col>
                    </Row>
                    <Form className="p-5">
                        <Row className="justify-content-md-center">
                            <Col className="p-0" sm="4">
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col className="p-0" sm="2">
                                <Button className="bgc">Subscribe</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </section>
        </>
    );
}

export default MainPage;