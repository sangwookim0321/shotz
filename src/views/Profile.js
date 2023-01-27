import React, { useContext } from 'react';

import styled from "styled-components"
import Swal from "sweetalert2";
import "../assets/root.css"

import { AuthContext } from "../models/ContextProvider.js"

import { MdPayment } from "react-icons/md";
import { MdLocalShipping } from "react-icons/md";
import { GiTalk } from "react-icons/gi";
import { FaBoxOpen } from "react-icons/fa";

function Profile(){

    function notRoad(){
        Swal.fire({
            icon: "warning",
            title: "접근 불가!",
            text: "회원 페이지 입니다. 로그인 후 이용 바랍니다."
          }).then((res) => {
              window.location.replace("/")
          })
      }
    
    const { user } = useContext(AuthContext);

    return(
        <Container>
            {
                user ? 
            <Inner_Box>
                <Title_Text_Box>
                    <Title_Text>마이샷츠</Title_Text>
                </Title_Text_Box>
                <Content_Box>
                    <Content_01>
                        <User_Info_Box>
                            <User_Info_Label>아이디</User_Info_Label>
                            <User_Info_Text>{user.email}</User_Info_Text>
                            <User_Info_Button>계정</User_Info_Button>
                        </User_Info_Box>
                        <User_Info_Box>
                            <User_Info_Label>닉네임</User_Info_Label>
                            <User_Info_Text>{user.displayName}</User_Info_Text>
                            <User_Info_Button>인증</User_Info_Button>
                        </User_Info_Box>
                        <User_Info_Box>
                            <User_Info_Label>등급</User_Info_Label>
                            <User_Info_Text>
                                {
                                    user && user.uid == "HxsEV1xY6lXYPjINIIBY86Tk0df1" ? <User_Info_Text>Root</User_Info_Text> : <User_Info_Text>일반회원</User_Info_Text>
                                }
                            </User_Info_Text>
                            <User_Info_Button>쿠폰</User_Info_Button>
                        </User_Info_Box>
                    </Content_01>
                    <Content_02>
                        <Content_Col>
                            <Content_Icon_Box>
                                <Icon_01/>
                                <Icon_Text>입금/결제</Icon_Text>
                            </Content_Icon_Box>
                            <Content_Icon_Box>
                                <Icon_02/>
                                <Icon_Text>배송조회</Icon_Text>
                            </Content_Icon_Box>
                        </Content_Col>
                        <Content_Col>
                            <Content_Icon_Box>
                                <Icon_03/>
                                <Icon_Text>취소/교환/환불</Icon_Text>
                            </Content_Icon_Box>
                            <Content_Icon_Box>
                                <Icon_04/>
                                <Icon_Text>배송완료</Icon_Text>
                            </Content_Icon_Box>
                        </Content_Col>
                    </Content_02>
                </Content_Box>
            </Inner_Box> : notRoad()
            }
        </Container>
    )
}

export default Profile;

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 54px;
`

const Inner_Box = styled.div`
    display:flex;
    flex-direction:column;
    width: 1200px;
    height: 500px;
    @media screen and (max-width: 1250px){
        padding: 16px;
    }
    @media screen and (max-width: 870px){
        width: 100%;
        height: 100%;
        padding: 16px;
    }
`

const Title_Text_Box = styled.div`
    display: flex;
    align-items: flex-end;
    padding-top: 50px;
    width: 100%;
    height: 20%;
    @media screen and (max-width: 870px){
    }
`

const Title_Text = styled.span`
    font-size: 36px;
    font-weight: bold;
    font-family: var(--font-family-noto);
`

const Content_Box = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 870px){
        flex-direction: column;
    }
`

const Content_01 = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
    @media screen and (max-width: 870px){
        width: 100%;
        margin: 50px 0px 50px 0px;
    }
`

const Content_02 = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    @media screen and (max-width: 870px){
        width: 100%;
        margin-bottom: 50px;
    }
`

const User_Info_Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 20%;
    &:nth-child(2){
        border-top: 1px solid var(--font-color-light-gray);
        border-bottom: 1px solid var(--font-color-light-gray);
    }
    @media screen and (max-width: 870px){
        margin-bottom: 12px;
    }
`

const User_Info_Label = styled.span`
    width:20%;
    font-size: 16px;
    font-family: var(--font-family-noto);
    color: var(--font-color-grayU);
`
const User_Info_Text = styled.span`
    width:60%;
    font-size: 16px;
    font-family: var(--font-family-noto);
`
const User_Info_Button = styled.button`
    width:20%;
    width:80px;
    height: 40px;
    margin-right: 10px;
    border-radius: 4px;
    border-style: none;
    background-color: var(--font-color-black);
    color: var(--font-color-white);
    font-weight: bold;
    font-family: var(--font-family-noto);
    cursor: pointer;
    &:hover{
        color: #ee0979;
    }
`

const Content_Col = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
`

const Content_Icon_Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    cursor: pointer;
    &:hover{
        color: var(--font-color-yello);
    }
    @media screen and (max-width: 870px){
        margin-bottom: 50px;
    }
`

const Icon_01 = styled(MdPayment)`
    width:80px;
    height:80px;
`
const Icon_02 = styled(MdLocalShipping)`
    width:80px;
    height:80px;
`
const Icon_03 = styled(GiTalk)`
    width:80px;
    height:80px;
`
const Icon_04 = styled(FaBoxOpen)`
    width:80px;
    height:80px;
`

const Icon_Text = styled.span`
    color: var(--font-color-grayU);
    font-size: 20px;
    font-family: var(--font-family-noto);
`