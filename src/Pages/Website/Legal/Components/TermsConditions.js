/** @jsxRuntime classic /
 /* @jsx jsx */
import * as colors from '../../../../Constants/Colors/Colors';
import {css, jsx} from '@emotion/react';
import { TermsConditionsData } from '../../../../Data/TermsConditionsData';
import Space30 from "../../../../Components/Spaces/Space30";


const contentFrame = css `
  display: flex;
  flex-direction: column;
  
`
const sectionTitle = css`
  font-size: 24px;
  line-height: 32px;
  color: ${colors.black};
`
const eachSubItemStyle = css `
  margin-bottom: 40px;
  h4{
    margin-bottom: 5px;
    font-size: 18px;
    line-height: 32px;
    color: ${colors.primaryBlack};
  }
  ul{
    list-style: none;
    padding-left: 15px !important;
    li{
      font-size: 14px;
      line-height: 24px;
      color: ${colors.primaryBlack};
      white-space: pre-line;
      margin-bottom: 10px;
    }
  }
`
const detailSimpleText = css `
  font-size: 14px;
  line-height: 24px;
  color: ${colors.primaryBlack};
  white-space: pre-line;
`




const TermsConditions = () => {


    return (
      <div css={contentFrame}>
      <h3 css={sectionTitle}>Terms and condition</h3>
      <Space30 />
      {
          TermsConditionsData.map((item, index) =>
              <div key={index} css={eachSubItemStyle}>
                  <h4>{`${item.id}. ${item.title}`}</h4>
                  {item.subItems?
                      <ul>
                          {
                              item.text.map((subItem, index2) =>
                                  <li key={index2}>
                                      {`${item.id}-${index2 + 1}`} {subItem.text}</li>
                              )
                          }
                      </ul>:
                      <p css={detailSimpleText}>
                          {item.text}
                      </p>
                  }
              </div>
          )
      }
  </div>
    )
}

export default TermsConditions;
