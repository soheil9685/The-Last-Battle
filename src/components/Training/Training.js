import { Col, Container, Row } from "react-bootstrap";
import "./Training.css"
import TrainingVideo from "../../assets/images/vlc-record-2026-05-29-03h34m19s-shinobi602.mp4-.mp4"

function Training() {
    return (
        <section id="Training">
            <h1 className="lalezar text-center" style={{ color: "#0F172A" }}>آموزش بازی</h1>
            <Container>
                <Row>
                    <Col className="col-12 text-center mt-4">
                        <video className="rounded w-75" controls>
                            <source src={TrainingVideo} type="video/mp4"></source>
                        </video>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Training;