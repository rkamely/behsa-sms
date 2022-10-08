/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
import React from 'react';
import {css, jsx} from '@emotion/react';
import * as colors from "../../../../Constants/Colors/Colors";
import Space30 from "../../../../Components/Spaces/Space30";
import StaticTexts from "../../../../Constants/En/StaticTexts";
import SimpleLinkButton from "../../../../Components/LinkButton/SimpleLinkButton";


const sloganHeader = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${colors.blackTitleColor};
  margin-bottom: 10px;
  font-size: 88px;
  font-weight: 300;
  padding-top: 50px;
  text-align: center;
  white-space: pre-line;
  @media(max-width: 768px){
    padding-top: 20px;
    font-size: 40px;
    text-align: left;
  }
  h6{
    font-size: 18px;
    color: ${colors.blackTitleColor};
    font-weight: 300 !important;
    @media(max-width: 768px){
      font-size: 18px;
      line-height: 1.77;
      font-weight: 900 !important;
    }
  }
`

const SloganHeader = () => {
    return(
        <>
            <div css={sloganHeader}>
                {`Invest in companies \n and industries that share your`}
                <b>ethical values.</b>
                <Space30 />
                <h6>
                    {`GOODFOLIO is a simple and transparent investment platform designed for \n
                    every day environmental conscious and socially responsible investors`}
                </h6>
                <Space30 />
                <Space30 />
                <SimpleLinkButton title={StaticTexts.joinTheWaitList} href='/'
                                  color='blue' />
            </div>

        </>
    )
}

export default SloganHeader;