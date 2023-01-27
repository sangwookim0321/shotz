import React from "react"
import { Link } from "react-router-dom";

import styled from "styled-components"
import "../assets/root.css"

import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";

function Footer(){

    return(
        <Container>
            <Inner>
                <Top_Box>
                    <Top_Text_01>Shotz</Top_Text_01>
                    <Top_Text_02>
                        <Link as={Link} to="/about">
                        <Top_list_01 style={{color: "white"}}>회사소개</Top_list_01>
                        </Link>
                        <Link as={Link} to="/service">
                        <Top_list_02 style={{color: "white"}}>고객센터</Top_list_02>
                        </Link>
                        <Link as={Link} to="/notice">
                        <Top_list_03 style={{color: "white"}}>공지사항</Top_list_03>
                        </Link>
                        <Top_list_04>이용약관</Top_list_04>
                        <Link as={Link} to="/privacy">
                        <Top_list_05 style={{color: "white"}}>개인정보 처리방침</Top_list_05>
                        </Link>
                    </Top_Text_02>
                    <Top_Text_03>
                        <Top_icon_FaceBook/>
                        <Top_icon_Insta/>
                        <Top_icon_Twitter/>
                    </Top_Text_03>
                </Top_Box>
                <Bottom_Box>
                    <Bottom_Text_01>상호: (주)샷츠 / 대표: 김상우</Bottom_Text_01>
                    <Bottom_Text_02>주소:경상북도 구미시 수출대로3길 84 공단동 114</Bottom_Text_02>
                    <Bottom_Text_03>사업자등록번호 : 970-32-1-1-0000 / 통신판매업 : 제 2022-경북구미-07080호</Bottom_Text_03>
                    <Bottom_Text_04>이메일 : wlszpdl970@naver.com / 대표전화 : 1111-2222</Bottom_Text_04>
                </Bottom_Box>
            </Inner>
        </Container>
    )
}

export default Footer;

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #ee0979;
    padding-top: 20px;
    padding-bottom: 20px;
    background: -webkit-linear-gradient(left, #ee0979, #ff6a00);
    background: -moz-linear-gradient(right, #ee0979, #ff6a00);
    background: -o-linear-gradient(right, #ee0979, #ff6a00);
    background: linear-gradient(to right, #ee0979, #ff6a00);
    @media screen and (max-width: 1024px){
        padding-bottom: 30px;
    }
`

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 100%;
    font-family: var(--font-family-noto);
`

const Top_Box = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height:50%;
    @media screen and (max-width: 1024px){
        flex-direction: column;
    }
`

const Bottom_Box = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;
    height:50%;
    font-size: 14px;
    line-height:1.5;
    @media screen and (max-width: 800px){
        font-size: 12px;
    }
`

const Top_Text_01 = styled.div`
    display: flex;
    align-items: center;
    width:10%;
    height:50px;
    font-size: 32px;
    font-weight: bold;
    color: var(--font-color-white);
    @media screen and (max-width: 1024px){
        justify-content: center;
        margin-right: 16px;
    }
`
const Top_Text_02 = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    width:50%;
    height:50px;
    color: var(--font-color-white);
    @media screen and (max-width: 1024px){
        flex-direction: column;
        align-items: center;
        line-height: 1.5;
        height: 100%;
    }
`
const Top_Text_03 = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width:40%;
    height:50px;
    @media screen and (max-width: 1024px){
        justify-content: center;
    }
`

const Top_list_01 = styled.span`
    margin-right: 20px;
    cursor: pointer;
`
const Top_list_02 = styled.span`
    margin-right: 20px;
    cursor: pointer;
`
const Top_list_03 = styled.span`
    margin-right: 20px;
    cursor: pointer;
`
const Top_list_04 = styled.span`
    margin-right: 20px;
    cursor: pointer;
`
const Top_list_05 = styled.span`
    font-weight: bold;
    margin-right: 20px;
    cursor: pointer;
`

const Top_icon_FaceBook = styled(AiFillFacebook)`
    width: 25px;
    height: 25px;
    margin-right: 20px;
    color: var(--font-color-white);
    cursor: pointer;
    &:hover{
        color: var(--font-color-light-black);
    }
`
const Top_icon_Insta = styled(AiFillInstagram)`
    width: 25px;
    height: 25px;
    margin-right: 20px;
    color: var(--font-color-white);
    cursor: pointer;
        &:hover{
        color: var(--font-color-light-black);
    }
`
const Top_icon_Twitter = styled(AiFillTwitterSquare)`
    width: 25px;
    height: 25px;
    margin-right: 20px;
    color: var(--font-color-white);
    cursor: pointer;
        &:hover{
        color: var(--font-color-light-black);
    }
`

const Bottom_Text_01 = styled.span`
    display: flex;
    align-items: center;
    width:100%;
    color: var(--font-color-white);
`
const Bottom_Text_02 = styled.span`
    display: flex;
    align-items: center;
    width:100%;
    color: var(--font-color-white);
`

const Bottom_Text_03 = styled.span`
    display: flex;
    align-items: center;
    width:100%;
    color: var(--font-color-white);
`

const Bottom_Text_04 = styled.span`
    display: flex;
    align-items: center;
    width:100%;
    color: var(--font-color-white);
`
