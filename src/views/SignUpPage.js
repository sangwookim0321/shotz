import React, { useState } from "react";

import styled from "styled-components";
import Swal from "sweetalert2";
import "../assets/root.css";

import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { MdDriveFileRenameOutline } from "react-icons/md"

import {auth} from "../index.js"

function SignUpPage(){

  // 회원가입 관련 상태변수
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerName , setRegisterName] = useState("");
    const [errorMsg, setErrorMsg] = useState(" ");
    const [errorPasswordMsg, setPasswordErrorMsg] = useState(" ");

    // 회원가입 함수
    // import한 auth함수에서 create메서드를 이용해 파라미터로 Email과 Password를 받고
    // create메서드의 실행이 끝나면 promise .then의 파라미터 결과값 result를 받고 메인페이지로 이동 
    const register = () => {
      auth.createUserWithEmailAndPassword(registerEmail, registerPassword).then((result) => {
        //유저 닉네임 변경 함수 실행
        result.user.updateProfile({displayName : registerName}).then(() => {
          Swal.fire({
            icon: "success",
            title: "가입 성공!",
            text: "환영합니다."
          }).then((res) => {
            window.location.replace("/");
          })
        })
    }).catch((err) => {
      console.log("error", err);
      Swal.fire({
        icon: "error",
        title: "가입 실패!",
        text: "회원정보를 다시 확인해주세요."
      })
    })
  }

    return(
        <Container>
            <Box1>
                <Logo>
                    SignUp!
                </Logo>
                <Box2>
            <Login_id
                type="email"
                placeholder="example@gmail.com"
                onChange={(e) => {
                  setRegisterEmail(e.target.value);
                }}
                />
                <Label_email>이메일</Label_email>

                <Emailicon />

              <Login_pass
                type="password"
                placeholder="6자 이상 비밀번호"
                onChange={(e) => {
                    setRegisterPassword(e.target.value);
                }}
              />
              <Label_pass>비밀번호</Label_pass>
              <Passicon />

              <Login_name
                type="text"
                placeholder="닉네임 입력"
                onChange={(e) => {
                  setRegisterName(e.target.value);
                }}
              />
              <Label_name>닉네임(선택)</Label_name>
              <Nameicon/>

              <SignUp_submit onClick={register} type="submit">
                회원가입
              </SignUp_submit>
                </Box2>
            </Box1>
        </Container>
    )
}

export default SignUpPage;

const Logo = styled.span`
    display: flex;
    justify-content: center;
    width: 180px;
    height: 80px;
    font-size: 48px;
    font-family: var(--font-family-dancing);
    font-weight: bold;
    background: #ee0979;
    background: -webkit-linear-gradient(left, #ee0979, #ff6a00);
    background: -moz-linear-gradient(right, #ee0979, #ff6a00);
    background: -o-linear-gradient(right, #ee0979, #ff6a00);
    background: linear-gradient(to right, #ee0979, #ff6a00);
    background-clip: text;
    color: transparent;
    -webkit-background-clip: text;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 54px;
    background-color: var(--font-color-light-black);
`

const Box1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 800px;
`
const Box2 = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-style: none;
    border: 1px solid var(--font-color-hover);
    background-color: var(--font-color-white);
    border-radius: 8px;
    width: 300px;
    height: 500px;
`

// 이메일 인풋
const Login_id = styled.input`
  display: flex;
  position: relative;
  height: 40px;
  font-size: 18px;
  background-color: var(--font-color-light-gray);
  border-style: none;
  border-bottom: 1px solid var(--font-color-more-light-gray);
  &:focus{
    border-color: #dc086f;
    outline: none;
  }
`;

// 비밀번호 인풋
const Login_pass = styled.input`
  display: flex;
  position: relative;
  margin: 40px 0px 16px 0px;
  height: 40px;
  font-size: 18px;
  background-color: var(--font-color-light-gray);
  border-style: none;
  border-bottom: 1px solid var(--font-color-more-light-gray);
  &:focus{
    border-color: #dc086f;
    outline: none;
    }
`;

// 닉네임 인풋
const Login_name = styled.input`
  display: flex;
  position: relative;
  margin: 40px 0px 16px 0px;
  height: 50px;
  font-size: 18px;
  background-color: var(--font-color-light-gray);
  border-style: none;
  border-bottom: 1px solid var(--font-color-more-light-gray);
  &:focus{
    border-color: #dc086f;
    outline: none;
    }
`;

// 비밀번호 확인 인풋
const Login_check_pass = styled.input`
  display: flex;
  position: relative;
  margin: 40px 0px 16px 0px;
  height: 40px;
  font-size: 18px;
  background-color: var(--font-color-light-gray);
  border-style: none;
  border: 1px solid var(--font-color-more-light-gray);
  &:focus{
    border-color: #dc086f;
    outline: none;
    }
`;

//회원가입 버튼
const SignUp_submit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 100px;
  height: 40px;
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
`;

// 라벨 텍스트
const Label_email = styled.label`
  position: absolute;
  top: 60px;
  left: 40px;
  font-weight: bold;
`

const Label_pass = styled.label`
  position: absolute;
  top: 150px;
  left: 40px;
  font-weight: bold;
`

const Label_name = styled.label`
  position: absolute;
  top: 250px;
  left: 40px;
  font-weight: bold;
`



// 아이콘
// 이메일 아이콘
const Emailicon = styled(AiOutlineMail)`
  display: flex;
  position: absolute;
  top: 60px;
  left: 93px;
  width: 16px;
  height: 16px;
  z-index: 1;
`;
//자물쇠 아이콘
const Passicon = styled(RiLockPasswordLine)`
  display: flex;
  position: absolute;
  top: 150px;
  left: 107px;
  width: 16px;
  height: 16px;
  z-index: 1;
`;
//닉네임 아이콘
const Nameicon = styled(MdDriveFileRenameOutline)`
  display: flex;
  position: absolute;
  top: 250px;
  left: 135px;
  width: 16px;
  height: 16px;
  z-index: 1;
`