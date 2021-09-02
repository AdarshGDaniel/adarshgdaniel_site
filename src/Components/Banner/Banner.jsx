import { Typography } from '@material-ui/core';
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Transition, animated } from 'react-spring'
import adarsh_img from './Asset/adarsh.png'
import './Banner.css'
import TextAnimate from './TextAnimate';

export default function Banner(props) {
    return (
        <section className="banner">
            <Row>
                <Col md={6}>
                    <img className="my_image" src={adarsh_img} alt="Adarsh G Daniel" />;
                </Col>
                <Col md={6} className="about-col">
                    <TextAnimate />
                </Col>
            </Row>
        </section>
    )
}
