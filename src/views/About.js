import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import styled from "styled-components"
import "../assets/root.css"

import { IoIosPeople } from "react-icons/io";
import { BiCloset } from "react-icons/bi";
import { GrLineChart } from "react-icons/gr";

import KakaoMapScript from "../models/kakaomap.js";

function About(){

    // 카카오 맵 스크립트 실행
    useEffect(() => {
        KakaoMapScript();
    }, [])

    return(
        <Container>
            <Main_Box>
                <Main_Left_Box>
                    <Left_Text>Shotz</Left_Text>
                    <Left_Text_01>미니멀리즘을 추구하는</Left_Text_01>
                    <Left_Text_02>대한민국 남성 쇼핑몰 입니다.</Left_Text_02>
                    <Link as={Link} to="/store">
                    <Left_Btn>스토어 바로가기</Left_Btn>
                    </Link>
                </Main_Left_Box>
                <Main_Right_Box>
                        <Right_Img_02/>
                </Main_Right_Box>
            </Main_Box>

            <Main_Box_mid>
                <Main_Box_mid_Center>
                    <Main_mid_Img/>
                </Main_Box_mid_Center>
                <Main_mid_Text>
                    매일 업데이트 되는 신상과<br/>
                    최고의 할인율
                </Main_mid_Text>
            </Main_Box_mid>

            <Main_Box_Bottom>
                <Main_Box_Bottom_Icon_box>
                    <Icon_Circle>
                        <Bottom_Icon_01/>
                    </Icon_Circle>
                    <Icon_Circle>
                        <Bottom_Icon_02/>
                    </Icon_Circle>
                    <Icon_Circle>
                        <Bottom_Icon_03/>
                    </Icon_Circle>
                </Main_Box_Bottom_Icon_box>

                <Bottom_Text_Box>
                    <Bottom_Text>
                        (주)샷츠는 MZ세대의 중심에서 지속적인 성장을 하여<br/>
                        고객에게 최고의 패션 파트너가 되기를 목표합니다.
                    </Bottom_Text>
                </Bottom_Text_Box>
            </Main_Box_Bottom>

            <Location_Box>
                <Location_Map>
                    <div id='myMap' style={{
                    width: '100%',
                    height: '100%'
                    }}></div>
                </Location_Map>
                <Partner_Card>
                    <Partner_Card_Text>Address. 경상북도 구미시 수출대로3길 84 공단동 114 이노점프관</Partner_Card_Text>
                    <Partner_Card_Text>Call. +82 010-7744-4982</Partner_Card_Text>
                    <Partner_Card_Text>E-mail. wlszpdl970@naver.com</Partner_Card_Text>
                </Partner_Card>
            </Location_Box>

        </Container>
    )
}

export default About;

const Partner_Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    height: 100%;
    line-height: 1.5;
