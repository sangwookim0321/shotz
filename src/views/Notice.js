import React, {useContext} from "react"
import { Link } from "react-router-dom";

import styled from "styled-components";
import "../assets/root.css";

import { AuthContext } from "../models/ContextProvider.js";

import {db} from '../index.js';

function Notice(){

    const { user, noticelist } = useContext(AuthContext);

    const noticeDataList = db.collection("notice")

    // 삭제하기 버튼 클릭 시 클릭 한 게시글id를 파라미터(v) 로 받은 후 
    // 해당 v를 notice 컬렉션에서 삭제함
    const onDelete = (v) => {
        noticeDataList.doc(v).delete();
    }

    return(
        <Container>
            <Inner_Box>
                <Title_Text_Box>
                    <Title_Text>공지사항</Title_Text>
                </Title_Text_Box>
                {
                    noticelist.map((item) => {
                        return(
                            <Notice_Box>
                                <Date_Text>{item.날짜}</Date_Text>
                            <Notice_Title_Box>
                                <Notice_Title_Text>{item.제목}</Notice_Title_Text>
                                {
                                    user && user.uid == "HxsEV1xY6lXYPjINIIBY86Tk0df1" ? 
                                    <Admin_Button>
                                    <Link as={Link} to={`/noteedit/${item.id}`}>
                                    <Update_Button style={{marginRight: '8px'}}>수정하기</Update_Button>
                                    </Link>
                                    <Delete_Button onClick={(v) => {onDelete(item.id)}}>삭제하기</Delete_Button>
                                    </Admin_Button> : null
                                }
                            </Notice_Title_Box>
                            <Notice_SubTitle_Box>
                                <Notice_SubTitle_Text>{item.내용}</Notice_SubTitle_Text>
                            </Notice_SubTitle_Box>
                            </Notice_Box>
                        )
                    })
                }
            </Inner_Box>
        </Container>
    )
}

export default Notice;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 54px;
    background-color: var(--font-color-light-black);
`

const Inner_Box = styled.div`
    display:flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    @media screen and (max-width: 500px){
        width: 80%;
    }
`

const Title_Text_Box = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding: 50px 0px 50px 0px;
    @media screen and (max-width: 900px){
        justify-content: center;
    }
`

const Title_Text = styled.span`
    font-size: 36px;
    font-weight: bold;
    font-family: var(--font-family-noto);
    color: var(--font-color-white);
`

const Notice_Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 150px;
    margin-bottom: 50px;
    color: var(--font-color-white);
`

const Notice_Title_Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    @media screen and (max-width: 900px){
        flex-direction: column;
        justify-content: space-around;
        height: 80px;
    }
`

const Notice_SubTitle_Box = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    line-height: 1.5;
    border-radius:4px;
    border : 2px solid var(--font-color-grayU);
`

const Notice_Title_Text = styled.span`
    font-size: 20px;
    font-weight: bold;
    font-family: var(--font-family-noto);
`

const Notice_SubTitle_Text = styled.span`
    font-size: 16px;
    font-family: var(--font-family-noto);
`

const Date_Text = styled.span`
    font-size: 14px;
    font-family: var(--font-family-noto);
    @media screen and (max-width: 900px){
        display: flex;
        justify-content: center;
    }
`

const Admin_Button = styled.div`
    display: flex;
`
const Delete_Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 30px;
    border-style: none;
    border-radius: 4px;
    color: #fff;
    background-color: var(--font-color-black);
    font-weight: bold;
    font-family: var(--font-family-noto);
    cursor: pointer;
    &:hover {
    background-color: #dc086f;
  }
`

const Update_Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 30px;
    border-style: none;
    border-radius: 4px;
    color: #fff;
    background-color: var(--font-color-black);
    font-weight: bold;
    font-family: var(--font-family-noto);
    cursor: pointer;
    &:hover {
    background-color: #dc086f;
  }
`