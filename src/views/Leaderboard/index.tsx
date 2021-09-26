import React, { useState } from 'react'
import { Row, Col, Container, Card, Form, ListGroup } from 'react-bootstrap'
import Avatar from '../../assets/avatar.png'


export default function Leaderboard() {

    const [item] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9])
    return (
        <>
            <Container className="mt-4 mb-4 vh100">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <Card style={{ width: '100%', height: '1024px', overflow: 'auto' }}>
                            <Row className="mt-3 mx-2">
                                <Col xs={1}>
                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M33.5783 12.2984C33.4735 11.9898 33.2807 11.7187 33.0236 11.5185C32.7665 11.3182 32.4564 11.1977 32.1316 11.1717L22.63 10.4167L18.5183 1.31502C18.3874 1.02188 18.1744 0.772893 17.905 0.59812C17.6357 0.423347 17.3216 0.330255 17.0005 0.330078C16.6794 0.329902 16.3652 0.42265 16.0957 0.597127C15.8262 0.771605 15.6129 1.02036 15.4816 1.31336L11.37 10.4167L1.8683 11.1717C1.54905 11.197 1.24386 11.3137 0.989221 11.5079C0.734582 11.7021 0.541284 11.9656 0.432451 12.2667C0.323618 12.5679 0.303859 12.8941 0.375537 13.2062C0.447216 13.5183 0.607297 13.8032 0.836629 14.0267L7.8583 20.8717L5.37496 31.625C5.29956 31.9505 5.32373 32.2912 5.44433 32.6028C5.56493 32.9144 5.7764 33.1825 6.0513 33.3724C6.3262 33.5623 6.65183 33.6652 6.98594 33.6678C7.32004 33.6703 7.6472 33.5724 7.92496 33.3867L17 27.3367L26.075 33.3867C26.3589 33.5752 26.6937 33.6722 27.0343 33.6647C27.375 33.6573 27.7053 33.5457 27.9806 33.3449C28.256 33.1441 28.4633 32.8639 28.5746 32.5418C28.6859 32.2197 28.6959 31.8713 28.6033 31.5434L25.555 20.8767L33.115 14.0734C33.61 13.6267 33.7916 12.93 33.5783 12.2984Z" fill="#D554A9" />
                                    </svg>
                                </Col>
                                <Col xs={6}>
                                    <h3 className="text">จัดอันดับ</h3>
                                </Col>
                                <Col xs={5}>
                                    <Form.Select>
                                        <option>ทั้งหมด</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                            </Row>


                            <Card.Body>
                                <hr className="mx-2 mt-3" />
                                <Card.Text>

                                    {item.map((value) => {
                                        return (
                                            <>
                                                <div className="content">
                                                    <h1>{value}</h1>
                                                    <div className="author">
                                                        <img className="author__avatar" src={Avatar} alt="Avatar" />
                                                        <div>
                                                            <div className="text">Mammos</div>
                                                            <div className="sub-text">สำเร็จการศึกษา</div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <hr className="mx-3 mt-3" />
                                            </>
                                        )
                                    })}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={6}>
                        <Card style={{ width: '100%', height: '1024px' }}>
                            <Card.Body>
                                <Card.Text>
                                    <div className="author">
                                        <img className="author__avatar" src={Avatar} alt="Avatar" />
                                        <div>
                                            <div className="text text-dark">ระดับอนุบาล</div>
                                            <div className="sub-text color-font-main">ระดับเริ่มต้น</div>
                                        </div>
                                    </div>

                                    <div className="author mt-1">
                                        <img className="author__avatar" src={Avatar} alt="Avatar" />
                                        <div>
                                            <div className="text text-dark">ระดับประถม</div>
                                            <div className="sub-text color-font-main">1-5 คะแนน จากแอดมินกามเทพ</div>
                                        </div>
                                    </div>

                                    <div className="author mt-1">
                                        <img className="author__avatar" src={Avatar} alt="Avatar" />
                                        <div>
                                            <div className="text text-dark">ระดับมัธยมต้น</div>
                                            <div className="sub-text color-font-main">6-10 คะแนน จากแอดมินกามเทพ</div>
                                        </div>
                                    </div>

                                    <div className="author mt-1">
                                        <img className="author__avatar" src={Avatar} alt="Avatar" />
                                        <div>
                                            <div className="text text-dark">ระดับมัธยมปลาย</div>
                                            <div className="sub-text color-font-main">11-20 คะแนน จากแอดมินกามเทพ</div>
                                        </div>
                                    </div>

                                    <div className="author mt-1">
                                        <img className="author__avatar" src={Avatar} alt="Avatar" />
                                        <div>
                                            <div className="text text-dark">ระดับปริญญาตรี</div>
                                            <div className="sub-text color-font-main">21-35 คะแนน จากแอดมินกามเทพ</div>
                                        </div>
                                    </div>

                                    <div className="author mt-1">
                                        <img className="author__avatar" src={Avatar} alt="Avatar" />
                                        <div>
                                            <div className="text text-dark">ระดับปริญญาตรี</div>
                                            <div className="sub-text color-font-main">21-35 คะแนน จากแอดมินกามเทพ</div>
                                        </div>
                                    </div>

                                    <div className="author mt-1">
                                        <img className="author__avatar" src={Avatar} alt="Avatar" />
                                        <div>
                                            <div className="text text-dark">ระดับปริญญาโท</div>
                                            <div className="sub-text color-font-main">36-50 คะแนน จากแอดมินกามเทพ</div>
                                        </div>
                                    </div>

                                    <div className="author mt-3">
                                        <img className="author__avatar" src={Avatar} alt="Avatar" />
                                        <div>
                                            <div className="text text-dark">ระดับปริญญาเอก</div>
                                            <div className="sub-text color-font-main">51-75 คะแนน จากแอดมินกามเทพ</div>
                                        </div>
                                    </div>

                                    <div className="author mt-3">
                                        <img className="author__avatar" src={Avatar} alt="Avatar" />
                                        <div>
                                            <div className="text text-dark">สำเร็จการศึกษา</div>
                                            <div className="sub-text color-font-main">76+ ( ตั้งแต่ 76 ขึ้นไป จะเป็นการติดดาวไปเรื่อยๆ )</div>
                                        </div>
                                    </div>

                                    <Card className="mt-4 card-color-leaderboard">
                                        <Card.Body>
                                            <Card.Text className="card-sub-leaderboard">
                                                *หมายเหตุ เนื่องจากการส่งรูปการบ้านด้วย โลโก้ Fiwfans เป็นการช่วยสนับสนุนเว็บไซต์ ซึ่งจะเป็นเกณฑ์ในการแจกของรางวัลจากทางเว็บไซต์ในอนาคต
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <footer></footer>
        </>
    )
}
