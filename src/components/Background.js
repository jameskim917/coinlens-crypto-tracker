import React from 'react';
import styled from "styled-components"
import WaveA from "../assets/WaveA.svg"
import WaveB from "../assets/WaveB.svg"
import WaveC from "../assets/WaveC.svg"


function Background() {
    return (
        <Wrapper>
            <Img src={WaveA} style={{top: '30px'}}/>
            <Img src={WaveB} style={{top: '20px'}}/>
            <Img src={WaveC} style={{top: '80px'}}/>
            
        </Wrapper>
    )
}
const Wrapper = styled.div`
    position: relative;
`
const Img = styled.img`
    position: absolute;
    width: 100%;
    z-index: -1;
`

export default Background
