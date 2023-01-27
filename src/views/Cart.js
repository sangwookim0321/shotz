import React,{useEffect, useState, useContext} from "react";

import "../assets/Cart.css";
import "../assets/root.css";
import Swal from "sweetalert2";

import { AuthContext } from "../models/ContextProvider.js"

function Cart(){

    const { user } = useContext(AuthContext);

    // 탭 레이아웃 on off상태
    const [activeIndex, setActiveIndex] = useState(0);

    // 로컬스토리지의 데이터를 담을 배열
    const [cartItems, setCartItems] = useState([]);

    // 삭제하기 버튼 클릭 시 해당 아이템의 id값을 파라미터로 받은 후
    // newArr에 장바구니에 있는 아이템들을 필터 함수로 돌린 후
    // 파라미터 id와 장바구니 아이템의 id를 비교 한 후 id가 같지 않은
    // 배열들을 newArr 에 넣음.
    // 그리고 로컬스토리지 cart에 newArr를 넣은 후 카트아이템에 새로 newArr를 넣음
    const onDelete = (item) => {
        const newArr = cartItems.filter((v) => v.id !== item)
        localStorage.setItem("cart", JSON.stringify(newArr));
        setCartItems(newArr)
    }

    // 컴포넌트 렌더링 시 로컬스토리지 key : cart 데이터를
    // setCartItems 에 담음
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cart')) || [];    
        setCartItems(items);
    }, [])

    // 구매하기 버튼 클릭 시,
    // 미구현
    const onBuy = () => {
        if(!user){
            Swal.fire({
                icon: "error",
                title: "구매 실패!",
                text: "로그인 후 구매 해주세요."
              })
        }else if(user){
            Swal.fire({
                icon: "error",
                title: "구매 실패!",
                text: "아직 상품을 구매 할 수 없어요."
              })
        }
    }

    // 전체 삭제 버튼.
    // 로컬스토리지의 key value를 모두 지우고 새로고침
    const allDelete = () => {
        Swal.fire({
            icon: "success",
            title: "삭제 성공!",
            text: "모든 장바구니 상품을 삭제했습니다."
          }).then((res) => {
            localStorage.clear();
            window.location.reload();
          })
    }

    const tabContArr=[
        {
            tabTitle:(
                <div className="col">
                    <input 
                    type="checkbox" 
                    id="cartCheckAll" 
                    readOnly />
                    <li className={activeIndex === 0 ? "is_active" : ""} onClick={()=>tabClickHandler(0)}> 일반 배송({cartItems.length}) 
                    </li>
                    </div>
            ),
            tabCont:(
                <div className="tap_item_box">
                    {
                        cartItems.map((item) => {
                        return(
                        <div className="tap_item" key={item.id}>
                            <input
                            type="checkbox"
                            readOnly />
                            <div className="tap_img_box">
                                <img src={item.URL} />
                            </div>
                            <div className="tap_text_box">
                                <span>{item.이름}</span>
                                <span>{item.가격}</span>
                            </div>
                            <div className="tap_button_box">
                                <button onClick={(v) => {onDelete(item.id)}}>삭제하기</button>
                            </div>
                        </div>
                            )
                        })
                    }
                    
                </div>
            )
        },
        {
            tabTitle:(
                <li className={activeIndex === 1 ? "is_active" : ""} onClick={()=>tabClickHandler(1)}> 신속 배송 </li>
            ),
            tabCont:(
                <div className="tap_sub_item">
                    <div className="tab_no_item">
                        <span>장바구니에 담긴 상품이 없습니다.</span>
                    </div>
                </div>
            )
        }
    ];

    // 탭 레이아웃 클릭 시 상태 변화
    const tabClickHandler = (index) => {
        setActiveIndex(index)
    }
    
    return(
        <div className="Container">
            <div className="List_Wrap">
                <div className="Title_Box">
                    <label className="Cart_Title">장바구니</label>
                </div>
                <ul className="tabs is-boxed">
	                {tabContArr.map((section, index)=>{
		                return section.tabTitle
	                })}
                </ul>
                {
                    cartItems.length >= 1 ? 
                    <div className="tap_content">
	                    { tabContArr[activeIndex].tabCont }
                    </div> : 
                    <div className="tab_no_item">
                        <span>장바구니에 담긴 상품이 없습니다.</span>
                    </div>
                }
                <div className="tap_active_box">
                        <button className="delete_button" onClick={allDelete}>전체삭제</button>
                        <button className="buy_button" onClick={onBuy}>구매하기</button>
                    </div>
            </div>
        </div>
    )
}

export default Cart;