import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import styled from "styled-components"
import "../assets/root.css"

import { AuthContext } from "../models/ContextProvider.js"

function Store(){

    const { list } = useContext(AuthContext);

    return(
        <Container>
            <Item_Wrap>
        {
            list.map((item) => {
                return(
                    <StyledLink key={item.id} to={`/detail/${item.id}`}>
                        <Item_Card >
                            <Img_Box>
                            <Img_URI src={item.URL}/>
                        </Img_Box>
                        <Text_Box>
                          <Text_h5>{item.이름}</Text_h5>
                          <Text_span>{item.설명}</Text_span>
                          <Text_price>{item.가격}</Text_price>
                        </Text_Box>
                    </Item_Card>
                    </StyledLink>
                )
            })
        }
            </Item_Wrap>
        </Container>
    )
}

export default Store;

const StyledLink = styled(Link)`
    color: #000;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 55px;
`

// ↓아이템 리스트뷰
const Item_Wrap = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   margin-top: 50px;
   margin-bottom: 50px;
`

const Item_Card = styled.div`
    display: flex;
    flex-direction: column;
    margin: 8px;
`

const Img_Box = styled.div`
     width: 250px;
     height: 250px;
     cursor: pointer;
`
const Img_URI = styled.img`
    /* background-image: url('https://via.placeholder.com/350'); */
    width: 250px;
    height: 250px;
    border-radius: 12px;
`

const Text_Box = styled.div`
    display:flex;
    flex-direction: column;
    text-align: start;
    line-height: 1.5;
`

const Text_h5 = styled.h5`
    font-family: var(--font-family-noto);
    font-size: 14px;
`

const Text_span = styled.span`
    font-family: var(--font-family-noto);
    font-size: 14px;
`

const Text_price = styled.p`
    font-family: var(--font-family-noto);
    font-size: 12px;
    font-weight: bold;
`