/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import DescriptionGrid from "./DescriptionGrid";

const descriptionFrame = css`
  & > div:nth-type-of(1){
    top: 0 !important;
  }
`

const DescriptionFrame = () => {

    const array = [
        {
            id: 0,
            title: 'Idea about pricing',
            text: 'In contrast to most other platforms, SilicoFi does not charge' +
                ' percentage fees that grow with your investments. Our subscription' +
                ' prices will be competitive relative to Freetrade and interactive' +
                ' investor whilst being considerably more cost effective for most ' +
                'investors compared to Hargreaves Lansdown and AJ Bell. Socially ' +
                'responsible investing does not need to be done at a premium.',
            color: '#E8E8E8'
        },
        {
            id: 1,
            title: 'Types of accounts',
            text: 'General Investment Accounts and Stocks and Shares ISAs. We will be' +
                ' working on adding Self-Invested Personal Pensions next.',
            color: '#F3F3F3'
        }
    ]
    return(
        <div css={descriptionFrame}>
            {
                array.map((item, index) =>
                    <DescriptionGrid key={index} item={item} />
                )
            }
        </div>
    )
}

export default DescriptionFrame;