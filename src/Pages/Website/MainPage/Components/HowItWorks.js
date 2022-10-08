/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import * as colors from "../../../../Constants/Colors/Colors";
import WorkStepGrid from "./WorkStepGrid";
import Space50 from "../../../../Components/Spaces/Space50";

const list = [
    {
        title: 'step 1',
        text: 'Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco ' +
            'cillum dolor. Voluptate exercitation incididunt aliquip deserunt' +
            ' reprehenderit elit laborum. '
    },
    {
        title: 'step 2',
        text: 'Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum' +
            ' dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit' +
            ' elit laborum. '
    },
    {
        title: 'step 3',
        text: 'Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco ' +
            'cillum dolor. Voluptate exercitation incididunt aliquip deserunt' +
            ' reprehenderit elit laborum. '
    },
];


const workFrame = css`
  width: 100%;
`
const contentFrame = css `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 768px){
    flex-direction: column;
  }
  h3{
    font-size: 52px;
    color: ${colors.blackTitleColor};
    text-transform: capitalize;
    margin-bottom: 15px;
    font-weight: 100;
    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
  p{
    color: ${colors.middleSilver};
    font-size: 15px;
    font-weight: 900;
    width: 70%;
    @media (max-width: 768px) {
      width: 90%;
    }
  }
`
const workFrameList = css `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const HowItWorks = () => {
    return(
        <div css={workFrame}>
            <div css={contentFrame}>
                <h3>
                    How it works
                </h3>
                <p className='websiteSimpleText'>
                    Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
                    cillum dolor. Voluptate exercitation incididunt aliquip deserunt
                    reprehenderit elit laborum.
                </p>
            </div>
            <Space50 />
            <Space50 />
            <div css={workFrameList}>
                {
                    list.map((item, index) =>
                        <WorkStepGrid item={item} key={index} />
                    )
                }
            </div>
        </div>
    )
}

export default HowItWorks;
