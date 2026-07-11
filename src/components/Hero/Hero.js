import { Col, Container, Row } from "react-bootstrap"
import "./Hero.css"
import HeroImg from "../../assets/images/HeroImg.jpg"
import { Typewriter } from 'react-simple-typewriter'
import Button from 'react-bootstrap/Button';

function Hero() {
    return (
        <>
            <section className="py-5" id="Hero">
                <Container className="pt-5">
                    <Row className="gy-5" >
                        <Col className="col-12 col-lg-6 mt-5 pt-4 d-flex flex-column align-items-start">
                            <h2 className="fs-1 lalezar">آخرین نبرد</h2>
                            <p className="fs-5 estedad">
                                <Typewriter
                                    cursor={true}
                                    cursorBlinking={true}
                                    typeSpeed = {50}
                                    words={["پس از دوران تاریک قتل و اشغالگری رژیم صهیونیستی سرانجام مردم منطقه و محور مقاومت به طور بی‌سابقه ای با یکدیگر متحد شده اند تا کار این رژیم را یکسره کنند. فرماندهی این سپاه بزرگ که از اکثر کشورهای منطقه در آن به گونه ای حضور دارند، به شما سپرده شده است. مقصد نهایی شما قدس است."]}
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
                        <Col className="col-12 col-lg-6">
                            <img className="heroImg img-fluid" src={HeroImg} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Hero;