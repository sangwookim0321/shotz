import React, { useState, useContext, useEffect } from 'react'
import { useParams } from "react-router-dom";

import styled from 'styled-components';
import Swal from "sweetalert2";

import $ from "jquery";

import "../assets/root.css";

// 파이어베이스 설정의 firestore 임포트
import {db} from "../index.js"
import { AuthContext } from "../models/ContextProvider.js"
import firebase from "firebase/app";

function NoteEdit(){

    // uid가 지정한 uid가 아니면 페이지 접근 불가
    function notRoad(){
        Swal.fire({
            icon: "warning",
            title: "접근 불가!",
            text: "관리자 페이지 입니다."
          }).then((res) => {
              window.location.replace("/")
          })
      }

    // 상품 추가 input박스 텍스트 상태
    const [title, setTitle] = useState("")
    const [subTitle, setSubTitle] = useState("")
    const Day = new Date()
    const ToDay = Day.toDateString();

    // useContext hook을 통해 배포한 auth객체
    const { user, noticelist } = useContext(AuthContext);

    // notice 컬렉션에서 클릭 한 타겟의 상품을 담을 State
    const [item, setItem ] = useState({});

    const {id} = useParams();

    // firestore에서 notice 컬렉션에서 동일한 문서id를 찾은 후 item에 담음
    useEffect(() => {
        const dbRef =  db.collection("notice");
        dbRef
        .where(firebase.firestore.FieldPath.documentId(), "==", id)
        .get()
        .then((query) => {
            const item = query.docs.map(item => item.data())
            setItem(...item)
        })
        .catch((error) => {
            console.log("Error", error);
        });
	}, [id]);

    // 수정페이지의 input에 기존에 있던 value를 대입시킴
    useEffect(() => {
        $('#title').val(item.제목)
        $('#subtitle').val(item.내용)
    }, [item])

    // 올리기 버튼 클릭 시 함수 실행
    // notice 컬렉션에 동일한 id 문서를 업데이트
    function PushUpload(){
           db.collection("notice").doc(id).update({
            제목 : title,
            내용 : subTitle,
            날짜 : ToDay,
        }).then((result) => {
            Swal.fire({
                icon: "success",
                title: "수정 성공!",
                text: "공지사항 게시글 수정을 완료했습니다."
              }).then((res) => {
                  window.location.replace("/notice");
              })
            }).catch((err) => {
                console.log("Error", err)
            })
    }

    return(
        <Container>
            {
                user && user.uid == "HxsEV1xY6lXYPjINIIBY86Tk0df1" ? <Form>
                <Title_Text
                id="title"
                type="text"
                placeholder="수정 할 제목을 입력하세요"
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
                />
                <Subtitle_Text
                id="subtitle"
                type="text"
                placeholder="수정 할 내용을 입력하세요"
                onChange={(e) => {
                    setSubTitle(e.target.value);
                }}
                />
                <Upload_Button onClick={PushUpload}>수정하기</Upload_Button>
            </Form> : notRoad()
            }
        </Container>
    )
}

export default NoteEdit;

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 500px;
    margin-top: 55px;
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 100%;
`

const Title_Text = styled.input`
    width: 500px;
    height: 40px;
    margin-top: 50px;
    border: 2px solid var(--font-color-black);
    border-radius:8px;
    outline-color: #dc086f;
    @media screen and (max-width: 550px){
        width: 400px;
    }
`

const Subtitle_Text = styled.input`
    width: 500px;
    height: 100px;
    margin-top: 50px;
    border: 2px solid var(--font-color-black);
    border-radius:8px;
    outline-color: #dc086f;
    @media screen and (max-width: 550px){
        width: 400px;
    }
`

const Price_Text = styled.input`
    width: 500px;
    height: 40px;
    margin-top: 50px;
    border: 2px solid var(--font-color-black);
    border-radius:8px;
    outline-color: #dc086f;
    @media screen and (max-width: 550px){
        width: 400px;
    }
`

const File_Button = styled.input`
    width: 200px;
    height: 40px;
    margin-top: 50px;
    
`

const Upload_Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    width: 100px;
    height: 50px;
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
