
import { useState } from 'react';
import { Button, Navbar, Container, Nav, Card, Row, Col, Image, Carousel, Dropdown, FormControl, ButtonGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import '../../App.css';
import PinkIcon from '../../assets/pink.png';



export default function Home() {

    const [item] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24])
    const [itemPink] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    const history = useHistory();

    const hendleOnClick = (index: number) => {
        history.push(`/detail/${index}`)
    }

    return (
        <>
            <div className="title-home text-center bg-color-navbar ">
                <h1 className="font-color-h1-home">เปิดประสบการณ์ใหม่กับเรา</h1>
                <p className="font-p-home">เว็บไซต์รวบรวมน้อง ๆ ไซด์ไลน์ สไตล์ฟิวแฟนทะเลเรียกว่า</p>
                <p className="font-p-home">Sea ช่วงเวลาดี ๆ เรียกว่า Fiwfans </p>
                <Card className="filter-home text-start" body>
                    <Row className="px-3 align-items-center align-self-center justify-content-center">
                        <Col xs={12} md={3}>
                            <Dropdown as={ButtonGroup}>
                                <div style={{
                                    paddingTop: '0.3rem',
                                    fontSize: '18px',
                                    lineHeight: " 27px",
                                    color: ' #9A307C',
                                }}>คุณกำลังมองหา
                                </div>
                                <Dropdown.Toggle split variant="none" id="dropdown-split-basic" />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">ผู้หญิง</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">ผู้ชาย</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <p>ผู้หญิง</p>
                        </Col>

                        <Col xs={12} md={4}>
                            <Dropdown as={ButtonGroup}>
                                <div style={{
                                    paddingTop: '0.3rem',
                                    fontSize: '18px',
                                    lineHeight: " 27px",
                                    color: ' #9A307C',
                                }}>ช่วงอายุที่คุณต้องการค้นหา
                                </div>
                                <Dropdown.Toggle split variant="none" id="dropdown-split-basic" />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">19 - 25</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">26 - 35</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <p>19 - 25</p>
                        </Col>

                        <Col xs={12} md={4}>
                            <Dropdown as={ButtonGroup}>
                                <div style={{
                                    paddingTop: '0.3rem',
                                    fontSize: '18px',
                                    lineHeight: " 27px",
                                    color: ' #9A307C',
                                }}>จังหวัดที่ต้องการค้นหา
                                </div>
                                <Dropdown.Toggle split variant="none" id="dropdown-split-basic" />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">เชียงใหม่</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">กรุงเทพ</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <p>เลือกจังหวัดที่ต้องการ</p>
                        </Col>

                        <Col xs={12} md={1}>
                            <div className="btn-filter">
                                <svg className="ic-center" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.387 0.195503C14.5475 0.195503 7.38652 7.36 7.38652 16.1955C7.38195 19.1063 8.17537 21.9626 9.68052 24.454L1.92303 32.2115L1.95003 32.2385C1.12203 33.031 0.613525 34.156 0.613525 35.4275C0.613025 37.884 2.57003 39.805 5.02402 39.8045C6.27752 39.804 7.39852 39.3025 8.19852 38.4865L8.21802 38.506L16.222 30.5015C18.4453 31.6178 20.8992 32.198 23.387 32.1955C32.227 32.1955 39.3865 25.032 39.3865 16.1955C39.3865 7.36 32.2265 0.195503 23.387 0.195503ZM23.484 25.904C17.959 25.904 13.4835 21.427 13.4835 15.904C13.4835 10.382 17.959 5.904 23.484 5.904C29.009 5.904 33.4835 10.3815 33.4835 15.904C33.484 21.427 29.009 25.904 23.484 25.904Z" fill="white" />
                                </svg>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>
            <div className="bg-affiliation">
                <Container>
                    <Navbar collapseOnSelect expand="lg" className="pt-3 pb-3">
                        <Container>
                            <Navbar.Brand href="#home">
                                <svg width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.34672e-07 38.75V5C3.34672e-07 3.67392 0.526784 2.40215 1.46447 1.46447C2.40215 0.526784 3.67392 0 5 0L25 0C26.3261 0 27.5979 0.526784 28.5355 1.46447C29.4732 2.40215 30 3.67392 30 5V38.75C30.0002 38.9671 29.9438 39.1804 29.8364 39.3691C29.7291 39.5578 29.5745 39.7152 29.3878 39.826C29.2011 39.9367 28.9888 39.9969 28.7717 40.0007C28.5547 40.0045 28.3404 39.9517 28.15 39.8475L15 32.6725L1.85 39.8475C1.65957 39.9517 1.4453 40.0045 1.22826 40.0007C1.01123 39.9969 0.798917 39.9367 0.612229 39.826C0.425541 39.7152 0.270912 39.5578 0.163561 39.3691C0.0562113 39.1804 -0.000158485 38.9671 3.34672e-07 38.75ZM15.4 10.25C15.3635 10.175 15.3066 10.1118 15.2358 10.0676C15.1651 10.0234 15.0834 10 15 10C14.9166 10 14.8349 10.0234 14.7642 10.0676C14.6934 10.1118 14.6365 10.175 14.6 10.25L13.015 13.4625C12.9833 13.5275 12.9362 13.5838 12.8778 13.6264C12.8194 13.6691 12.7515 13.697 12.68 13.7075L9.13 14.2225C9.04828 14.2349 8.97162 14.2698 8.90863 14.3233C8.84564 14.3769 8.79879 14.4469 8.77336 14.5255C8.74792 14.6042 8.74489 14.6883 8.76461 14.7686C8.78433 14.8489 8.82602 14.9221 8.885 14.98L11.45 17.4825C11.555 17.585 11.6025 17.7325 11.5775 17.8775L10.975 21.4125C10.9614 21.4941 10.9709 21.5779 11.0023 21.6545C11.0337 21.731 11.0858 21.7973 11.1528 21.8459C11.2198 21.8944 11.299 21.9234 11.3815 21.9294C11.4641 21.9354 11.5467 21.9183 11.62 21.88L14.795 20.21C14.8587 20.1767 14.9294 20.1593 15.0012 20.1593C15.0731 20.1593 15.1438 20.1767 15.2075 20.21L18.3825 21.88C18.4558 21.9176 18.538 21.9342 18.6202 21.9278C18.7023 21.9215 18.781 21.8924 18.8476 21.844C18.9142 21.7955 18.9661 21.7295 18.9974 21.6533C19.0287 21.5772 19.0383 21.4938 19.025 21.4125L18.42 17.875C18.4072 17.804 18.412 17.7309 18.4337 17.6621C18.4555 17.5933 18.4937 17.5308 18.545 17.48L21.115 14.9775C21.174 14.9196 21.2157 14.8464 21.2354 14.7661C21.2551 14.6858 21.2521 14.6017 21.2266 14.523C21.2012 14.4444 21.1544 14.3744 21.0914 14.3208C21.0284 14.2673 20.9517 14.2324 20.87 14.22L17.32 13.705C17.2485 13.6945 17.1806 13.6666 17.1222 13.6239C17.0638 13.5813 17.0167 13.525 16.985 13.46L15.4 10.25Z" fill="white" />
                                </svg>
                            </Navbar.Brand>
                            <Nav className="me-auto ">
                                <p className="text-light">สังกัด</p>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#memes" className="text-light">ดูเพิ่มเติม</Nav.Link>
                            </Nav>

                        </Container>
                    </Navbar>

                </Container>

                <Carousel touch={true} indicators={false}>
                    <Carousel.Item>
                        <Container>
                            <Row className="align-items-center align-self-center justify-content-center ">
                                <Col md={2} className="col-auto col-md-3 col-lg-auto col-xl-2 d-md-block mt-2">
                                    <div className="card-affiliation">
                                        <Image className="image-pink" src={PinkIcon} alt="pink" />
                                        <p className="text-center pt-2">PG mini</p>
                                    </div>
                                </Col>
                                <Col md={2} className="col-auto col-md-3 col-lg-auto col-xl-2 d-md-block mt-2">
                                    <div className="card-affiliation">
                                        <Image className="image-pink" src={PinkIcon} alt="pink" />
                                        <p className="text-center pt-2">PG mini</p>
                                    </div>
                                </Col>
                                <Col md={2} className="col-auto col-md-3 col-lg-auto col-xl-2 d-md-block mt-2">
                                    <div className="card-affiliation">
                                        <Image className="image-pink" src={PinkIcon} alt="pink" />
                                        <p className="text-center pt-2">PG mini</p>
                                    </div>
                                </Col>
                                <Col md={2} className="col-auto col-md-3 col-lg-auto col-xl-2 d-md-block mt-2">
                                    <div className="card-affiliation">
                                        <Image className="image-pink" src={PinkIcon} alt="pink" />
                                        <p className="text-center pt-2">PG mini</p>
                                    </div>
                                </Col>
                                <Col md={2} className="d-none col-md-3 col-lg-auto col-xl-2 d-md-block mt-2">
                                    <div className="card-affiliation">
                                        <Image className="image-pink" src={PinkIcon} alt="pink" />
                                        <p className="text-center pt-2">PG mini</p>
                                    </div>
                                </Col>
                                <Col md={2} className="d-none col-md-3 col-lg-auto col-xl-2 d-md-block mt-2">
                                    <div className="card-affiliation">
                                        <Image className="image-pink" src={PinkIcon} alt="pink" />
                                        <p className="text-center pt-2">PG mini</p>
                                    </div>
                                </Col>
                                <Col md={2} className="d-none col-md-3 col-lg-auto col-xl-2 d-md-block mt-2">
                                    <div className="card-affiliation">
                                        <Image className="image-pink" src={PinkIcon} alt="pink" />
                                        <p className="text-center pt-2">PG mini</p>
                                    </div>
                                </Col>
                                <Col md={2} className="d-none col-md-3 col-lg-auto col-xl-2 d-md-block mt-2">
                                    <div className="card-affiliation">
                                        <Image className="image-pink" src={PinkIcon} alt="pink" />
                                        <p className="text-center pt-2">PG mini</p>
                                    </div>
                                </Col>
                                <Col md={2} className="d-none col-md-3 col-lg-auto col-xl-2 d-lg-block mt-2">
                                    <div className="card-affiliation">
                                        <Image className="image-pink" src={PinkIcon} alt="pink" />
                                        <p className="text-center pt-2">PG mini</p>
                                    </div>
                                </Col>
                                <Col md={2} className="d-none col-md-3 col-lg-auto col-xl-2 d-lg-block mt-2">
                                    <div className="card-affiliation">
                                        <Image className="image-pink" src={PinkIcon} alt="pink" />
                                        <p className="text-center pt-2">PG mini</p>
                                    </div>
                                </Col>
                                <Col md={2} className="d-none col-md-3 col-lg-auto col-xl-2 d-xl-block mt-2">
                                    <div className="card-affiliation">
                                        <Image className="image-pink" src={PinkIcon} alt="pink" />
                                        <p className="text-center pt-2">PG mini</p>
                                    </div>
                                </Col>
                                <Col md={2} className="d-none col-md-3 col-lg-auto col-xl-2 d-xl-block mt-2">
                                    <div className="card-affiliation">
                                        <Image className="image-pink" src={PinkIcon} alt="pink" />
                                        <p className="text-center pt-2">PG mini</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container>
                            <Row className="align-items-center align-self-center justify-content-center">
                                <Col md={2} className="col-auto col-md-3 col-lg-auto col-xl-2 d-md-block mt-2">
                                    <div className="card-affiliation">
                                        <Image className="image-pink" src={PinkIcon} alt="pink" />
                                        <p className="text-center pt-2">PG mini</p>
                                    </div>
                                </Col>
                                <Col md={2} className="col-auto col-md-3 col-lg-auto col-xl-2 d-md-block mt-2">
                                    <div className="card-affiliation">
                                        <Image className="image-pink" src={PinkIcon} alt="pink" />
                                        <p className="text-center pt-2">PG mini</p>
                                    </div>
                                </Col>
                                <Col md={2} className="col-auto col-md-3 col-lg-auto col-xl-2 d-md-block mt-2">
                                    <div className="card-affiliation">
                                        <Image className="image-pink" src={PinkIcon} alt="pink" />
                                        <p className="text-center pt-2">PG mini</p>
                                    </div>
                                </Col>
                                <Col md={2} className="col-auto col-md-3 col-lg-auto col-xl-2 d-md-block mt-2">
                                    <div className="card-affiliation">
                                        <Image className="image-pink" src={PinkIcon} alt="pink" />
                                        <p className="text-center pt-2">PG mini</p>
                                    </div>
                                </Col>
                                <Col md={2} className="d-none col-md-3 col-lg-auto col-xl-2 d-md-block mt-2">
                                    <div className="card-affiliation">
                                        <Image className="image-pink" src={PinkIcon} alt="pink" />
                                        <p className="text-center pt-2">PG mini</p>
                                    </div>
                                </Col>
                                <Col md={2} className="d-none col-md-3 col-lg-auto col-xl-2 d-md-block mt-2">
                                    <div className="card-affiliation">
                                        <Image className="image-pink" src={PinkIcon} alt="pink" />
                                        <p className="text-center pt-2">PG mini</p>
                                    </div>
                                </Col>
                                <Col md={2} className="d-none col-md-3 col-lg-auto col-xl-2 d-md-block mt-2">
                                    <div className="card-affiliation">
                                        <Image className="image-pink" src={PinkIcon} alt="pink" />
                                        <p className="text-center pt-2">PG mini</p>
                                    </div>
                                </Col>
                                <Col md={2} className="d-none col-md-3 col-lg-auto col-xl-2 d-md-block mt-2">
                                    <div className="card-affiliation">
                                        <Image className="image-pink" src={PinkIcon} alt="pink" />
                                        <p className="text-center pt-2">PG mini</p>
                                    </div>
                                </Col>
                                <Col md={2} className="d-none col-md-3 col-lg-auto col-xl-2 d-lg-block mt-2">
                                    <div className="card-affiliation">
                                        <Image className="image-pink" src={PinkIcon} alt="pink" />
                                        <p className="text-center pt-2">PG mini</p>
                                    </div>
                                </Col>
                                <Col md={2} className="d-none col-md-3 col-lg-auto col-xl-2 d-lg-block mt-2">
                                    <div className="card-affiliation">
                                        <Image className="image-pink" src={PinkIcon} alt="pink" />
                                        <p className="text-center pt-2">PG mini</p>
                                    </div>
                                </Col>
                                <Col md={2} className="d-none col-md-3 col-lg-auto col-xl-2 d-xl-block mt-2">
                                    <div className="card-affiliation">
                                        <Image className="image-pink" src={PinkIcon} alt="pink" />
                                        <p className="text-center pt-2">PG mini</p>
                                    </div>
                                </Col>
                                <Col md={2} className="d-none col-md-3 col-lg-auto col-xl-2 d-xl-block mt-2">
                                    <div className="card-affiliation">
                                        <Image className="image-pink" src={PinkIcon} alt="pink" />
                                        <p className="text-center pt-2">PG mini</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>

                </Carousel>
            </div>

            <div className="wow container">
                <Card className="head-fiwfans20">
                    <Card.Body>
                        <h4 className="font-fiwfans20">Fiwfans.com สำหรับผู้ที่มีอายุ 20 ปีขึ้นไปเท่านั้น</h4>
                        <Card.Text className="font-sub-fiwfans20">
                            เราเป็น Social Media Platform ที่ให้บริการเช่าพื้นที่สำหรับการโฆษณาเท่านั้น ไม่มีการซื้อบริการทางเพศ ไม่มีการเก็บค่าใช้จ่ายใด ๆ ทั้งสิ้น หากมีการให้โอนเงินเพื่อซื้อบริการ กรุณาอย่าโอน หากมีการเก็บค่าจ้าง กรุณาติดต่อน้อง ๆ โดยตรงจากบัญชีไลน์ที่ปรากฎในแต่ละหน้า Profile ของแต่ละบุคคล
                        </Card.Text>
                    </Card.Body>
                </Card>



                <Container className="mt-4 ">
                    <div className="list-all-main">
                        <Navbar collapseOnSelect expand="lg" className="pt-2 pb-2">
                            <Container>
                                <Navbar.Brand href="#home">
                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M33.5783 12.2984C33.4735 11.9898 33.2807 11.7187 33.0236 11.5185C32.7665 11.3182 32.4564 11.1977 32.1316 11.1717L22.63 10.4167L18.5183 1.31502C18.3874 1.02188 18.1744 0.772893 17.905 0.59812C17.6357 0.423347 17.3216 0.330255 17.0005 0.330078C16.6794 0.329902 16.3652 0.42265 16.0957 0.597127C15.8262 0.771605 15.6129 1.02036 15.4816 1.31336L11.37 10.4167L1.8683 11.1717C1.54905 11.197 1.24386 11.3137 0.989221 11.5079C0.734582 11.7021 0.541284 11.9656 0.432451 12.2667C0.323618 12.5679 0.303859 12.8941 0.375537 13.2062C0.447216 13.5183 0.607297 13.8032 0.836629 14.0267L7.8583 20.8717L5.37496 31.625C5.29956 31.9505 5.32373 32.2912 5.44433 32.6028C5.56493 32.9144 5.7764 33.1825 6.0513 33.3724C6.3262 33.5623 6.65183 33.6652 6.98594 33.6678C7.32004 33.6703 7.6472 33.5724 7.92496 33.3867L17 27.3367L26.075 33.3867C26.3589 33.5752 26.6937 33.6722 27.0343 33.6647C27.375 33.6573 27.7053 33.5457 27.9806 33.3449C28.256 33.1441 28.4633 32.8639 28.5746 32.5418C28.6859 32.2197 28.6959 31.8713 28.6033 31.5434L25.555 20.8767L33.115 14.0734C33.61 13.6267 33.7916 12.93 33.5783 12.2984Z" fill="white" />
                                    </svg>
                                </Navbar.Brand>
                                <Nav className="me-auto ">
                                    <h4 className="mt-2 text-light">รายการทั้งหมด 535 รายการ</h4>
                                </Nav>
                                <Nav>
                                    {/* <Nav.Link href="#memes" className="text-light">ดูเพิ่มเติม</Nav.Link> */}
                                </Nav>
                            </Container>
                        </Navbar>
                    </div>

                    <Row>
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

                <footer></footer>
            </div>


        </>
    )
}
