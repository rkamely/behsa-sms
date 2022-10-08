/** @jsxRuntime classic /
 /* @jsx jsx */
import {useEffect, useState} from "react";
import * as colors from '../../../../Constants/Colors/Colors';
import {css, jsx} from '@emotion/react';
import { FAQData } from '../../../../Data/FAQData';
import Space30 from "../../../../Components/Spaces/Space30";
import EachQuestionFrame from "./EachQuestionFrame";


const contentFrame = css `
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 35px;
  padding: 25px;
`
const sectionTitle = css`
  font-size: 32px;
  line-height: 40px;
  color: ${colors.primaryBlack};
`


const QuestionsFrame = (props) => {
    const { index } = props;
    const [ activeTabText, setActiveTabText ] = useState('insight');

    useEffect(() => {
        setActiveTabText(index);
    }, [index]);

    return (
        <div css={contentFrame}>
            <h3 css={sectionTitle}>{activeTabText}</h3>
            <Space30 />
            <ul>
                {
                    index !== null?
                        FAQData[index.toLowerCase()].length > 0?
                        FAQData[index.toLowerCase()].map((item, index) =>
                            <EachQuestionFrame item={item} key={index} />):
                            <h4>No Question Defined</h4>
                        : null
                }
            </ul>
        </div>
    )
}

export default QuestionsFrame;
