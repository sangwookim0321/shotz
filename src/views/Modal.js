import React, { useState } from "react";
import styled from "styled-components";
import "../assets/root.css"

import classnames from "classnames"; // 조건에 따른 class 추가 라이브러리
import Swal from "sweetalert2";

import { AiOutlineClose } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";

import { Link } from "react-router-dom";

import {auth} from "../index.js";

// import { RiKakaoTalkFill } from "react-icons/ri";

function Modal({ modal, onClose, onFindPassWord }) {
  // 로그인 상태 변수
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("")
//   const [errorMsg, setErrorMsg] = useState(" ");
//   const [errorPasswordMsg, setPasswordErrorMsg] = useState(" ");

// 로그인 함수
// auth 메서드 signIn메서드를 통해 Email과 Password를 파라미터로 받고 메서드 실행 후
// .then 프로미스를 실행하며 result를 결과값으로 받아낸 후 메인 화면으로 이동
const login = () => {
  auth.signInWithEmailAndPassword(loginEmail, loginPassword).then((result) => {
    console.log(result.user)
    window.location.replace("/")
  }).catch((err) => {
    Swal.fire({
      icon: "error",
      title: "로그인 실패!",
      text: "Email 또는 Password를 확인해주세요.",
    })
    console.log("error", err)
  })
}

  return (
    <>
      <Container className={classnames("Modal", { open: modal })}>
        <ModalComponent>
          
          <Box1>
            <FindPass_Label>로그인</FindPass_Label>
            <Close onClick={onClose} />
          </Box1>

          <Box2>
            <Login_form className="login_box">
              <Login_id
                className="user_id"
                type="email"
                placeholder="이메일 주소"
                onChange={(e) => {
                  setLoginEmail(e.target.value);
                }}
              />
              <Login_pass
                className="user_password"
                type="password"
                placeholder="비밀번호"
                onChange={(e) => {
                  setLoginPassword(e.target.value)
                }}
              />
              <Passicon />
              <Emailicon />
                  <Login_submit onClick={login}>이메일 로그인</Login_submit>
            </Login_form>
          </Box2>

          <Box3>
            <Findpass onClick={onFindPassWord}>비밀번호 재설정</Findpass>
            <Before>|</Before>
            <Link as={Link} to="/signup">
                <Signup onClick={onClose}>이메일 간편 회원가입</Signup>
            </Link>
          </Box3>
          {/* <Box4>
            <Kakaobtn>
              <Kakaoicon />
              카카오 로그인
            </Kakaobtn>
            <Kakaotext>KaKaoTalk 로그인시 편리한 이용이 가능합니다!</Kakaotext>
          </Box4> */}
        </ModalComponent>
      </Container>
      <Screen className={classnames({ open: modal })} onClick={onClose} />;
    </>
  );
}

export default Modal;

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

const FindPass_Label = styled.label`
  display:flex;
  font-weight: bold;
  font-family: var(--font-family-noto);
  padding-left: 45px;
`

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
  width: 100%;
  height: 200px;
  justify-content: center;
`;
const Box3 = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  height: 20px;
  font-size: 13px;
  font-family: var(--font-family-noto);
`;
const Box4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;
  margin-top: 5px;
`;

// Box2 컴포넌트 내부 UI
const Login_form = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: 320px;
`;
// 이메일 인풋
const Login_id = styled.input`
  display: flex;
  height: 30px;
  border-style: none;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  padding: 0 35px;
`;
// 비밀번호 인풋
const Login_pass = styled.input`
  display: flex;
  margin: 16px 0px 16px 0px;
  height: 30px;
  border-style: none;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  padding: 0 35px;
`;
//자물쇠 아이콘
const Passicon = styled(RiLockPasswordLine)`
  display: flex;
  position: absolute;
  top: 38.5%;
  left: 2%;
  width: 16px;
  height: 16px;
`;
// 이메일 아이콘
const Emailicon = styled(AiOutlineMail)`
  display: flex;
  position: absolute;
  top: 15%;
  left: 2%;
  width: 16px;
  height: 16px;
`;
// 카카오 아이콘
// const Kakaoicon = styled(RiKakaoTalkFill)`
//   position: absolute;
//   left: 145px;
//   width: 28px;
//   height: 28px;
// `;

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

//회원가입 버튼
const SignUp_submit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-style: none;
  border-radius: 4px;
  color: #fff;
  background-color: var(--font-color-black);
  font-weight: bold;
  font-family: var(--font-family-noto);
  cursor: pointer;
  &:hover {
    background-color: var(--font-color-hover);
  }
`;


// Box3 컴포넌트 내부 UI
const Findpass = styled.span`
  display: flex;
  color: #333;
  cursor: pointer;
  &:hover {
    color: #c0c0c0;
  }
`;
const Before = styled.label`
  display: flex;
  color: #ced4da;
`;
const Signup = styled.span`
  display: flex;
  color: #333;
  cursor: pointer;
  &:hover {
    color: #c0c0c0;
  }
`;
const Login = styled.span`
  display: flex;
  color: #333;
  cursor: pointer;
  &:hover {
    color: #c0c0c0;
  }
`;

// Box4 컴포넌트 내부 UI
// const Kakaobtn = styled.button`
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   width: 130px;
//   height: 50px;
//   border-radius: 4px;
//   border-style: none;
//   background-color: #fee500;
//   color: #333;
//   font-size: 14px;
//   font-weight: bold;
//   font-family: var(--font-family-noto);
//   cursor: pointer;
//   &:hover {
//     background-color: #f1d900;
//   }
// `;
// 카카오 로그인 버튼 아래 텍스트
// const Kakaotext = styled.span`
//   display: flex;
//   font-size: 12px;
//   font-family: var(--font-family-noto);
//   color: #ced4da;
// `;
