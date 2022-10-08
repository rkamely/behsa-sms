/** @jsxRuntime classic /
 /* @jsx jsx */
import React, {useEffect, useState} from 'react';
import * as colors from '../../../Constants/Colors/Colors';
import {css, jsx} from '@emotion/react';
import WebsiteSectionTitle from "../../../Components/Title/WebsiteSectionTitle";
import Space50 from "../../../Components/Spaces/Space50";
import QuestionsFrame from "./Components/QuestionsFrame";
import { FAQDataTabs } from '../../../Data/FAQData';
import SelectTypeTab from "./Components/SelectTypeTab";


const sectionContent = css `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.gray300};
  border-radius: 35px;
  
  @media(max-width: 768px){
    width: 100%;
    flex-direction: column;
  }
`
const sectionContentStyle = css `
  padding: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media(max-width: 768px){
    width: 100%;
    padding: 0;
    flex-direction: column;
  }
`
const rightFrame = css `
  width: 33%;
  @media(max-width: 768px){
    width: 100%;
    margin-bottom: 40px;
    padding: 20px 30px !important;
  }
`
const tabList = css `
  list-style: none;
  padding-left: 30px !important;
`

const leftFrame = css `
  width: 65%;
  @media(max-width: 768px){
    width: 100%;
  }
`



const FAQ = () => {

    const [ activeTab, setActiveTab ] = useState(null);

    useEffect(() => {
        setActiveTab(FAQDataTabs[0].title);
    }, []);

    return (
        <div className='websitePageContentFrame'>
            <WebsiteSectionTitle title='Frequently Asked Questions' />
            <Space50 />
            <div css={sectionContent}>
                <div css={sectionContentStyle}>
                    <div css={rightFrame}>
                        <ul css={tabList}>
                            {
                                FAQDataTabs.map((item, index) =>
                                    <SelectTypeTab item={item} key={index}
                                                   activeTab={activeTab}
                                                   onChange={(selected) => setActiveTab(selected)} />
                                )
                            }
                        </ul>
                    </div>
                    <div css={leftFrame}>
                        <QuestionsFrame index={activeTab} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;
