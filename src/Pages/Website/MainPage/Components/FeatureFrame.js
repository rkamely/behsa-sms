/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';


const featureFrame = css`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 32%;
  @media(max-width: 768px){
    width: 100%;
    margin-bottom: 10px;
    flex-direction: column;
  }
  & > img{
    width: 96px;
    padding-right: 30px;
  }
`
const featureDetail = css `
  display: flex;
  flex-direction: column;
  h4 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 24px;
    line-height: 1.33;
    font-weight: 900;
  }
  h6 {
    margin-bottom: 8px;
    margin-left: 16px;
    font-size: 14px;
    line-height: 24px;
    font-weight: 300;
  }
`

const FeatureFrame = ({ title, message, image}) => {
    return(
        <li css={featureFrame}>
            {image}
            <div css={featureDetail}>
                <h4>{title}</h4>
                <h6>{message}</h6>
            </div>
        </li>
    )
}

export default FeatureFrame;