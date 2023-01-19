import React from 'react'
import "./_homescreen.scss"
import Categories from "../../catagoriesbar/Categories"
import { Row, Col } from 'react-bootstrap'
import Video from '../../videos/Video'

const Homescreen = () => {
    return (
        <div className="border border-dark">


            <Categories />
            <Row>
                <Col lg={3} md={4}>
                    <Video />
                </Col>
                <Col lg={3} md={4}>
                    <Video />
                </Col>
                <Col lg={3} md={4}>
                    <Video />
                </Col>
                <Col lg={3} md={4}>
                    <Video />
                </Col>
                <Col lg={3} md={4}>
                    <Video />
                </Col>
                <Col lg={3} md={4}>
                    <Video />
                </Col>
                <Col lg={3} md={4}>
                    <Video />
                </Col>
                <Col lg={3} md={4}>
                    <Video />
                </Col>
                <Col lg={3} md={4}>
                    <Video />
                </Col>
                <Col lg={3} md={4}>
                    <Video />
                </Col>
                <Col lg={3} md={4}>
                    <Video />
                </Col>
                <Col lg={3} md={4}>
                    <Video />
                </Col>
                <Col lg={3} md={4}>
                    <Video />
                </Col>


            </Row>
        </div>

    )
}

export default Homescreen