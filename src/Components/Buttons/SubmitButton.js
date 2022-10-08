/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
 import { css, jsx } from '@emotion/react';
import { Button } from 'antd';
import * as colors from '../../Constants/Colors/Colors';

const buttonStyle = css `
    padding: 0 40px;
    height: 44px;
    font-size: 15px;
    @media(max-width: 768px){
        width: 100%;
    }
`

 const ButtonWithIcon = ({ title, handleClick }) => {

    return(
        <Button css={buttonStyle} type="primary" onClick={handleClick}>
            { title }
        </Button>
    )
 }

 export default ButtonWithIcon;