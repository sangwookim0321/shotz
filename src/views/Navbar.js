// CSS
import "../assets/Navbar.css";

// 모듈
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

// 아이콘 및 이미지
import { ReactComponent as NavSearch } from "../assets/icons/nav_search.svg";
import { ReactComponent as NavHamburger } from "../assets/icons/nav_bars.svg";

// NavBar의 사이드메뉴를 위한 컴포넌트
import SideBar from "./SideBar.js";
import Modal from "./Modal.js";
import FindPassModal from "./FindPassModal.js";

import { AuthContext } from "../models/ContextProvider.js"
import { auth } from "../index.js";

import { BsFillTriangleFill } from "react-icons/bs";

function Navbar() {
  //상단 네비게이션바 스크롤 상태
  const [show, setShow] = useState(false);
  //네비게이션바의 햄버거 메뉴 상태
  const [sidebar, setSideBar] = useState(false);
  //로그인-회원가입 모달창 상태
  const [modal, setModal] = useState(false);
  //비밀번호 찾기 모달창 상태 
  const [findPassModal, setFindPassModal] = useState(false);

  // useContext hook을 통해 배포한 auth객체
  const { user } = useContext(AuthContext);

  // 화면 렌더링 후 스크롤의 값에 따라 true or false를 state에 넣음
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  // SideBar의 현재상태를 반전시켜 반환함 (초기값 false > true)
  const onSideBarStateChange = () => {
    setSideBar((v) => !v);
  };

  // 로그인 Modal 창의 상태 반전(모달창 오픈시 사이드바는 Off)
  const onUserModalStateChange = () => {
    setModal((v) => !v);
    setSideBar(false);
  };

  // 로그인 Modal 창에서 비밀번호 찾기 Modal창 오픈시
  // 로그인 Modal창, 사이드바는 Off로 만들고 
  // 비밀번호 찾기 Modal창을 On상태로 만듬
  const onFindPassWord = () => {
    setModal((v) => !v);
    setSideBar(false);
    setFindPassModal((v) => !v);
  }

  // 비밀번호 찾기 Modal 창에서 onClose Props를 받아오면
  // 비밀번호 찾기 모달창의 상태를 False로 바꿔 Off시킴
  const onFindPassStateChange = () => {
    setFindPassModal((v) => !v);
  }

  // 로그아웃
  const logout = () => {
    auth.signOut();
  }

  // 최상단으로 이동
  const GoTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }

  // NavBar의 닉네임에 마우스 올릴 시, 마우스 떠날 시
  // 활성화 비활성화 코드
  // 드롭다운 메뉴의 활성화 여부
  const [active, setActive] = useState(false);
  const onActive = () => {
    setActive(true);
  }
  const offActive = () => {
    setActive(false);
  }

  return (
    <div className="container">
      <nav className={`nav ${show && "nav_scroll"}`}>
        <span className="nav_logo" onClick={() => window.location.replace("/")}>
          Shotz
        </span>

        <div className={`nav_menu ${show && "nav_change"}`}>
          <Link as={Link} to="/store">
            <span>스토어</span>
          </Link>
          <Link as={Link} to="/cart">
            <span>마이룩</span>
          </Link>
          <Link as={Link} to="/about">
            <span>파트너스</span>
          </Link>

          {/* 유저가 존재하고 유저의 uid(관리자)가 일치하면 상품등록 버튼을 보여줌 */}
          {
            user && user.uid == "HxsEV1xY6lXYPjINIIBY86Tk0df1" ? <Link as={Link} to="/writing"><span className="product_span">상품등록</span></Link> : null
          }

          {
            user && user.uid == "HxsEV1xY6lXYPjINIIBY86Tk0df1" ? <Link as={Link} to="/writingnote"><span className="product_span">공지등록</span></Link> : null
          }

        </div>

        <BsFillTriangleFill onClick={GoTop} className="TopBar" />

        <div className={`nav_right ${show && "nav_change"}`}>
          {/* <NavSearch className="icon_search" width={25} height={25} fill="" /> */}

          {
            !!user ? <span onMouseLeave={offActive} onMouseEnter={onActive} className="nav_login nav_name">{user.displayName}</span> : <span className="nav_login" onClick={onUserModalStateChange}>
            로그인ㆍ가입
          </span>
          }
          
          {
            active === true ? <div onMouseLeave={offActive} onMouseEnter={onActive} className="sub_box">
            <Link as={Link} to="/">
            <span className="sub_home">HOME</span>
            </Link>
            <Link as={Link} to="/profile">
            <span className="sub_profile">Profile</span>
            </Link>
            <Link as={Link} to="/cart">
            <span className="sub_cart">Cart</span>
            </Link>
            <Link as={Link} to="/notice">
            <span className="sub_order">Notice</span>
            </Link>
            <Link as={Link} to="/service">
            <span className="sub_notice">Service</span>
            </Link>
          </div> : null
          }

          { !!user ? <span className="nav_logout" onClick={logout}>로그아웃</span> : null}
        </div>
        
        <NavHamburger
          className={`icon_hamburger ${show && "i_hamburger_change"}`}
          width={25}
          height={25}
          fill="#fff"
          onClick={onSideBarStateChange}
        />
      </nav>
      {/* // SideBar.js 의 컴포넌트에 props로 sidebar와 onClose를 전달 */}
      <SideBar
        sidebar={sidebar}
        onClose={onSideBarStateChange}
        onUserModal={onUserModalStateChange}
      />
      {/* // Modal.js 컴포넌트, modal(bool값 전달), onClose(상태반전On,Off), onFindPassWord(FindPass.js 활성화를 위한 props) */}
      {modal == true ? (
        <Modal modal={modal} onClose={onUserModalStateChange} onFindPassWord={onFindPassWord} ></Modal>
      ) : null};

      {/* // FindPassModal.js 컴포넌트, findPassModal(bool값 전달), onClose(상태반전On, Off) */}
      {findPassModal == true ? (
        <FindPassModal findPassModal={findPassModal} onClose={onFindPassStateChange} ></FindPassModal>
      ) : null};
      
    </div>
  );
}


export default Navbar;
