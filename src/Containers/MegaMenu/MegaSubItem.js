/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';
import {Link} from "react-router-dom";
import {FiArrowRight} from "react-icons/all";


const subTitle = css `
  width: max-content;
  border: 1px solid ${colors.graySecondary};
  display: flex;
  align-items: center;
  margin: 10px 0;
  border-radius: 100px;
  a{
    position: relative;
    text-decoration: none;
    font-size: 16px;
    color: ${colors.primaryBlack};
    font-weight: 600;
    padding: 10px;
    transition-duration: 0.2s;
    &:hover{
      padding: 10px 40px 10px 10px;
      svg{
        visibility: visible;
        opacity: 1;
        transition: visibility 0s linear 0s, opacity 300ms;
      }
    }
    svg{
      color: ${colors.primaryBlack};
      margin-left: 5px;
      font-size: 20px;
      position: absolute;
      background-color: #fff;
      border-radius: 100px;
      padding: 5px;
      top: 3px;
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s linear 300ms, opacity 300ms;
    }
  }
  
`

const MegaSubItem = (props) => {
    const { title } = props;
    return(
        <li css={subTitle}>
            <Link to='/'>
                {title}
                <FiArrowRight />
            </Link>
        </li>
    )
}

export default MegaSubItem;