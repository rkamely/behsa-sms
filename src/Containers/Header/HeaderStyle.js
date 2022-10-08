/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
 import { css, jsx } from '@emotion/react';
 import * as colors from '../../Constants/Colors/Colors';
 import {light2OnBlack} from "../../Constants/Colors/Colors";
 

export const headerMainFrame = css `
width: 100%;
min-height: 70px;
background-color: ${colors.dashboardBlueHeader};
`
export const dashboardSideSignature = css`
  width: 34px;
  cursor: default;
`
export const dashboardTitle = css `
    color: #fff;
    direction: rtl;
    font-weight: 100;
    font-size: 17px;
    margin-right: 12px;
    cursor: default
`
export const dashboardHeaderStyle = css `
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
min-height: 70px;
align-items: center;
`
export const dashboardSubHeaderStyle = css `
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
min-height: 70px;
align-items: center;
@media(max-width: 768px){
    flex-direction: column-reverse;
    padding-bottom: 20px
}
`
export const dashboardHeaderLeftSide = css `
display: flex;
align-items: center;
flex-direction: row;`
export const dashboardSubHeaderLeftSide = css `
display: flex;
align-items: center;
flex-direction: row;`

export const inRowFlexItems = css `
display: flex;
flex-direction: row;
align-items: center;`

export const reminderStyleButton = css `
position: relative;
color: ${colors.lightSilver};
margin: 0 0 0 7px !important;
    h6{
        position: absolute;
        min-width: 17px;
        min-height: 17px;
        background-color: #ff0000;
        margin: 0;
        top: -2px;
        left: -2px;
        color: #fff;
        font-weight: 100;
        border-radius: 100px;
        font-size: 11px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 2px;
        z-index: 99
    }
`
export const iconButton = css `
    background-color: transparent;
    border: none;
    outline: none;
    padding: 5px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: transparent; 
    }
    &:focus{
        background-color: transparent; 
    }
`
export const iconButtonStyle = css `
    color: ${colors.light2OnBlack};
    font-size: 25px
`
export const accoutText = css `
    font-weight: 100;
    color: ${colors.lightSilver};
    font-size: 13px;
    margin: 0;
`

export const increaseCredit = css `
    background-color: ${colors.deepOrange};
    margin: 0 10px;
    padding: 5px 12px;
    font-size: 13px;
    text-decoration: none;
    color: #fff;
    border: none;
    border-radius: 2px;
    &:hover{
        background-color: ${colors.deepOrange};
        color: #fff;
    }
`
export const serviceBuy = css `
    background-color: ${colors.lightGreenColor};
    margin: 0 5px 0 0;
    padding: 5px 12px;
    font-size: 13px;
    text-decoration: none;
    color: #fff;
    border: none;
    border-radius: 2px;
    &:hover{
        background-color: ${colors.lightGreenColor};
        color: #fff;
    }
`
export const simpleLink = css `
    color: ${colors.light2OnBlack};
    font-size: 14px !important;
    text-decoration: none;
    &:hover{
        color: ${colors.light2OnBlack};
    }
`
export const simpleText = css `
    color: ${colors.light2OnBlack};
    margin: 0;
    margin-left: 30px;
    font-weight: 100;
    font-size: 14px;
    text-decoration: none;
    &:hover{
        color: ${colors.light2OnBlack};
    }
`

  const headerMobileFrame = css `
  min-height: 60px;
  padding: 0 10px;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid darken(${colors.lightSilver}, 5);
  margin-bottom: 10px;
  h2{
    color: ${colors.darkSilver};
    font-size: 26px;
    text-transform: uppercase;
  }`
export const hamburgerMenuIcon = css`
  color: ${colors.darkSilver};
  font-size: 30px;
  background-color: transparent;
  border: none;
  outline: none;
  top: 7px;
  margin-left: 10px;
  position: relative;
  svg{
      color: #fff !important;
  }
  `
  export const drawerFrame = css`
  width: 200px;
  padding: 15px;`
  export const closeDrawerButton = css`
  position: absolute;
  bottom: 30px;
  left: 20px;
  border-radius: 100px; 
  min-width: 45px; 
  min-height: 45px`
  export const closeDrawerIcon = css `
  color: #fff !important;
  font-size: 22px`