import { Col, Container, Row } from "react-bootstrap";
import "./Explanation.css"
import boardGame from "../../assets/images/Playing board game.jpg"
import { Brain, Check, Dices, Info, ListSortDescending, Target, Timer, User, Users } from "lucide-react";

function Explanation() {

    let data = [
        {
            id: 1,
            icon: Users,
            content: "تعداد بازیکن: 3 یا 4 بازیکن"
        },
        {
            id: 2,
            icon: Target,
            content: "سبک بازی: کارتی - جنگی"
        },
        {
            id: 3,
            icon: User,
            content: "رده سنی 11 سال به بالا"
        },
        {
            id: 4,
            icon: Timer,
            content: "مدت زمان: 30 دقیقه"
        },
        {
            id: 5,
            icon: Brain,
            content: "درجه سختی: کژوال"
        }
    ]

    return (
        <>
            <section id="Explanation">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0F172A" fill-opacity="1" d="M0,320L48,304C96,288,192,256,288,240C384,224,480,224,576,240C672,256,768,288,864,277.3C960,267,1056,213,1152,176C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                <Container>
                    <Row className="gy-4">
                        <h1 className="lalezar text-center mb-5">معرفی بازی</h1>
                        <Col className="col-12 col-lg-6 text-center">
                            <img className="boardGame w-75" src={boardGame} alt="" />
                        </Col>
                        <Col className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                            <div className="box estedad p-4">
                                <h3 className="lalezar mb-3">اطلاعات بازی</h3>
                                {data.map(item => {
                                    const Icon = item.icon;

                                    return (
                                        <div key={item.id} className="item my-2">
                                            <Icon /> {item.content}
                                        </div>
                                    )
                                })}
                                <h3 className="lalezar mt-5 mb-3">محتویات جعبه</h3>
                                <div className="item">
                                    <Dices /> 72 عدد کارت
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F8F5E9" fill-opacity="1" d="M0,320L48,282.7C96,245,192,171,288,144C384,117,480,139,576,154.7C672,171,768,181,864,197.3C960,213,1056,235,1152,213.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </section>
        </>
    )
}

export default Explanation;