import React, { useState, useContext, useEffect } from 'react'
import { useParams } from "react-router-dom";

import styled from 'styled-components';
import Swal from "sweetalert2";

import $ from "jquery";

import "../assets/root.css";

// 파이어베이스 설정의 firestore 임포트
import {db} from "../index.js"
import {storage} from "../index.js"
import { AuthContext } from "../models/ContextProvider.js"
import firebase from "firebase/app";

function WritingEdit(){

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
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [price, setPrice] = useState("");
    const Day = new Date();
    const ToDay = Day.toDateString();

    // useContext hook을 통해 배포한 auth객체
    const { user, list } = useContext(AuthContext);

    const [item, setItem ] = useState({});

    const {id} = useParams();

    useEffect(() => {
        const dbRef =  db.collection("product");
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

    console.log(item)

    useEffect(() => {
        $('#title').val(item.이름)
        $('#subtitle').val(item.설명)
        $('#price').val(item.가격)
    }, [item])
    
    // 올리기 버튼 클릭 시 함수 실행
    // dbdml product 컬렉션에 오브젝트 자료형으로 .add를 통해 데이터 업로드
    function PushUpload(){
        const file = document.querySelector('#file').files[0];
        const storageRef = storage.ref();
        const saveRoute = storageRef.child('image/' + file.name);
        const saveLoad = saveRoute.put(file)

        saveLoad.on('state_changed',
        // 변화시 동작하는 함수
        null,
        //에러시 동작하는 함수
        (error) => {
            console.error('Error', error);
        },
        // 성공시 동작하는 함수
        () => {
           saveLoad.snapshot.ref.getDownloadURL().then((url) => {
           console.log('업로드 경로', url);
           db.collection("product").doc(id).update({
            이름 : title,
            설명 : subTitle,
            가격 : price,
            날짜 : ToDay,
            URL : url,
            uid : user.uid,
            id : list.length + 1
        }).then((result) => {
                console.log(result)
                Swal.fire({
                    icon: "success",
                    title: "수정 성공!",
                    text: "상품 게시글 수정을 완료했습니다."
                  }).then((res) => {
                      window.location.replace(`/detail/${id}`);
                  })
            }).catch((err) => {
                console.log("Error", err)
            })
          });
        }
    );
    }

    // (제이쿼리) 파일 업로드 버튼 경로 보여주기
    $("#file").on('change',function(){
        var fileName = $("#file").val();
        $(".upload-name").val(fileName);
      });

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
                <Price_Text
                id="price"
                type="text"
                placeholder="수정 할 가격을 입력하세요"
                onChange={(e) => {
                    setPrice(e.target.value);
                }}
                />
                
            <div class="filebox">
                <input class="upload-name" value="* 첨부파일" placeholder="첨부파일" />
                <label for="file">파일찾기</label> 
                <input type="file" id="file" />
            </div>
                <Upload_Button onClick={PushUpload}>수정하기</Upload_Button>
            </Form> : notRoad()
            }
            
        </Container>
    )
}

export default WritingEdit;

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
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
    margin-bottom: 50px;
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
