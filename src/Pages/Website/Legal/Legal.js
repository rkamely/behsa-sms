/** @jsxRuntime classic /
 /* @jsx jsx */
import React, { useState } from 'react';
import * as colors from '../../../Constants/Colors/Colors';
import {css, jsx} from '@emotion/react';
import WebsiteSectionTitle from "../../../Components/Title/WebsiteSectionTitle";
import TermsConditions from "./Components/TermsConditions";
import Space50 from "../../../Components/Spaces/Space50";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import SiteTerm from "./Components/SiteTerm";


const legalContent = css `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media(max-width: 768px){
    width: 100%;
    flex-direction: column;
  }
`
const rightFrame = css `
  width: 33%;
  @media(max-width: 768px){
    width: 100%;
    margin-bottom: 40px;
  }
`
const tabList = css `
  list-style: none;
  padding-left: 30px !important;
`
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
const leftFrame = css `
  width: 65%;
  @media(max-width: 768px){
    width: 100%;
  }
`
const bulletStyle = css `
  position: absolute;
  left: 0;
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



const Legal = () => {

    const [ activeTab, setActiveTab ] = useState(0);
    return (
        <div className='websitePageContentFrame'>
            <WebsiteSectionTitle title='Legal' />
            <Space50 />
            <div css={legalContent}>
                <div css={rightFrame}>
                    <ul css={tabList}>
                        <li css={activeTab === 0? activeTabListMenu: tabListMenu}
                            onClick={() => setActiveTab(0)}>
                            {
                                activeTab === 0?
                                    <div css={bulletStyle}>
                                        <div />
                                    </div>: null
                            }
                            Terms & Conditions</li>
                        <li css={activeTab === 1? activeTabListMenu: tabListMenu}
                            onClick={() => setActiveTab(1)}>
                            {
                                activeTab === 1?
                                    <div css={bulletStyle}>
                                        <div />
                                    </div>: null
                            }
                            Privacy & Policy</li>
                        <li css={activeTab === 2? activeTabListMenu: tabListMenu}
                            onClick={() => setActiveTab(2)}>
                            {
                                activeTab === 2?
                                    <div css={bulletStyle}>
                                        <div />
                                    </div>: null
                            }
                            Site Terms</li>
                        <li css={tabListMenu}>Pillar 3 Disclosure(PDF)</li>
                        <li css={tabListMenu}>Privacy Note(PDF)</li>
                    </ul>
                </div>
                <div css={leftFrame}>
                    {
                        activeTab === 0?
                            <TermsConditions />:
                            activeTab === 1?
                                <PrivacyPolicy />:
                                activeTab === 2?
                                    <SiteTerm />: null
                    }

                </div>
            </div>
        </div>
    )
}

export default Legal;
