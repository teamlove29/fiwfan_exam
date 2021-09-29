/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query'
import axios from 'axios';
import { Col, Container, Row, Button, Card, Navbar, Nav, Carousel } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import '../../App.css';
import "swiper/swiper-bundle.min.css";
import NongPR from '../../assets/nongPR.png';
import Avatar from '../../assets/avatar.png'
import { Image } from 'react-bootstrap';

export default function Detail() {

    let { id }: any = useParams();

    const [item] = useState<number[]>([1, 2, 3, 4])
    SwiperCore.use([Navigation, Thumbs]);
    const history = useHistory();

    // const {
    //     data,
    //     isLoading,
    //     isError,
    //     hasNextPage,
    //     fetchNextPage
    // } = useInfiniteQuery(
    //     'projects',
    //     async ({ pageParam = 0 }) => {
    //         const res = await axios.get('/api/projects?cursor=' + pageParam)
    //         return res.data
    //     },
    //     {
    //         getPreviousPageParam: firstPage => firstPage.previousId ?? false,
    //         getNextPageParam: lastPage => lastPage.nextId ?? false,
    //     }
    // )

    const [thumbsSwiper, setThumbsSwiper] = useState<any>();
    const hendleOnClick = (index: number) => {
        history.push(`/detail/${index}`)
    }


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id]);

    return (
        <>
            <Container className="mt-4">
                <Row>
                    <Col xs={12} md={6}>
                        {thumbsSwiper &&
                            <>
                                <Swiper
                                    spaceBetween={10}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    className="mySwiper2">
                                    <SwiperSlide>
                                        <img src={NongPR} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={NongPR} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={NongPR} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={NongPR} />
                                    </SwiperSlide>
                                </Swiper>
                            </>
                        }
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={3}
                            freeMode={true}
                            watchSlidesProgress={true}
                            className="mySwiper">
                            <SwiperSlide>
                                <img src={NongPR} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={NongPR} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={NongPR} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={NongPR} />
                            </SwiperSlide>
                        </Swiper>
                    </Col>

                    <Col xs={12} md={6}>
                        <div className="detail-person">
                            <h1 style={{
                                fontWeight: 500,
                                fontSize: '48px',
                                lineHeight: '73px',
                                color: '#D554A9'
                            }}>ผิงผิง CM</h1>
                            <div className="verify my-2 mb-3">ยืนยันตัวตนแล้ว</div>
                            <div style={{
                                background: '#FBF5FF',
                                borderRadius: '10px',
                                padding: '0.5rem'
                            }}>
                                <h1 style={{
                                    fontWeight: 600,
                                    fontSize: '36px',
                                    lineHeight: '54px',
                                    color: '#D554A9',
                                }}>฿ 1,200/1ชม.</h1></div>

                            <Row className="my-3">
                                <Col xs={6}>LINE</Col>
                                <Col className="mb-2" xs={6}>PINGPING69</Col>

                                <Col xs={6}>PHONE</Col>
                                <Col className="mb-2" xs={6}>098-222-4533</Col>

                                <Col xs={6}>เพศ</Col>
                                <Col className="mb-2" xs={6}>หญิง</Col>

                                <Col xs={6}>อายุ</Col>
                                <Col className="mb-2" xs={6}>24 ปี</Col>

                                <Col xs={6}>สถานที่รับงาน</Col>
                                <Col className="mb-2" xs={6}>หนองป่าครั่ง/เมืองเชียงใหม่/เจ็ดยอด</Col>

                                <Col xs={6}>หน้าอก/เอว/สะโพก</Col>
                                <Col className="mb-2" xs={6}>38/25/37</Col>

                                <Col xs={6}>ส่วนสูง/น้ำหนัก</Col>
                                <Col className="mb-2" xs={6}>165/45</Col>

                                <Col xs={6}>คำอธิบาย</Col>
                                <Col xs={6}>รวมห้อง ฟรีถุง</Col>
                            </Row>

                            <Card className="card-detail mt-3" style={{ marginTop: "0px" }}>
                                <Card.Body>
                                    <Card.Text
                                        className="card-sub-leaderboard"
                                        style={{
                                            lineHeight: '27px',
                                            textAlign: 'start',
                                            fontSize: '16px',
                                            fontWeight: 200
                                        }}>
                                        อมสดให้คะ เลียเบิรน์ เล่นท่าหมา 69 ได้หมดทำได้ทุกอย่าง ฟิวแฟนมีอารมณ์ร่วมเกินราคา หรือพี่ๆต้องการแบบไหนพิเศษสามารถคุยกันก่อนได้หรือบอก
                                        หน้างานได้เลย ยินดีจัดให้
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </div>

                    </Col>
                </Row>

                <Card className="card-color-leaderboard card-margin-detil" >
                    <Card.Body>
                        <Card.Title className="text-center font-color-navbar" style={{ fontWeight: "bold" }}>รายละเอียดเพิ่มเติม</Card.Title>
                        <Card.Text className="card-sub-leaderboard">
                            เรMILIN <br />

                            น้อง มิลิน หญิงแท้ 💯 % <br />
                            ผิว2สี ไม่มีขน เอาใจเก่ง ฟิลแฟน นวดดี <br />
                            อายุ 29 ปี สูง 160หนัก 49 <br />
                            สัดส่วน 34B-25-35 <br />

                            อาบน้ำ อมสด จูบปาก แลกลิ้น(ขอสะอาด)แตกตัว แตกปาก+กินน้ำ(ทิป)เลียไข่ นวดเก่ง เบรินได้ 69 ประตูหลัง รับงานคาชุด  <br />

                            🍒รับงาน10.00-24.00🍒 <br />

                            🎉 30 นาที 1 น้ำ 900🎉 <br />
                            🎉 60 นาที 1 น้ำ+นวด 1,100🎉  <br />
                            🎉 90 นาที 2 น้ำ+นวด 1,900🎉  <br />
                            🎉 2 ชม. 2 น้ำ+นวด 2,200🎉 <br />

                            💥ราคารวมห้อง+ถุงแล้วค่ะ💥  <br />

                            ❌ไม่รับลค.โมมา,ฉีดมา,คนเมา,เล่นยา,สกปรกมีกลิ่นเหม็น,ไม่รับนอกสถานที่
                        </Card.Text>
                    </Card.Body>
                </Card>

                <div className="list-all-main mt-4 ">
                    <Navbar collapseOnSelect expand="lg" className="pt-2 pb-2">
                        <Container>
                            <Navbar.Brand href="#home">
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M33.5783 12.2984C33.4735 11.9898 33.2807 11.7187 33.0236 11.5185C32.7665 11.3182 32.4564 11.1977 32.1316 11.1717L22.63 10.4167L18.5183 1.31502C18.3874 1.02188 18.1744 0.772893 17.905 0.59812C17.6357 0.423347 17.3216 0.330255 17.0005 0.330078C16.6794 0.329902 16.3652 0.42265 16.0957 0.597127C15.8262 0.771605 15.6129 1.02036 15.4816 1.31336L11.37 10.4167L1.8683 11.1717C1.54905 11.197 1.24386 11.3137 0.989221 11.5079C0.734582 11.7021 0.541284 11.9656 0.432451 12.2667C0.323618 12.5679 0.303859 12.8941 0.375537 13.2062C0.447216 13.5183 0.607297 13.8032 0.836629 14.0267L7.8583 20.8717L5.37496 31.625C5.29956 31.9505 5.32373 32.2912 5.44433 32.6028C5.56493 32.9144 5.7764 33.1825 6.0513 33.3724C6.3262 33.5623 6.65183 33.6652 6.98594 33.6678C7.32004 33.6703 7.6472 33.5724 7.92496 33.3867L17 27.3367L26.075 33.3867C26.3589 33.5752 26.6937 33.6722 27.0343 33.6647C27.375 33.6573 27.7053 33.5457 27.9806 33.3449C28.256 33.1441 28.4633 32.8639 28.5746 32.5418C28.6859 32.2197 28.6959 31.8713 28.6033 31.5434L25.555 20.8767L33.115 14.0734C33.61 13.6267 33.7916 12.93 33.5783 12.2984Z" fill="white" />
                                </svg>
                            </Navbar.Brand>
                            <Nav className="me-auto ">
                                <h4 className="mt-1 text-light">การบ้านของ ผิงผิง CM</h4>
                            </Nav>
                            <Nav>
                                <Button>ส่งการบ้าน</Button>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>

                <Card className="px-3 mb-3 mt-3" style={{ height: '100%' }}>
                    <Card.Body >
                        <Row>
                            <Col xs={6} md={4}>
                                <div className="author" style={{ marginLeft: "0rem" }}>
                                    <img className="author__avatar" src={Avatar} alt="Avatar" />
                                    <div>
                                        <div className="text">Mammos</div>
                                        <div className="sub-text">31 ก.ค. 2564</div>
                                        <div className="sub-text">สำเร็จการศึกษา</div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={2} className="mt-3">
                                <p>ตรงปก</p>
                                <p className="color-font-main">9/10</p>
                            </Col>
                            <Col xs={12} md={2} className="mt-3">
                                <p>เรื่องบนเตียง</p>
                                <p className="color-font-main">9/10</p>
                            </Col>
                            <Col xs={12} md={2} className="mt-3">
                                <p>ความคุ้มค่า</p>
                                <p className="color-font-main">9/10</p>
                            </Col>

                        </Row>
                        <p className="mt-4">ส่งการบ้านน้อง แคนดี้ รังสิต นัดน้องเวลา12:00 น. วันนี้ได้มาจัดน้องเเคนดี้ น้องน่ารักมากเวลายิ้มมีสเนห์ ขาวเนียน อวบอึ๋มเซ็กจัดเยสโหดมากครับ ท่าหกเก้ากับน้องอยู่ประมาณ5นาที จากนั้นจัดขอบเตียงให้น้องหน่อย หอยฟิต ผมซอยน้องน้องบอกเสียวมากไม่ไหวแล้วพี่ เสียงน่ารักมาก ทำผมทนไม่ไหวและเสร็จในทันที ชอบมากครับ เต็มที่ทุกลีลา ไปสอนการบ้านน้องกันครับ รับประกันคนนี้เด็ดมาก</p>
                    </Card.Body>
                </Card>

                <Card className="px-3 mb-3" style={{ height: '100%' }}>
                    <Card.Body >
                        <Row>
                            <Col xs={6} md={4}>
                                <div className="author" style={{ marginLeft: "0rem" }}>
                                    <img className="author__avatar" src={Avatar} alt="Avatar" />
                                    <div>
                                        <div className="text">Mammos</div>
                                        <div className="sub-text">31 ก.ค. 2564</div>
                                        <div className="sub-text">สำเร็จการศึกษา</div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={2} className="mt-3">
                                <p>ตรงปก</p>
                                <p className="color-font-main">9/10</p>
                            </Col>
                            <Col xs={12} md={2} className="mt-3">
                                <p>เรื่องบนเตียง</p>
                                <p className="color-font-main">9/10</p>
                            </Col>
                            <Col xs={12} md={2} className="mt-3">
                                <p>ความคุ้มค่า</p>
                                <p className="color-font-main">9/10</p>
                            </Col>

                        </Row>
                        <p className="mt-4">ส่งการบ้านน้อง แคนดี้ รังสิต นัดน้องเวลา12:00 น. วันนี้ได้มาจัดน้องเเคนดี้ น้องน่ารักมากเวลายิ้มมีสเนห์ ขาวเนียน อวบอึ๋มเซ็กจัดเยสโหดมากครับ ท่าหกเก้ากับน้องอยู่ประมาณ5นาที จากนั้นจัดขอบเตียงให้น้องหน่อย หอยฟิต ผมซอยน้องน้องบอกเสียวมากไม่ไหวแล้วพี่ เสียงน่ารักมาก ทำผมทนไม่ไหวและเสร็จในทันที ชอบมากครับ เต็มที่ทุกลีลา ไปสอนการบ้านน้องกันครับ รับประกันคนนี้เด็ดมาก</p>
                    </Card.Body>
                </Card>

                <Card className="px-3 mb-3" style={{ height: '100%' }}>
                    <Card.Body >
                        <Row>
                            <Col xs={12} md={4}>
                                <div className="author" style={{ marginLeft: "0rem" }}>
                                    <img className="author__avatar" src={Avatar} alt="Avatar" />
                                    <div>
                                        <div className="text">Mammos</div>
                                        <div className="sub-text">31 ก.ค. 2564</div>
                                        <div className="sub-text">สำเร็จการศึกษา</div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={2} className="mt-3">
                                <p>ตรงปก</p>
                                <p className="color-font-main">9/10</p>
                            </Col>
                            <Col xs={12} md={2} className="mt-3">
                                <p>เรื่องบนเตียง</p>
                                <p className="color-font-main">9/10</p>
                            </Col>
                            <Col xs={12} md={2} className="mt-3">
                                <p>ความคุ้มค่า</p>
                                <p className="color-font-main">9/10</p>
                            </Col>

                        </Row>
                        <p className="mt-4">ส่งการบ้านน้อง แคนดี้ รังสิต นัดน้องเวลา12:00 น. วันนี้ได้มาจัดน้องเเคนดี้ น้องน่ารักมากเวลายิ้มมีสเนห์ ขาวเนียน อวบอึ๋มเซ็กจัดเยสโหดมากครับ ท่าหกเก้ากับน้องอยู่ประมาณ5นาที จากนั้นจัดขอบเตียงให้น้องหน่อย หอยฟิต ผมซอยน้องน้องบอกเสียวมากไม่ไหวแล้วพี่ เสียงน่ารักมาก ทำผมทนไม่ไหวและเสร็จในทันที ชอบมากครับ เต็มที่ทุกลีลา ไปสอนการบ้านน้องกันครับ รับประกันคนนี้เด็ดมาก</p>
                    </Card.Body>
                </Card>

                <div className="list-all-main mt-4 ">
                    <Navbar collapseOnSelect expand="lg" className="pt-2 pb-2">
                        <Container>
                            <Navbar.Brand href="#home">
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M33.5783 12.2984C33.4735 11.9898 33.2807 11.7187 33.0236 11.5185C32.7665 11.3182 32.4564 11.1977 32.1316 11.1717L22.63 10.4167L18.5183 1.31502C18.3874 1.02188 18.1744 0.772893 17.905 0.59812C17.6357 0.423347 17.3216 0.330255 17.0005 0.330078C16.6794 0.329902 16.3652 0.42265 16.0957 0.597127C15.8262 0.771605 15.6129 1.02036 15.4816 1.31336L11.37 10.4167L1.8683 11.1717C1.54905 11.197 1.24386 11.3137 0.989221 11.5079C0.734582 11.7021 0.541284 11.9656 0.432451 12.2667C0.323618 12.5679 0.303859 12.8941 0.375537 13.2062C0.447216 13.5183 0.607297 13.8032 0.836629 14.0267L7.8583 20.8717L5.37496 31.625C5.29956 31.9505 5.32373 32.2912 5.44433 32.6028C5.56493 32.9144 5.7764 33.1825 6.0513 33.3724C6.3262 33.5623 6.65183 33.6652 6.98594 33.6678C7.32004 33.6703 7.6472 33.5724 7.92496 33.3867L17 27.3367L26.075 33.3867C26.3589 33.5752 26.6937 33.6722 27.0343 33.6647C27.375 33.6573 27.7053 33.5457 27.9806 33.3449C28.256 33.1441 28.4633 32.8639 28.5746 32.5418C28.6859 32.2197 28.6959 31.8713 28.6033 31.5434L25.555 20.8767L33.115 14.0734C33.61 13.6267 33.7916 12.93 33.5783 12.2984Z" fill="white" />
                                </svg>
                            </Navbar.Brand>
                            <Nav className="me-auto ">
                                <h4 className="mt-1 text-light">น้องรับงานใกล้เคียง</h4>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
                <Carousel touch={true} indicators={false}>
                    <Carousel.Item>
                        <Container>
                            <Row className="align-items-center align-self-center justify-content-center ">
                                {item && item.map((vavlue, index) => {
                                    return (
                                        <Col xs={6} sm={6} md={4} lg={3} className="mt-3 px-2" key={index}>
                                            <Card className="card-list-item " onClick={() => hendleOnClick(index)}>
                                                <div className="testt">
                                                    <Card.Img className="image-list-main" variant="top" src="https://s3-alpha-sig.figma.com/img/b8e2/30ee/88f3623e2f2878854ebb6b0113081f6b?Expires=1633305600&Signature=PNXQFursiIe43iAbq0UlALuJTRqEVLkl7~rUSMPIxCfzgE5tWZ7tzp8nUXPY0Pz9TwW7w9wcwqmpT-nkXE6DxT8X50BYJILzWCY4poLud9GOODMK8Urm8BsVOOb8qcQ-rD3Yznb7IATvGX4EaFeUSo1bSr-1Qt4EpiUDbEdxZtwfrBOWFxBKkGUsnPuljDuktupFJJReujbN55SYNnRqUor3Egffixb2FzbdR7m44LC~cghoe2RWS9AMLIkOpRZRtGyebwyFWZH7ryBBsp6cnN7dwBXNnDUEraGywrtdeLWrqKrb0e0nvAFJkglkEf66GgPi6NSFmSPejTEkU81F3w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                                                    <p className="test2 d-flex">
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M13.6313 5.11934C13.5894 4.99592 13.5123 4.88747 13.4095 4.80738C13.3066 4.72729 13.1826 4.67908 13.0527 4.66868L9.252 4.36668L7.60733 0.72601C7.55495 0.608751 7.46976 0.509157 7.36203 0.439248C7.2543 0.369339 7.12864 0.332102 7.00021 0.332031C6.87179 0.331961 6.74609 0.36906 6.63828 0.438851C6.53047 0.508642 6.44517 0.608142 6.39266 0.725343L4.748 4.36668L0.947331 4.66868C0.819634 4.67879 0.697556 4.72548 0.5957 4.80316C0.493845 4.88084 0.416526 4.98622 0.372993 5.1067C0.329459 5.22717 0.321556 5.35763 0.350227 5.48248C0.378899 5.60733 0.442931 5.72127 0.534664 5.81068L3.34333 8.54868L2.35 12.85C2.31984 12.9802 2.3295 13.1165 2.37774 13.2411C2.42598 13.3657 2.51057 13.473 2.62053 13.549C2.73049 13.6249 2.86074 13.6661 2.99439 13.6671C3.12803 13.6681 3.25889 13.629 3.37 13.5547L7 11.1347L10.63 13.5547C10.7436 13.6301 10.8775 13.6689 11.0138 13.6659C11.15 13.6629 11.2821 13.6183 11.3923 13.538C11.5024 13.4577 11.5853 13.3456 11.6298 13.2167C11.6744 13.0879 11.6784 12.9485 11.6413 12.8173L10.422 8.55068L13.446 5.82934C13.644 5.65068 13.7167 5.37201 13.6313 5.11934Z" fill="white" />
                                                        </svg>TOP STAR</p>
                                                    <div className="favorites">
                                                        <svg className="heart" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M21 3.09334C20.1067 1.26001 17.5333 -0.239994 14.54 0.63334C13.1096 1.0465 11.8617 1.93253 11 3.14667C10.1383 1.93253 8.89036 1.0465 7.46 0.63334C4.46 -0.22666 1.89334 1.26001 1 3.09334C-0.25333 5.66001 0.26667 8.54667 2.54667 11.6733C4.33334 14.12 6.88667 16.6 10.5933 19.48C10.7105 19.5714 10.8548 19.621 11.0033 19.621C11.1519 19.621 11.2962 19.5714 11.4133 19.48C15.1133 16.6067 17.6733 14.1467 19.46 11.6733C21.7333 8.54667 22.2533 5.66001 21 3.09334Z" fill="white" />
                                                        </svg>
                                                    </div>
                                                    <p className="test3">ยืนยันตัวตน</p>
                                                </div>

                                                <Card.Body>
                                                    <Row>
                                                        <Col> <div className="card-province-item text-center">เชียงใหม่</div> </Col>
                                                        <Col> <div className="text-end">หนองป่าครั่ง</div></Col>
                                                    </Row>
                                                    <div style={{
                                                        fontWeight: 600,
                                                        fontSize: '14px',
                                                        lineHeight: '21px',
                                                        color: '#D554A9',
                                                        marginTop: '10px'
                                                    }}>ผิงผิงCM</div>
                                                    <div className="card-subtitle-item mt-2">หญิง</div>
                                                    <Row>
                                                        <Col xs={5} sm={5} md={4} lg={5} xl={6}> <div className="card-subtitle-item mt-2">อายุ 24</div> </Col>
                                                        <Col xs={7} sm={7} md={8} lg={7} xl={6}> <div className="card-price-item text-end">฿ 1,200</div></Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container>
                            <Row className="align-items-center align-self-center justify-content-center">
                                {item && item.map((vavlue, index) => {
                                    return (
                                        <Col xs={6} sm="auto" lg={3} className="mt-3 px-2" key={index}>
                                            <Card className="card-list-item " onClick={() => hendleOnClick(index)}>
                                                <div className="testt">
                                                    <Card.Img className="image-list-main" variant="top" src="https://s3-alpha-sig.figma.com/img/b8e2/30ee/88f3623e2f2878854ebb6b0113081f6b?Expires=1633305600&Signature=PNXQFursiIe43iAbq0UlALuJTRqEVLkl7~rUSMPIxCfzgE5tWZ7tzp8nUXPY0Pz9TwW7w9wcwqmpT-nkXE6DxT8X50BYJILzWCY4poLud9GOODMK8Urm8BsVOOb8qcQ-rD3Yznb7IATvGX4EaFeUSo1bSr-1Qt4EpiUDbEdxZtwfrBOWFxBKkGUsnPuljDuktupFJJReujbN55SYNnRqUor3Egffixb2FzbdR7m44LC~cghoe2RWS9AMLIkOpRZRtGyebwyFWZH7ryBBsp6cnN7dwBXNnDUEraGywrtdeLWrqKrb0e0nvAFJkglkEf66GgPi6NSFmSPejTEkU81F3w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                                                    <p className="test2 d-flex">
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M13.6313 5.11934C13.5894 4.99592 13.5123 4.88747 13.4095 4.80738C13.3066 4.72729 13.1826 4.67908 13.0527 4.66868L9.252 4.36668L7.60733 0.72601C7.55495 0.608751 7.46976 0.509157 7.36203 0.439248C7.2543 0.369339 7.12864 0.332102 7.00021 0.332031C6.87179 0.331961 6.74609 0.36906 6.63828 0.438851C6.53047 0.508642 6.44517 0.608142 6.39266 0.725343L4.748 4.36668L0.947331 4.66868C0.819634 4.67879 0.697556 4.72548 0.5957 4.80316C0.493845 4.88084 0.416526 4.98622 0.372993 5.1067C0.329459 5.22717 0.321556 5.35763 0.350227 5.48248C0.378899 5.60733 0.442931 5.72127 0.534664 5.81068L3.34333 8.54868L2.35 12.85C2.31984 12.9802 2.3295 13.1165 2.37774 13.2411C2.42598 13.3657 2.51057 13.473 2.62053 13.549C2.73049 13.6249 2.86074 13.6661 2.99439 13.6671C3.12803 13.6681 3.25889 13.629 3.37 13.5547L7 11.1347L10.63 13.5547C10.7436 13.6301 10.8775 13.6689 11.0138 13.6659C11.15 13.6629 11.2821 13.6183 11.3923 13.538C11.5024 13.4577 11.5853 13.3456 11.6298 13.2167C11.6744 13.0879 11.6784 12.9485 11.6413 12.8173L10.422 8.55068L13.446 5.82934C13.644 5.65068 13.7167 5.37201 13.6313 5.11934Z" fill="white" />
                                                        </svg>TOP STAR</p>
                                                    <div className="favorites">
                                                        <svg className="heart" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M21 3.09334C20.1067 1.26001 17.5333 -0.239994 14.54 0.63334C13.1096 1.0465 11.8617 1.93253 11 3.14667C10.1383 1.93253 8.89036 1.0465 7.46 0.63334C4.46 -0.22666 1.89334 1.26001 1 3.09334C-0.25333 5.66001 0.26667 8.54667 2.54667 11.6733C4.33334 14.12 6.88667 16.6 10.5933 19.48C10.7105 19.5714 10.8548 19.621 11.0033 19.621C11.1519 19.621 11.2962 19.5714 11.4133 19.48C15.1133 16.6067 17.6733 14.1467 19.46 11.6733C21.7333 8.54667 22.2533 5.66001 21 3.09334Z" fill="white" />
                                                        </svg>
                                                    </div>
                                                    <p className="test3">ยืนยันตัวตน</p>
                                                </div>

                                                <Card.Body>
                                                    <Row>
                                                        <Col> <div className="card-province-item text-center">เชียงใหม่</div> </Col>
                                                        <Col> <div className="text-end">หนองป่าครั่ง</div></Col>
                                                    </Row>
                                                    <div style={{
                                                        fontWeight: 600,
                                                        fontSize: '14px',
                                                        lineHeight: '21px',
                                                        color: '#D554A9',
                                                        marginTop: '10px'
                                                    }}>ผิงผิงCM</div>
                                                    <div className="card-subtitle-item mt-2">หญิง</div>
                                                    <Row>
                                                        <Col xs={5} sm={5} md={4} lg={5} xl={6}> <div className="card-subtitle-item mt-2">อายุ 24</div> </Col>
                                                        <Col xs={7} sm={7} md={8} lg={7} xl={6}> <div className="card-price-item text-end">฿ 1,200</div></Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Container>
                    </Carousel.Item>

                </Carousel>

            </Container>
            <footer></footer>
        </>
    )
}
