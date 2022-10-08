/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
 /* eslint-disable import/first */


 import React, { useState } from 'react';
 import { css, jsx } from '@emotion/react';
 import { Input } from 'antd';
 const { TextArea } = Input;
 import * as colors from '../../../../Constants/Colors/Colors';


 const formFrame = (width) => css `
    width: ${width};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media(max-width: 768px){
        width: 100% !important;
    }
 `

const labelStyle = css `
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -1px
`
const descList =  css `
    direction: rtl;
    padding-right: 15px !important;
    margin-top: 10px;
    li{
        font-size: 13px;
        font-weight: 400;
        letter-spacing: -1px
    }
`
const errorText = css `
    font-size: 13px;
    color: ${colors.redMaterial};
    font-weight: 400;
    letter-spacing: -1px;
`




 const ReceiverListBox = (props) => {

    const [ numbersArray, setNumbersArray ] = useState([]);
    const { onChange, width='200px', errors } = props;

    const onChangeNumber = (e) => {
        
        if (e.key === 'Enter') {
            numbersArray.push(e.target.value.split("\n").pop());
        }
        onChange(numbersArray);
    }


    return(
        <div css={formFrame(width)}>
            <label css={labelStyle} htmlFor='receiversList'>شماره گیرندگان</label>
            <TextArea rows={8} onKeyDown={(e) => onChangeNumber(e)} id='#receiversList' />
            {
                errors?
                    <h3 css={errorText}>فرمت شماره موبایل صحیح نمی باشد</h3>:
                    <ul css={descList}>
                        <li>درهرخط یک شماره وارد نمایید</li>
                        <li>حداکثر گیرندگان اضافی 500 شماره می باشد</li>
                    </ul>
            }
        </div>
    )
 }

 export default ReceiverListBox;