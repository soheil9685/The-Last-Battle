import { Col, Container, Row } from "react-bootstrap";
import "./Training.css"
import { Typewriter } from 'react-simple-typewriter'
import TrainingVideo from "../../assets/images/vlc-record-2026-05-29-03h34m19s-shinobi602.mp4-.mp4"

function Training() {
    return (
        <section className="py-5" id="Training">
            <h1 className="lalezar text-center" style={{ color: "#0F172A" }}>آموزش بازی</h1>
            <Container>
                <Row>
                    <Col className="col-12 d-flex flex-column justify-content-center align-items-center mt-4">
                        {/* <video className="rounded w-75" controls>
                            <source src={TrainingVideo} type="video/mp4"></source>
                        </video> */}
                        <div class="loader my-4">
                            <span></span>
                        </div>
                        <p className="estedad fs-3" style={{color : "#091413"}}>
                            <Typewriter
                                // cursor={true}
                                cursorBlinking={true}
                                typeSpeed={20}
                                loop={true}
                                words={["به زودی ..."]}
                            />
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Training;