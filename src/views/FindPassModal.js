import React, { useState } from "react";
import styled from "styled-components";
import "../assets/root.css"

import classnames from "classnames"; // 조건에 따른 class 추가 라이브러리
import Swal from "sweetalert2";

import { AiOutlineClose } from "react-icons/ai";

import {auth} from "../index.js";

function FindPassModal({ findPassModal, onClose }) {

  // 이메일주소 변수
  const [Email, setEmail] = useState("");

  // 비밀번호 변경 버튼 클릭 시 입력한 input의 target value를 Email변수에 넣고
  // 해당 이메일로 비밀번호 변경 요청을 보냄
  const findPassWord = () => {
    if(Email === ""){
      Swal.fire({
        icon: "warning",
        title: "요청 실패!",
        text: "이메일을 입력해주세요."
      })
    }
    auth.sendPasswordResetEmail(Email).then((result) => {
      Swal.fire({
        icon: "success",
        title: "요청 성공!",
        text: "입력하신 이메일로 비밀번호 재설정 요청을 보냈습니다."
      })
      console.log(Email, "로 비밀번호 변경 요청 완료", result)
    }).catch((err) => {
      console.log("Error", err)
    })
  }

  return (
    <>
      <Container className={classnames("Modal", { open: findPassModal })}>
        <ModalComponent>
          <Box1>
            <FindPass_Label>비밀번호 재설정</FindPass_Label>
            <Close onClick={onClose} />
          </Box1>
          <Box2>
            <FindPass_Label_02>가입하신 이메일을 입력하시면 <br/>비밀번호 재설정 메일을 발송합니다.</FindPass_Label_02>
            <Login_form className="login_box">
              <Login_id
                className="user_id"
                type="email"
                placeholder="이메일 주소"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Login_submit onClick={findPassWord}>비밀번호 변경 요청</Login_submit>
            </Login_form>
          </Box2>
        </ModalComponent>
      </Container>
      <Screen className={classnames({ open: findPassModal })} onClick={onClose} />;
    </>
  );
}

export default FindPassModal;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100vh;
`;

const ModalComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 400px;
  height: 300px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.5) 1px 2px 15px 5px;
  border-radius: 10px;
  z-index: 5;
`;

const Screen = styled.div`
  //B
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 4;
  display: none;
  &.open {
    display: block;
  }
`;
// 닫는 버튼
const Close = styled(AiOutlineClose)`
  display: flex;
  width: 30px;
  height: 30px;
  padding: 8px;
  cursor: pointer;
  color: #dedee0;
  transition: all 0.3s ease;
  &:hover {
    color: #c0c0c0;
    transform: rotate(180deg);
  }
`;

//모달 컴포넌트 내부 UI (위 ~ 아래 순서)
const Box1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #efefef;
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 200px;
`;

const FindPass_Label = styled.label`
  display:flex;
  font-weight: bold;
  font-family: var(--font-family-noto);
  padding-left: 45px;
`

const FindPass_Label_02 = styled.label`
  display:flex;
  font-family: var(--font-family-noto);
  padding-left: 45px;
  line-height: 1.2;
`

// Box2 컴포넌트 내부 UI
const Login_form = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 320px;
`;
// 이메일 인풋
const Login_id = styled.input`
  display: flex;
  height: 50px;
  border-style: none;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 18px;
  margin-bottom: 20px;
`;

//로그인 버튼
const Login_submit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-style: none;
  border-radius: 4px;
  color: #fff;
  background-color: #ee0979;
  font-weight: bold;
  font-family: var(--font-family-noto);
  cursor: pointer;
  &:hover {
    background-color: #dc086f;
  }
`;
