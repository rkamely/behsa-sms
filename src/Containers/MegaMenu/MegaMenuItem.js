/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
import React, {useState} from "react";
import { css, jsx } from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';
import {Link} from "react-router-dom";
import InvestMegaMenu from "./InvestMegaMenu";
import {IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/all";


const menuItemFrame = css`
  padding: 5px 0;
  @media(max-width: 768px){
    width: 100% !important;
    text-align: center;
    min-height: 40px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
`

const menuItem = (isFocused) =>  css`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  color: ${colors.darkSilver};
  text-decoration: none;
  font-weight: 900;
  text-transform: capitalize;
  margin: 0 15px 0 0;
  padding: 10px;
  border-bottom: 2px solid ${isFocused? colors.darkSilver: 'transparent'};
  @media(max-width: 768px){
    width: 100%;
    margin: 0;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${isFocused? colors.blue100: 'transparent'};
  }
  svg{
    font-size: 16px;
    margin-left: 5px;
    position: relative;
    top: -2px;
  }
`



const MegaMenuItem = (props) => {

    const [ investMegaMenu, setInvestMegaMenu ] = useState(false);
    const { title, href, isFocused } = props;
    return (
        <li css={menuItemFrame}
            onMouseOver={() => setInvestMegaMenu(true)}
            onMouseLeave={() => setInvestMegaMenu(false)}
        >
            <Link to={href} css={menuItem(isFocused)}>
                {title}
                {
                    investMegaMenu?
                        <IoMdArrowDropup />:
                        <IoMdArrowDropdown />
                }
            </Link>
            {
                investMegaMenu?
                    <InvestMegaMenu />:null
            }
        </li>
    )
}

export default MegaMenuItem;
