import { Col, Container, Row } from "react-bootstrap";
import "./Purchase.css"
import telegramIcon from "../../assets/images/telegram.svg"
import baleIcon from "../../assets/images/Bale.png"
import rubikaIcon from "../../assets/images/rubika.png"
import eittaIcon from "../../assets/images/eitta.png"
import boardGame from "../../assets/images/Board Game.jpg"

function Purchase() {

    let icons = [
        {
            index: 1,
            icon: telegramIcon,
            url: "https://web.telegram.org/a/#8748798332"
        },
        {
            index: 2,
            icon: baleIcon,
            url: "https://web.bale.ai/chat/search?uid=1747676464"
        },
        {
            index: 3,
            icon: rubikaIcon,
            url: "https://web.rubika.ir/#c=u0KSm5s03eb9b1024a6cda8996f9475c"
        },
        {
            index: 4,
            icon: eittaIcon,
            url: ""
        }
    ]

    return (
        <section className="pt-5" id="Purchase">
            <h1 className="lalezar text-center">خرید بازی</h1>
            <Container>
                <Row className="pt-5 gy-4">
                    <Col className="col-12 col-lg-6 text-center">
                        <div className="qoute p-2">
                            <h6 className="estedad mb-3">برای عضویت در کانال های آخرین نبرد روی لینک های زیر کلیک کنید.</h6>
                            <span className="mx-2">
                                <a href="https://web.telegram.org/a/#-1003967370535">
                                    <img width={"30px"} src={telegramIcon} alt="تلگرام" />
                                </a>
                            </span>
                            <span className="mx-2">
                                <a href="https://web.bale.ai/chat/search?uid=5521739207">
                                    <img width={"30px"} src={baleIcon} alt="تلگرام" />
                                </a>
                            </span>
                            <h6 className="estedad mb-3 mt-4">برای ثبت سفارش به پشتیبانی در پیامرسان های زیر پیام دهید.</h6>
                            <div className="iconContainer">
                                {
                                    icons.map(icon => (
                                        <span className="mx-2" key={icon.index}>
                                            <a href={icon.url}>
                                                <img width={"30px"} src={icon.icon} alt="تلگرام" />
                                            </a>
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    </Col>
                    <Col className="col-12 col-lg-6 text-center">
                        <img className="w-75 board-Game" src={boardGame} alt="محصول" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Purchase;