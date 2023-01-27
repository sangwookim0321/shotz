import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../assets/root.css";

import data from "../models/data.js"; // 슬라이드 이미지가 들어있는 파일

// 파이어베이스 설정의 firestore 임포트
import { AuthContext } from "../models/ContextProvider.js"

function Banner() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // useContext hook을 통해 배포한 auth객체
  const { user, list } = useContext(AuthContext);

  return (
    <Container>
      {/* StyledSlider 슬라이드에 셋팅함수를 설정 */}
      {/* 슬라이드 이미지가 들어있는 data를 map함수를 통해 렌더링 */}
      <StyledSlider {...settings}>
        {data.map((item) => {
          return (
            <Card key={item.key} >
              <Img src={item.url} />
            </Card>
          );
        })}
      </StyledSlider>

      {/* 상품 아이템 컴포넌트 */}
      {/* 위의 파이어베이스 getData함수를 통해 받아온 아이템들을 list 상태에 저장후 */}
      {/* map함수를 통해 컴포넌트에 렌더링 */}
      {/* 각 이미지에 Link를 단 후 쿼리파라미터를 받아 해당 링크로 이동시킴 */}
      <Item_Wrap>
        {
            list.map((item) => {
                return(
                  <StyledLink key={item.id} to={`/detail/${item.id}`}>
                    <Item_Card>
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
  );
}

export default Banner;

const StyledLink = styled(Link)`
    color: #000;
`

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

const Container = styled.div`
  position: relative;
  margin-top: 53px;
  width: 100%;
`;

const Card = styled.div`
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


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
     width: 350px;
     height: 350px;
     cursor: pointer;
`
const Img_URI = styled.img`
    /* background-image: url('https://via.placeholder.com/350'); */
    width: 350px;
    height: 350px;
    border-radius: 12px;
    &:hover{
      opacity: 0.8;
     }
`

const Text_Box = styled.div`
    display:flex;
    flex-direction: column;
    text-align: center;
    line-height: 1.5;
`

const Text_h5 = styled.h5`
    font-family: var(--font-family-noto);
    font-size: 14px;
`

const Text_span = styled.span`
    font-family: var(--font-family-noto);
    font-size: 16px;
`

const Text_price = styled.p`
    font-family: var(--font-family-noto);
    font-size: 18px;
`