import React,{useContext} from "react";
import styled from "styled-components";
import "../assets/root.css";

import classnames from "classnames"; // 조건에 따른 class 추가 라이브러리
import { AiOutlineClose } from "react-icons/ai";

import { AuthContext } from "../models/ContextProvider.js"
import { auth } from "../index.js";
import { Link } from "react-router-dom";

function SideBar({ sidebar, onClose, onUserModal }) {

  const { user } = useContext(AuthContext); // useContext를 통해 AuthContext에서 user 객체를 받아옴

  // 로그아웃
  const logout = () => {
    auth.signOut();
  }

  return (
    <>
      {/* // A.Container 스타일 컴포넌트 , 기본 class로 Sidebar가 있으며
      // sidebar가 true일경우 open이라는 class를 추가함 */}
      <Container className={classnames("Sidebar", { open: sidebar })}>
        {/* //사이드바의 X 클릭 시 Navbar 컴포넌트로 onClose 전달 */}
        <Close onClick={onClose}>
          <AiOutlineClose />
        </Close>
        <SideBarTitle_Box>
          <SideBarTitle>Shotz</SideBarTitle>
          <SideBarText>Welcome to Shotz!</SideBarText>
          <SideBarWelcomeText_Box>
        {/* 만약 user가 존재한다면(로그인성공) 보여줄 컴포넌트 */}
        {
          !!user ? null : <SideBarPlz_Login>로그인 해주세요</SideBarPlz_Login>
        }
        {
          !!user ? <SideBarWelcomeText>환영합니다! <br/> <Link as={Link} to="/profile" style={{color: "black"}}>{user.displayName}</Link> 님</SideBarWelcomeText> : <SideBarBtn onClick={onUserModal}>로그인ㆍ가입</SideBarBtn>
        }
        {
          !!user ? <SideBarLogoutBtn onClick={logout}>로그아웃</SideBarLogoutBtn> : null
        }
        
        </SideBarWelcomeText_Box>
        </SideBarTitle_Box>
        

        <div className="side_nav_menu">
          <Link as={Link} to="/store">
          <span className="side_nav_menu_01">스토어</span>
          </Link>
          <Link as={Link} to="/cart">
          <span className="side_nav_menu_02">마이룩</span>
          </Link>
          <Link as={Link} to="/about">
          <span className="side_nav_menu_03">파트너스</span>
          </Link>
          <Link as={Link} to="/notice">
          <span className="side_nav_menu_04">공지사항</span>
          </Link>
          <Link as={Link} to="/service">
          <span className="side_nav_menu_05">고객센터</span>
          </Link>
          {/* 유저가 존재하고 유저의 uid(관리자)가 일치하면 상품등록 버튼을 보여줌 */}
          {
            user && user.uid == "HxsEV1xY6lXYPjINIIBY86Tk0df1" ? <Link as={Link} to="/writing"><span style={{color:'black'}}>상품등록</span></Link> : null
          }

          {
            user && user.uid == "HxsEV1xY6lXYPjINIIBY86Tk0df1" ? <Link as={Link} to="/writingnote"><span style={{color:'black'}}>공지등록</span></Link> : null
          }
        </div>
      </Container>
      {/* B.// 사이드바가 true상태로 열렸을때 외부 화면 클릭 시 Navbar 컴포넌트로 onClose 전달 */}
      <Screen className={classnames({ open: sidebar })} onClick={onClose} />
    </>
  );
}

export default SideBar;

const Container = styled.div`
  // A
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  bottom: 0;
  right: 0;
  width: 240px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.5) 1px 2px 15px 5px;
  z-index: 5;
  transform: translateX(105%);
  transition: all 0.5s ease-in-out;
  &.open {
    transform: none;
  }
`;

// outScreen
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

// 닫는 아이콘
const Close = styled(AiOutlineClose)`
  position: fixed;
  right: 0;
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

// 상단 텍스트 박스
const SideBarTitle_Box = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 90%;
  top: 8%;
  height: 200px;
`;

// 사이드바 기본 로고 텍스트
const SideBarTitle = styled.label`
  position: relative;
  font-size: 36px;
  font-family: var(--font-family-noto);
  font-weight: bold;
  background: #ee0979;
  background: -webkit-linear-gradient(left, #ee0979, #ff6a00);
  background: -moz-linear-gradient(right, #ee0979, #ff6a00);
  background: -o-linear-gradient(right, #ee0979, #ff6a00);
  background: linear-gradient(to right, #ee0979, #ff6a00);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

// 사이드바 기본 텍스트(Welcome to Shotz!)
const SideBarText = styled.label`
  position:absolute;
  top: 50px;
  font-size: 18px;
  margin-top: 16px;
  color: var(--font-color-black);
  font-family: var(--font-family-noto);
`;

// 사이드바 비로그인 상태 시 텍스트
const SideBarPlz_Login = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-top: 6px;
  color: var(--font-color-black);
  font-family: var(--font-family-noto);
`;

// 사이드바 로그인 성공 시 출력 박스
const SideBarWelcomeText_Box = styled.div`
  display:flex;
  justify-content:center;
  position:absolute;
  text-align: center;
  top: 100px;
  width: 100%;
  line-height: 1.3;
`

// 사이드바 로그인 성공 시 출력 텍스트
const SideBarWelcomeText = styled.label`
  font-size: 18px;
  margin-top: 16px;
  color: var(--font-color-black);
  font-family: var(--font-family-noto);
`

// 사이드바 로그인 - 가입 버튼
const SideBarBtn = styled.button`
display: flex;
justify-content: center;
align-items: center;
  position: absolute;
  top: 40px;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border-style: none;
  background-color: var(--font-color-black);
  color: var(--font-color-white);
  font-weight: bold;
  font-family: var(--font-family-noto);
  cursor: pointer;
  &:hover {
    background-color: var(--font-color-hover);
  }
`;

// 사이드바 로그아웃 버튼
const SideBarLogoutBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 70px;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border-style: none;
  background-color: var(--font-color-black);
  color: var(--font-color-white);
  font-weight: bold;
  font-family: var(--font-family-noto);
  cursor: pointer;
  &:hover {
    background-color: var(--font-color-hover);
  }
`;


