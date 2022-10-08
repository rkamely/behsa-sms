/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';
import * as colors from '../../../../Constants/Colors/Colors';
import planetBg from '../../../../Assets/images/Home/planetBg.png';


const workStepGrid = (title) => css`
  display: flex;
  flex-direction: ${title === 'step 1'? 'column': title === 'step 2'? 'row':
        title === 'step 3'? 'column-reverse': 'column'};
  width: ${title === 'step 1' || title === 'step 3'? '21%': '30%'};
  justify-content: flex-start;
  @media(max-width: 768px){
    width: 100%;
    flex-direction: column !important;
    margin-bottom: 50px;
  }
`
const workStepDetail = (title) => css `
  width: ${title === 'step 1' || title === 'step 3'? '100%': '60%'};
  padding-left: ${title === 'step 1' || title === 'step 3'? '0px': '30px'};
  margin-top: ${title === 'step 1'? '30px': '0px'};
  margin-bottom: ${title === 'step 3'? '30px': '0px'};
  @media(max-width: 768px){
    padding-left: 0 !important;
  }
  h5{
    font-size: 32px;
    color: ${colors.blackTitleColor};
    margin-top: ${title === 'step 1'? '30px': '0px'};
    margin-bottom: ${title === 'step 3'? '30px': '0px'};
    @media(max-width: 768px){
      margin: 10px 0 !important;
    }
  }
  h6{
    font-size: 16px;
    color: ${colors.middleSilver};
    margin-top: 20px;
    line-height: 24px;
  }
`

const imageFrame = (title) => css `
  background-color: ${title === 'step 1'? colors.blue100: title === 'step 2'?
    colors.green100: title === 'step 3'? colors.peach100: colors.blue100};
  width: ${title === 'step 1' || title === 'step 3'? '100%': '130px'};
  height: ${title === 'step 1' || title === 'step 3'? '100%': '170px'};
  min-height: 150px;
  background-image: url(${planetBg});
  background-size: cover;
  border-radius: 35px;
  @media(max-width: 768px){
    width: 100% !important;
    margin-bottom: 30px !important;
    min-height: 200px;
  }
`

const WorkStepGrid = (props) => {

    const { title, text } = props.item;
    return(
        <div css={workStepGrid(title)}>
            <div css={imageFrame(title)} />
            <div css={workStepDetail(title)}>
                <h5>
                    {title}
                </h5>
                <h6>
                    {text}
                </h6>
            </div>
        </div>
    )
}

export default WorkStepGrid;
