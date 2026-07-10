import { Col, Container, Row } from "react-bootstrap"
import "./Hero.css"
import HeroImg from "../../assets/images/HeroImg.jpg"
import { Typewriter } from 'react-simple-typewriter'
import Button from 'react-bootstrap/Button';

function Hero() {
    return (
        <>
            <section className="py-5" id="Hero">
                <Container>
                    <Row>
                        <Col className="col-6 mt-5 d-flex flex-column align-items-start">
                            <h2 className="fs-1 lalezar">آخرین نبرد</h2>
                            <p className="fs-4 estedad">
                                <Typewriter
                                    cursor={true}
                                    cursorBlinking={true}
                                    loop={0}
                                    words={["به سوی نابودی اسراییل ..."]}
                                />
                            </p>
                            <div className="buttonContainer mt-5">
                                <Button className="rounded-pill px-3" variant="warning">
                                    <a className="estedad" href="">خرید محصول</a>
                                </Button>
                                <Button className="rounded-pill px-3 mx-2" variant="outline-warning">
                                    <a className="estedad" href="">آموزش</a>
                                </Button>
                            </div>
                        </Col>
                        <Col className="col-6">
                            <img className="heroImg img-fluid" src={HeroImg} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Hero;