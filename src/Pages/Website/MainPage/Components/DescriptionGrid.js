/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import { MdOutlineArrowForward } from "react-icons/all";
import {Link} from "react-router-dom";
import * as colors from '../../../../Constants/Colors/Colors';



const descriptionFrame = (color) =>  css `
  width: 100%;
  background-color: ${color};
  border-radius: 35px;
  position: relative;
  top: -50px;
`
const descriptionPadding = css `
  padding: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 100px;
  @media(max-width: 768px){
    flex-direction: column;
  }
  h4{
    width: 30%;
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 52px;
    line-height: 1;
    font-weight: 300;
    @media(max-width: 768px){
      width: 90%;
      font-size: 38px
    }
  }
  p{
    width: 50%;
    margin-bottom: 8px;
    margin-left: 16px;
    font-size: 14px;
    line-height: 24px;
    padding-right: 50px;
    @media(max-width: 768px){
      width: 100%;
      padding-right: 0;
      text-align: justify;
      margin-left: 0;
    }
  }
`
const linkButton = css `
  position: absolute;
  right: 25px;
  top: 15px;
  width: 45px;
  height: 45px;
  background-color: #fff;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    color: ${colors.darkSilver};
    font-size: 24px;
  }
  @media(max-width: 768px){
    right: 15px;
    top: 15px;
  }
`


const DescriptionGrid = (props) => {
    const { title, text, color } = props.item;
    return(
        <div css={descriptionFrame(color)}>
            <Link to='/priceDescription' css={linkButton}>
                <MdOutlineArrowForward />
            </Link>
            <div css={descriptionPadding}>
                <h4>
                    {title}
                </h4>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default DescriptionGrid