/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';

const titleFrame = css`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-start;
    background: ${colors.sectionTitleBg};
    min-height: 84px;
    & > svg{
      font-size: 24px;
      color: ${colors.darkSilver};
      margin-left: 5px
    }
`
const markStyle = (color) => css `
  background-color: ${color};
  width: 4px;
  height: 84px;
  background-color: orange;
  border-radius: 100px;
  margin-left: 9px;
`
const titleDetailFrame = css `
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 6px;
  h2{
    color: ${colors.titleColorOnWhite};
    font-size: 18px;
    letter-spacing: -1px;
    text-transform: capitalize;
    margin: 0;
    font-weight: 900;
  }
  h6{
    color: ${colors.textColorOnWhite};
    font-size: 14px;
    letter-spacing: -1px;
    margin: 0;
    font-weight: 400;
    direction: rtl;
  }
`




const DashboardSectionTitle = ({ title, color, icon, description='' }) => {
    return(
        <div css={titleFrame}>
            <span css={markStyle(color)} />
            {icon}
            <div css={titleDetailFrame}>
              <h2>{title}</h2>
              <h6>{description}</h6>
            </div>
        </div>
    )
}

export default DashboardSectionTitle;
