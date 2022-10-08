import {Link} from 'react-router-dom';

/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';

const dashboardItemStyle = css `
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  min-height: 46px;
  font-size: 15px;
  color: ${colors.darkSilver};
  font-weight: 600;
  text-decoration: none;
  &:hover{
    color: ${colors.darkSilver};
  }
  svg{
    position: relative;
    top: -2px;
    margin-left: 5px;
    font-size: 20px;
    color: ${colors.darkSilver}
  }
`

const EachMenuItem = ({title, icon, link}) => {
    return(
        <Link to={link} css={dashboardItemStyle}>
            {icon}
            {title}
        </Link>
    )
}

export default EachMenuItem;