`

const Partner_Card_Text = styled.span`
    display: flex;
    font-family: var(--font-family-noto);
    color: var(--font-color-grayU);
    font-size: 20px;
    @media screen and (max-width: 500px){
        font-size: 14px;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 54px;
`

const Main_Box = styled.div`
    display: flex;
    width: 100%;
    height: 800px;
    @media screen and (max-width: 900px){
        flex-direction: column;
        justify-content:center;
        align-items: center;
    }
`

const Main_Left_Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    @media screen and (max-width: 413px){
        width: 100%;
    }
`

const Main_Right_Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    @media screen and (max-width: 900px){
        width: 100%;
        margin-right: 80px;
        margin-bottom: 30px;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 413px){
        margin-right: 150px;
    }
`

const Left_Text = styled.span`
    display:flex;
    line-height: 1.4;
    font-size: 56px;
    font-weight: bold;
    font-family: var(--font-family-noto);
    background: #ee0979;
    background: -webkit-linear-gradient(left, #ee0979, #ff6a00);
     background: -moz-linear-gradient(right, #ee0979, #ff6a00);
    background: -o-linear-gradient(right, #ee0979, #ff6a00);
     background: linear-gradient(to right, #ee0979, #ff6a00);
    -webkit-background-clip: text;
    background-clip: text;
     color: transparent;
     @media screen and (max-width: 900px){
        font-size:48px;
    }
    @media screen and (max-width: 700px){
        font-size:38px;
    }
    @media screen and (max-width: 413px){
        font-size:34px;
    }
`

const Left_Text_01 = styled.span`
    display:flex;
    line-height: 1.4;
    font-size: 36px;
    font-weight: bold;
    font-family: var(--font-family-noto);
    @media screen and (max-width: 900px){
        font-size: 26px;
    }
        @media screen and (max-width: 700px){
        font-size:20px;
    }
    @media screen and (max-width: 413px){
        font-size:20px;
    }
`
const Left_Text_02 = styled.span`
    display:flex;
    line-height: 1.4;
    font-size: 36px;
    font-weight: bold;
    font-family: var(--font-family-noto);
    @media screen and (max-width: 900px){
        font-size: 26px;
    }
        @media screen and (max-width: 700px){
        font-size:20px;
    }
    @media screen and (max-width: 413px){
        font-size:20px;
    }
`

const Left_Btn = styled.button`
    width: 160px;
    height:60px;
    margin-top: 12px;
    border-radius: 20px;
    background-color: black;
    border-style: none;
    font-size: 20px;
    color:white;
    font-weight: bold;
    font-family: var(--font-family-noto);
    cursor: pointer;
    &:hover{
        background-color: #ee0979;
    }
    @media screen and (max-width: 900px){
        width: 140px;
        height: 50px;
        font-size: 18px;
    }
        @media screen and (max-width: 700px){
            width: 120px;
            height: 40px;
            font-size: 14px;
    }
    @media screen and (max-width: 413px){
        width: 120px;
        height: 40px;
        font-size:14px;
    }
`

const Right_Img_02 = styled.div`
    width: 500px;
    height: 540px;
    background-image: url("./shoes_items/l2.png");
`

const Main_Box_mid = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 800px;
    padding: 30px 0px 30px 0px;
    background-color: var(--font-color-light-gray);
`

const Main_Box_mid_Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const Main_mid_Img = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 16px;
    background-image: url("./shoes_items/l0.gif");
`

const Main_mid_Text = styled.span`
    display:flex;
    line-height: 1.2;
    text-align: center;
    font-size: 48px;
    font-weight: bold;
    font-family: var(--font-family-noto);
    margin-bottom: 30px;
    @media screen and (max-width: 900px){
        font-size: 36px;
    }
    @media screen and (max-width: 413px){
        font-size: 26px;
    }
`

const Main_Box_Bottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
    padding: 200px 0px 100px 0px;
`

const Main_Box_Bottom_Icon_box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 100%;
    @media screen and (max-width: 900px){
        width: 100%;
    }
`

const Icon_Circle = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: var(--font-color-light-gray);
    @media screen and (max-width: 900px){
        width: 120px;
        height: 120px;
    }
    @media screen and (max-width: 413px){
        width: 100px;
        height: 100px;
    }
`

const Bottom_Icon_01 = styled(IoIosPeople)`
    display: flex;
    width: 100px;
    height: 100px;
    @media screen and (max-width: 900px){
        width: 80px;
        height: 80px;
    }
    @media screen and (max-width: 413px){
        width: 60px;
        height: 60px;
    }
`
const Bottom_Icon_02 = styled(BiCloset)`
    display: flex;
    width: 100px;
    height: 100px;
    @media screen and (max-width: 900px){
        width: 80px;
        height: 80px;
    }
    @media screen and (max-width: 413px){
        width: 60px;
        height: 60px;
    }
`
const Bottom_Icon_03 = styled(GrLineChart)`
    display: flex;
    width: 90px;
    height: 90px;
    @media screen and (max-width: 900px){
        width: 80px;
        height: 80px;
    }
    @media screen and (max-width: 413px){
        width: 60px;
        height: 60px;
    }
`

const Bottom_Text_Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const Bottom_Text = styled.span`
    display: flex;
    line-height: 1.2;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    font-family: var(--font-family-noto);
    @media screen and (max-width: 900px){
        font-size: 20px;
    }
    @media screen and (max-width: 413px){
        font-size: 18px;
    }
`

const Location_Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
`

const Location_Map = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
`

