import React from "react"
import styled from 'styled-components';

import "../assets/root.css";

import { IoCall } from "react-icons/io5";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiFillMail } from "react-icons/ai";

function ServiceCenter(){

    return(
        <Container>
            <Inner_Box>
                <Title_Text_Box>
                    <Title_Text>도움이 필요하신가요?</Title_Text>
                </Title_Text_Box>
                <Content_Box>
                    <Content_01>
                        <Content_Field>
                            <Content_Call/>
                        </Content_Field>
                        <Content_Text_Field>
                            <Content_Text>Call : 1577-9090</Content_Text>
                        </Content_Text_Field>
                    </Content_01>
                    <Content_02>
                        <Content_Field>
                            <Content_KaKao/>
                        </Content_Field>
                        <Content_Text_Field>
                            <Content_Text>1:1 채팅을 통해 문의사항을 <br/> 안내해드립니다.</Content_Text>
                        </Content_Text_Field>
                    </Content_02>
                    <Content_03>
                        <Content_Field>
                            <Content_Mail/>
                        </Content_Field>
                        <Content_Text_Field>
                            <Content_Text>궁금한 사항을 문의해주시면 <br/> 성실하게 답변해드립니다.</Content_Text>
                        </Content_Text_Field>
                    </Content_03>
                </Content_Box>
            </Inner_Box>
        </Container>
    )
}

export default ServiceCenter;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 54px;
`

const Inner_Box = styled.div`
    display:flex;
    flex-direction: column;
    width: 1200px;
    height: 500px;
    @media screen and (max-width: 1024px){
        height: 100%;
    }
`

const Title_Text_Box = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding-top: 100px;
    width: 100%;
    @media screen and (max-width: 1024px){
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
    }
`

const Content_Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 1024px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const Title_Text = styled.span`
    font-size: 36px;
    font-weight: bold;
    font-family: var(--font-family-noto);
`

const Content_01 = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 200px;
    border: 1px solid var(--font-color-gray);
    border-radius: 12px;
    cursor: pointer;
    @media screen and (max-width: 1024px){
        margin-bottom: 50px;
    }
`
const Content_02 = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 200px;
    border: 1px solid var(--font-color-gray);
    border-radius: 12px;
    cursor: pointer;
        @media screen and (max-width: 1024px){
        margin-bottom: 50px;
    }
`
const Content_03 = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 200px;
    border: 1px solid var(--font-color-gray);
    border-radius: 12px;
    cursor: pointer;
        @media screen and (max-width: 1024px){
        margin-bottom: 50px;
    }
`

const Content_Field = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
`
const Content_Text_Field = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
`

const Content_Call = styled(IoCall)`
    width: 50px;
    height: 50px;
    &:hover{
        color: var(--font-color-yello);
    }
`
const Content_KaKao = styled(RiKakaoTalkFill)`
    width: 50px;
    height: 50px;
    &:hover{
        color: var(--font-color-yello);
    }
`
const Content_Mail = styled(AiFillMail)`
    width: 50px;
    height: 50px;
    &:hover{
        color: var(--font-color-yello);
    }
`

const Content_Text = styled.span`
    font-size: 20px;
    font-family: var(--font-family-noto);
`