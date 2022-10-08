/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import * as colors from "../../../../Constants/Colors/Colors";
import Slider from "react-slick";
import slide1 from '../../../../Assets/images/Footer/slide1.jpg';
import slide2 from '../../../../Assets/images/Footer/slide2.jpg';
import slide3 from '../../../../Assets/images/Footer/slide3.jpg';
import slide4 from '../../../../Assets/images/Footer/slide4.jpg';
import Space30 from "../../../../Components/Spaces/Space30";
import SimpleLinkButton from "../../../../Components/LinkButton/SimpleLinkButton";
import StaticTexts from "../../../../Constants/En/StaticTexts";


const footerSloganHeader = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${colors.blackTitleColor};
  padding-top: 50px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 64px;
  line-height: 1.125;
  font-weight: 900;
  @media(max-width: 768px){
    padding-top: 20px;
    font-size: 40px;
    text-align: left;
  }
  h6{
    font-size: 14px;
    line-height: 32px;
    color: ${colors.darkSilver};
    font-weight: 900 !important;
    @media(max-width: 768px){
      font-size: 18px;
      line-height: 1.77;
      font-weight: 900 !important;
    }
  }
`

const sliderFrame = css `
  width: 100%;
  height: 400px;
  display: flex;
  position: relative;
  border-radius: 45px;
  overflow: hidden;
  @media(max-width: 768px){
    height: 200px;
  }
`
const carouselFrame = css`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  @media(max-width: 768px){
    height: 200px;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media(max-width: 768px){
      height: 200px;
    }
  }
`




const FooterSlider = () => {

    const slides = [
        {
            image: slide1
        },
        {
            image: slide2,
        },
        {
            image: slide3,
        },
        {
            image: slide4,
        }
    ]

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        autoplay: true,
        swipeToSlide: true,
        slidesToShow: 1,
        fade: true,
        slidesToScroll: 1
    };

    return(
        <div style={{ position: 'relative '}}>
            <div css={footerSloganHeader}>
                {`Join the waitlist for early access,progress updates, and incentives 
                to help shape GOODFOLIO`}
                <Space30 />
                <h6>
                    {`GOODFOLIO is not an investment firm although it is looking
                     to become one. Our waiting list is for updates and for our 
                     stakeholders to help us modify our proposition in line with 
                     their values as we look to change the world of investment.
                      GOODFOLIO does not provide investment advice and individual
                       investors should make their own decisions or seek independent
                        advice. The value of investments can go up as well as down and
                         you may receive back less than your original investment. 
                         GOODFOLIO is registered in England and Wales (no. 13402423).`}
                </h6>
                <Space30 />
                <Space30 />
                <SimpleLinkButton title={StaticTexts.joinTheWaitList} href='/'
                                  color='blue' />
                <h6>
                    We respect your privacy. Unsubscribe at any time.
                </h6>
                <Space30 />
            </div>
            <div css={sliderFrame}>
                <Slider {...settings} css={carouselFrame}>
                    {
                        slides.map((item, index) =>
                            <img src={item.image} key={index} alt='slide' />
                        )
                    }
                </Slider>
            </div>
        </div>
    )
}

export default FooterSlider;