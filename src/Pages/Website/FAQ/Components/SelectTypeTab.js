/** @jsxRuntime classic /
 /* @jsx jsx */
import React from "react";
import * as colors from '../../../../Constants/Colors/Colors';
import {css, jsx} from '@emotion/react';


const tabListMenu = css `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${colors.primaryBlack};
  cursor: pointer;
  margin-bottom: 10px;
`
const activeTabListMenu = css `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  font-weight: 900;
  color: ${colors.black};
  cursor: pointer;
  margin-bottom: 10px;
`
const bulletStyle = css `
  position: absolute;
  left: 30px;
  width: 20px;
  height: 20px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.primaryBlack};
  margin-right: 10px;
  div{
    width: 4px;
    height: 4px;
    border-radius: 100px;
    background-color: ${colors.primaryBlack};
  }
`


const SelectTypeTab = (props) => {

    const { item, onChange, activeTab } = props;

    return (
        <li css={activeTab === item.title? activeTabListMenu: tabListMenu}
            onClick={() => onChange(item.title)}>
            {
                activeTab === item.title?
                    <div css={bulletStyle}>
                        <div />
                    </div>: null
            }
            {item.title}
        </li>
    )
}

export default SelectTypeTab;
