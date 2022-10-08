/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import Logo from '../../Assets/images/mainLogo.png';
import * as colors from '../../Constants/Colors/Colors';
import StaticTexts from "../../Constants/En/StaticTexts";
import Space20 from "../../Components/Spaces/Space20";
import FooterMainLink from "../../Components/Link/FooterMainLink";


const websiteFooterStyle = css `
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 70px;
  margin-top: 50px;
  align-items: flex-start;
  padding-bottom: 50px;
  @media(max-width: 768px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const signatureReg = css`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  img{
    margin-bottom: 10px;
  }
  @media(max-width: 768px){
    width: 100%;
    justify-content: center;
    margin-bottom: 50px;
  }
  p{
    font-size: 14px;
    color: ${colors.darkSilver};
  }
  ul{
    padding: 0;
    margin: 0;
    list-style: none;
  }
`

const middleReg = css`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media(max-width: 768px){
    width: 100%;
    flex-direction: column;
    margin: 30px 0;
  }
`
const middleForms = css `
  list-style: none;
  li{
    margin-bottom: 15px;
    text-transform: capitalize;
    font-size: 14px;
  }
  li:first-child{
    font-weight: 900;
    color: ${colors.darkSilver};
    font-size: 15px;
    margin-bottom: 20px;
  }
  @media (max-width: 768px){
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    li{
      width: 100%;
      justify-content: center;
    }
  }
`



const WebsiteFooter = () => {
    return (
        <div css={websiteFooterStyle}>
            <div css={signatureReg}>
                <img src={Logo} alt={StaticTexts.projectName} />
                <p>
                    Goodfolio is registered in England and Walves company number 13402423
                </p>
                <Space20 />
                <p>
                    <b>hello@goodfolio.com</b>
                </p>
            </div>
            <div css={middleReg}>
                <ul css={middleForms}>
                    <li>Model Potfolio</li>
                    <li>Socially Responsible Quick start</li>
                    <li>ethical growth</li>
                    <li>water tilt</li>
                    <li>emmision tilt</li>
                    <li>clean tech tilt</li>
                </ul>
                <ul css={middleForms}>
                    <li>ETFs</li>
                    <li>all in one ETFs</li>
                    <li>equity ETFs</li>
                    <li>doing more good ETFs</li>
                    <li>bond ETFs</li>
                    <li>social responsible investing</li>
                    <li>reduce pollution</li>
                    <li>clean technologies</li>
                    <li>water</li>
                    <li>invest women leaders</li>
                    <li>influencing companies</li>
                </ul>
            </div>
            <div css={signatureReg}>
                <ul>
                    <FooterMainLink title='Pricing' href='/pricing' />
                    <FooterMainLink title='About' href='/about' />
                    <FooterMainLink title='Legal' href='/legal' />
                    <FooterMainLink title='FAQ' href='/faq' />
                    <FooterMainLink title='Privacy & Policy' href='/privacy' />
                    <FooterMainLink title='Terms & Conditions' href='/terms' />
                </ul>
            </div>
        </div>
    )
}

export default WebsiteFooter;
