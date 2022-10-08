/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
import React from 'react';
import {css, jsx} from '@emotion/react';
import * as colors from '../../../../Constants/Colors/Colors';
import {Link} from "react-router-dom";



const gridItem = css`
  width: 33%;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  @media(max-width: 768px){
    width: 100%;
    margin-bottom: 10px;
    height: 200px;
  }
  &:hover{
    & > span{
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
  & span{
    width: 100%;
    height: 99%;
    position: absolute;
    border-radius: 40px;
    top: 0;
    left: 0;
    background-color: transparent;
    transition-duration: 0.3s;
  }
  img{
    width: 100%;
    object-fit: cover;
    border-radius: 40px;
    @media(max-width: 768px){
      width: 100%;
      margin-bottom: 25px;
      height: 200px;
    }
  }
  h4{
    position: absolute;
    z-index: 1001;
    bottom: 30px;
    left: 30px;
    color: ${colors.lightSilver};
    font-size: 32px;
    line-height: 1.25;
    font-weight: 400;
    width: 60%;
    @media(max-width: 768px){
      font-size: 20px;
    }
  }
`


const ServiceTypeGrid = ({ title, image }) => {
    return(
        <Link to='/' css={gridItem}>
            <span />
            <li>
                <h4>{title}</h4>
                {image}
            </li>
        </Link>
    )
}

export default ServiceTypeGrid;