import React, {useEffect, useState, useContext} from "react"
import { Link, useParams } from "react-router-dom";

import styled from 'styled-components';
import Swal from "sweetalert2";
import "../assets/root.css";

import {db} from '../index.js'
import { AuthContext } from "../models/ContextProvider.js"
import firebase from "firebase/app";

function Detail(){

    const { user } = useContext(AuthContext);

    const [item, setItem ] = useState({});

    const {id} = useParams();

    // product에서 id가 일치하는 문서를 찾아 item에 담음
    useEffect(() => {
        const dbRef =  db.collection("product");
        dbRef
        .where(firebase.firestore.FieldPath.documentId(), "==", id)
        .get()
        .then((query) => {
            const item = query.docs.map(item => item.data())
            setItem(item)
        })
        .catch((error) => {
            console.log("Error", error);
        });
	}, [id]);

    // 장바구니 버튼 클릭시 함수 실행
    const onCart = () => {
            const cart = JSON.parse(localStorage.getItem("cart")) || [];

            cart.push(...item)
            localStorage.setItem("cart", JSON.stringify(cart));
            Swal.fire({
                icon: "success",
                title: "장바구니 담기 성공!",
                text: "마이룩에 상품을 담았어요."
              })
    }

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

    const dataList = db.collection("product")

    // uid가 지정한 uid일 경우 버튼이 수정하기 및 삭제하기 버튼으로 바뀌는데
    // 현재 페이지 상품의 id를 v로 받아 해당 아이템을 삭제함
    const onDelete = (v) => {
        dataList.doc(v).delete().then((result) => {
            Swal.fire({
                icon: "success",
                title: "삭제 성공!",
                text: "상품 게시글을 삭제했습니다."
              }).then((res) => {
                  window.location.replace("/")
              })
        }).catch((err) => {
            console.log("Error", err)
        })
    }

    return(
        <Container>
            <Item_Card>
                <Img_Box>
                    <Img_URI src={item[0]?.URL}/>
                </Img_Box>
                <Text_Box>
                    <Title_Box>
                         <Text_h5>{item[0]?.이름}</Text_h5>
                          <Text_span>{item[0]?.설명}</Text_span>
                          <Text_price>{item[0]?.가격}</Text_price>
                    </Title_Box>
                    <Text_Box_02>
                        <Text_option>옵션 선택</Text_option>
                    </Text_Box_02>
                    <Text_Box_03>
                        {
                            user && user.uid == "HxsEV1xY6lXYPjINIIBY86Tk0df1" ? 
                            <div>
                                <Link as={Link} to={`/writingedit/${id}`}>
                                <Button_cart>수정하기</Button_cart>
                                </Link>
                                <Button_buy onClick={(v) => {onDelete(id)}}>삭제하기</Button_buy>
                            </div>
                            : 
                            <div>
                                <Button_cart onClick={onCart}>장바구니</Button_cart>
                                <Button_buy onClick={onBuy}>구매하기</Button_buy>
                            </div>
                        }
                    </Text_Box_03>
                </Text_Box>
            </Item_Card>
        </Container>
    )
}

export default Detail;

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 66px;
`

const Item_Card = styled.div`
    display: flex;
    width: 80%;
    padding: 30px 0px 30px 0px;
    @media screen and (max-width: 1200px){
        width:90%
    }
    @media screen and (max-width: 910px){
        align-items: center;
        flex-direction: column;
    }
`

const Img_Box = styled.div`
    display: flex;
    width: 500px;
    height: 500px;
    @media screen and (max-width: 1200px){
        width: 400px;
        height: 400px;
    }
    @media screen and (max-width: 890px){
        width: 300px;
        height: 300px;
    }
`

const Img_URI = styled.img`
    /* background-image: url('https://via.placeholder.com/350'); */
    width: 500px;
    height: 500px;
    border-radius: 12px;
    @media screen and (max-width: 1200px){
        width: 400px;
        height: 400px;
    }
    @media screen and (max-width: 890px){
        width: 300px;
        height: 300px;
    }
`

const Text_Box = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 60px;
    @media screen and (max-width: 890px){
        margin-top: 0px;
    }
`

const Title_Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    width: 100%;
    line-height:1.5;
`

const Text_h5 = styled.h5`
    font-family: var(--font-family-noto);
    font-weight: bold;
    font-size: 30px;
    @media screen and (max-width: 890px){
        font-size: 24px;
    }
`

const Text_span = styled.span`
    font-family: var(--font-family-noto);
    font-size: 20px;
    @media screen and (max-width: 890px){
        font-size: 16px;
    }
`

const Text_price = styled.p`
    font-family: var(--font-family-noto);
    font-size: 20px;
    margin-top: 30px;
    color: red;
    @media screen and (max-width: 890px){
        font-size: 16px;
    }
`

const Text_Box_02 = styled.div`
    display:flex;
    flex-direction: column;
    width: 50%;
    border-top: 1px solid #dee2e6;
    border-bottom: 1px solid #dee2e6;
    margin-top: 30px;
    text-align: center;
`

const Text_option = styled.p`
    font-family: var(--font-family-noto);
    line-height: 3;
    cursor: pointer;
`

const Text_Box_03 = styled.div`
    display:flex;
    justify-content: center;
    width: 100%;
    margin-top: 60px;
`

const Button_cart = styled.button`
    width:120px;
    height: 40px;
    margin-right: 10px;
    border-radius: 4px;
    border-style: none;
    background-color: var(--font-color-black);
    color: var(--font-color-white);
    font-weight: bold;
    font-family: var(--font-family-noto);
    cursor: pointer;
    &:hover{
        color: #ee0979;
    }
`

const Button_buy = styled.button`
    width:120px;
    height: 40px;
    margin-left: 10px;
    border-radius: 4px;
    border-style: none;
    background-color: var(--font-color-black);
    color: var(--font-color-white);
    font-weight: bold;
    font-family: var(--font-family-noto);
    cursor: pointer;
    &:hover{
        color: #ee0979;
    }
`