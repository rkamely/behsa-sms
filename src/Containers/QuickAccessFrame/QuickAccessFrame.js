/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
 import {css, jsx} from '@emotion/react';
 import { IoWallet, SiGooglemessages, BsFillCreditCard2BackFill, RiServerFill } from 'react-icons/all';
 import * as colors from '../../Constants/Colors/Colors';
import { Button } from 'antd';
import PriceFormat from '../../Utils/PriceFormat';


 const cardListFrame = css `
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    margin-bottom: 20px;
    @media(max-width: 768px){
        flex-direction: column
    }
 `
 const cardListItem = css `
    width: 23%;
    min-height: 300px;
    border-radius: 3px;
    padding: 15px;
    box-shadow: 0 1px 4px rgba(10, 22, 70, 0.16);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 768px){
        width: 100%;
        margin-bottom: 20px;
    }
 `
 const contentStyle = css `
    width: 100%;
 `
 const cardTitle = (color) => css `
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    background-image: ${ color === 'red'? 'linear-gradient(to left,rgba(240,91,85,.15),rgba(240,91,85,0))': 
                        color === 'orange'? 'linear-gradient(to left,rgba(252,184,19,.15),rgba(252,184,19,0))':
                        color === 'green'? 'linear-gradient(to left,rgba(77,183,87,.15),rgba(77,183,87,0))':
                        color === 'blue'? 'linear-gradient(to left,rgba(38,169,224,.15),rgba(38,169,224,0))': '#000'
                    };
    h4{
        margin: 0 5px 0 0;
        font-weight: 900;
        font-size: 16px;
        letter-spacing: -1px;
        color: ${color ===  'red'? colors.redMaterial :
                color ===  'orange'? colors.orangeMaterial : 
                color ===  'green'? colors.greenMaterial:
                color ===  'blue'? colors.materialBlue: '#000'};
    }
 `
const headerIcon = (color) => css`
    color: ${color};
    font-size: 22px;
`
const cardSubList = css `
    list-style: none;
    padding: 25px 15px !important;
    width: 100%;
    li{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        min-height: 30px;
        h6{
            font-size: 14px;
            font-weight: 400;
            color: ${colors.titleColorOnWhite};
            letter-spacing: -1px
        }
    }
`

const navigateButton = (color) => css `
    width: 100%;
    height: 44px;
    border: none;
    outline: none;
    font-size: 16px;
    color: #fff;
    letter-spacing: -1px;
    background-color: ${color ===  'red'? colors.redMaterial :
                color ===  'orange'? colors.orangeMaterial : 
                color ===  'green'? colors.greenMaterial:
                color ===  'blue'? colors.materialBlue: '#000'};
    &:hover{
        color: #fff;
        background-color: ${color ===  'red'? colors.redMaterial :
                color ===  'orange'? colors.orangeMaterial : 
                color ===  'green'? colors.greenMaterial:
                color ===  'blue'? colors.materialBlue: '#000'};
    }
    &:focus{
        color: #fff;
        background-color: ${color ===  'red'? colors.redMaterial :
                color ===  'orange'? colors.orangeMaterial : 
                color ===  'green'? colors.greenMaterial:
                color ===  'blue'? colors.materialBlue: '#000'};
    }
`

const walletBallanceFrame = css `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    direction: rtl;
    
    h4{
        font-size: 26px;
        font-weight: 900;
        letter-spacing: -1px;
        color: ${colors.titleColorOnWhite};
    }
    span{
        font-size: 16px;
        font-weight: 100;
    }
`





 const QuickAccessFrame = () => {
     return(
        <ul css={cardListFrame}>
            <li css={cardListItem}>
                <div css={contentStyle}>
                    <div css={cardTitle('green')}>
                        <h4>سرویس ها</h4>
                        <RiServerFill css={headerIcon(colors.greenMaterial)} />
                    </div>
                    <ul css={cardSubList}>
                        <li>
                            <h6>1</h6>
                            <h6>سرویس های فعال</h6>
                        </li>
                        <li>
                            <h6>5</h6>
                            <h6>لیست سرویس ها</h6>
                        </li>
                    </ul>
                </div>
                <Button css={navigateButton('green')}> مشاهده سرویس ها</Button>
            </li> 
            <li css={cardListItem}>
                <div css={contentStyle}>
                    <div css={cardTitle('blue')}>
                        <h4>مالی</h4>
                        <BsFillCreditCard2BackFill css={headerIcon(colors.materialBlue)}/>
                    </div>
                    <ul css={cardSubList}>
                        <li>
                            <h6>2</h6>
                            <h6>در انتظار پرداخت</h6>
                        </li>
                        <li>
                            <h6>68</h6>
                            <h6>مجموع صورتحساب ها</h6>
                        </li>
                    </ul>
                </div>
                <Button css={navigateButton('blue')}> لیست صورتحساب ها</Button>
            </li> 
            <li css={cardListItem}>
                <div css={contentStyle}>
                    <div css={cardTitle('orange')}>
                        <h4>تیکت ها</h4>
                        <SiGooglemessages css={headerIcon(colors.orangeMaterial)} />
                    </div>
                    <ul css={cardSubList}>
                        <li>
                            <h6>0</h6>
                            <h6>تیکت های باز</h6>
                        </li>
                        <li>
                            <h6>27</h6>
                            <h6>مجموع تیکت ها</h6>
                        </li>
                    </ul>
                </div>
                <Button css={navigateButton('orange')}> لیست تیکت ها</Button>
            </li> 
            <li css={cardListItem}>
                <div css={contentStyle}>
                    <div css={cardTitle('red')}>
                        <h4>موجودی کیف پول</h4>
                        <IoWallet css={headerIcon(colors.redMaterial)} />
                    </div>
                    <div css={walletBallanceFrame}>
                        <h4>{PriceFormat(2380000)} <span>ریال</span></h4>
                    </div>
                </div>
                <Button css={navigateButton('red')}>افزایش موجودی</Button>
            </li>
        </ul>
     )
 }

 export default QuickAccessFrame;