import React, { useState } from 'react';
import { Navbar, Container, Nav, Card, Row, Col } from 'react-bootstrap';
import Avatar from '../../assets/avatar.png'
import '../../App.css';
import NongPR from '../../assets/nongPR.png';

const HomeWork = () => {
    const [state] = useState<number[]>([1, 2, 3, 4, 5])
    return (
        <>
            <Container className="min-height">
                <div className="list-all-main mt-4 ">
                    <Navbar collapseOnSelect expand="lg" className="pt-2 pb-2">
                        <Container>
                            <Navbar.Brand href="#home">
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M33.5783 12.2984C33.4735 11.9898 33.2807 11.7187 33.0236 11.5185C32.7665 11.3182 32.4564 11.1977 32.1316 11.1717L22.63 10.4167L18.5183 1.31502C18.3874 1.02188 18.1744 0.772893 17.905 0.59812C17.6357 0.423347 17.3216 0.330255 17.0005 0.330078C16.6794 0.329902 16.3652 0.42265 16.0957 0.597127C15.8262 0.771605 15.6129 1.02036 15.4816 1.31336L11.37 10.4167L1.8683 11.1717C1.54905 11.197 1.24386 11.3137 0.989221 11.5079C0.734582 11.7021 0.541284 11.9656 0.432451 12.2667C0.323618 12.5679 0.303859 12.8941 0.375537 13.2062C0.447216 13.5183 0.607297 13.8032 0.836629 14.0267L7.8583 20.8717L5.37496 31.625C5.29956 31.9505 5.32373 32.2912 5.44433 32.6028C5.56493 32.9144 5.7764 33.1825 6.0513 33.3724C6.3262 33.5623 6.65183 33.6652 6.98594 33.6678C7.32004 33.6703 7.6472 33.5724 7.92496 33.3867L17 27.3367L26.075 33.3867C26.3589 33.5752 26.6937 33.6722 27.0343 33.6647C27.375 33.6573 27.7053 33.5457 27.9806 33.3449C28.256 33.1441 28.4633 32.8639 28.5746 32.5418C28.6859 32.2197 28.6959 31.8713 28.6033 31.5434L25.555 20.8767L33.115 14.0734C33.61 13.6267 33.7916 12.93 33.5783 12.2984Z" fill="white" />
                                </svg>
                            </Navbar.Brand>
                            <Nav className="me-auto ">
                                <h4 className="mt-1 text-light">การบ้านของคุณภาพ</h4>
                            </Nav>
                            <Nav>
                                {/* <Nav.Link href="#memes" className="text-light">ดูเพิ่มเติม</Nav.Link> */}
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
                {state.map((value) => {
                    return (
                        <Card className="mt-3 px-3" style={{ height: '100%' }}>
                            <Card.Body >
                                <Row>
                                    <Col xs={12} md={4} lg={3} xl={3}>
                                        <div className="author" style={{ marginLeft: "0rem" }}>
                                            <img className="author__avatar" src={Avatar} alt="Avatar" />
                                            <div>
                                                <div className="text">Mammos</div>
                                                <div className="sub-text">31 ก.ค. 2564</div>
                                                <div className="sub-text">สำเร็จการศึกษา</div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={2} xl={1} className="d-none d-sm-none d-md-block">
                                        <div style={{
                                            marginTop: "2.5rem",
                                            border: '1px solid #D554A9',
                                            transform: 'rotate(90deg)',
                                        }}></div>
                                    </Col>
                                    <Col xs={12} md={2} xl={2} className="mt-3 ">
                                        <p>ตรงปก</p>
                                        <p className="color-font-main">9/10</p>
                                    </Col>
                                    <Col xs={12} md={2} xl={2} className="mt-3">
                                        <p>เรื่องบนเตียง</p>
                                        <p className="color-font-main">9/10</p>
                                    </Col>
                                    <Col xs={12} md={2} xl={2} className="mt-3">
                                        <p>ความคุ้มค่า</p>
                                        <p className="color-font-main">9/10</p>
                                    </Col>
                                    <Col xs={12} md={2} xl={2} className="mt-2">
                                        <img width="50" className="mx-2" src={NongPR} alt="" />
                                        <p className="color-font-main text-start">เข้าชมน้อง</p>
                                    </Col>
                                </Row>
                                <p className="mt-2">ส่งการบ้านน้อง แคนดี้ รังสิต นัดน้องเวลา12:00 น. วันนี้ได้มาจัดน้องเเคนดี้ น้องน่ารักมากเวลายิ้มมีสเนห์ ขาวเนียน อวบอึ๋มเซ็กจัดเยสโหดมากครับ ท่าหกเก้ากับน้องอยู่ประมาณ5นาที จากนั้นจัดขอบเตียงให้น้องหน่อย หอยฟิต ผมซอยน้องน้องบอกเสียวมากไม่ไหวแล้วพี่ เสียงน่ารักมาก ทำผมทนไม่ไหวและเสร็จในทันที ชอบมากครับ เต็มที่ทุกลีลา ไปสอนการบ้านน้องกันครับ รับประกันคนนี้เด็ดมาก</p>
                                <div className="mt-3 d-flex">
                                    <img src={NongPR} alt="" className="image-homework" />
                                    <img src={NongPR} alt="" className="image-homework" />
                                    <img src={NongPR} alt="" className="image-homework" />
                                    <img src={NongPR} alt="" className="image-homework d-sm-none d-lg-block" />
                                </div>
                            </Card.Body>
                        </Card>
                    )
                })}

            </Container>
            <footer></footer>
        </>
    );
}

export default HomeWork;
