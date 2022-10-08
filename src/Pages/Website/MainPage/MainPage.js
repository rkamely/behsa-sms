/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import Space50 from "../../../Components/Spaces/Space50";


const serviceTypesList = css `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  @media(max-width: 768px){
    padding: 0;
    flex-direction: column;
  }
`
const featuresFrame = css`
  display: flex;
  flex-direction: column;
  @media(max-width: 768px){
    padding: 0;
 }
`
const featuresFrameList = css `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 70px;
  @media(max-width: 768px){
    flex-direction: column;
  }
`


const MainPage = () => {


    return (
        <div className='websitePageContentFrame'>
            <Span>Home</Span>
            <Space50 />
        </div>
    )
}

export default MainPage;
