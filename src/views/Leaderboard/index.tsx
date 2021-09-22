import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

export default function Leaderboard() {
    return (
        <Container>
            <Row>
                <Col xs={6}>จัดอันดับ</Col>
                <Col xs={6}>ระดับอนุบาล</Col>
            </Row>
        </Container>
    )
}
