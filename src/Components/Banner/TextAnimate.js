import React from 'react'
import styled, { keyframes } from "styled-components"
import './Banner.css'

export default function TextAnimate() {
    const reactArray = "Code".split("")
    return (
        <div className="box">
            <h1><Blink>Note: Page under construction</Blink></h1>
            <h1><A1>Hi,</A1> <A2>the</A2> <A3>name's</A3> <A4>Adarsh</A4></h1>
            <h3><Wrapper><A5>I</A5> <A6>Code</A6></Wrapper></h3>
            <h3><Wrapper><A5>I</A5> <A6>Design</A6></Wrapper></h3>
            <h3><Wrapper><A5>I</A5> <A6>take Photo</A6></Wrapper></h3>
            <h3><Wrapper><A5>I</A5> <A6>Edit</A6></Wrapper></h3>
        </div>
    )
}

const animation = keyframes`
    0% { opacity: 0; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(10px); }
    25% { opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px); }
    75% { opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px); }
    100% { opacity: 100; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px); }
`

const BlinkAnimation = keyframes`
    0% { opacity: 0; color: black; }
    50% { opacity: 0.5; }
    100% { opacity: 1; color: red; }
`
const Blink = styled.span`
    opacity: 0;
    animation-name: ${BlinkAnimation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-iteration-mode: infinite;
`

const A1 = styled.span`
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 3s;
    animation-fill-mode: forwards;
`
const A2 = styled.span`
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 7s;
    animation-fill-mode: forwards;
`
const A3 = styled.span`
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 8s;
    animation-fill-mode: forwards;
`
const A4 = styled.span`
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 9s;
    animation-fill-mode: forwards;
`
const A5 = styled.span`
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 10s;
    animation-fill-mode: forwards;
`
const A6 = styled.span`
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 11s;
    animation-fill-mode: forwards;
`
const Wrapper = styled.span`
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 11s;
    animation-fill-mode: forwards;
`