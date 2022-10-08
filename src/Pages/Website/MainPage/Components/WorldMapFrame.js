/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import worldWallpaper from '../../../../Assets/images/Home/worldMap.png';
import CollapseFrameWithDetail from "../../../../Containers/Collapse/CollapseFrameWithDetail";

const worldMap = css`
  width: 100%;
  height: 880px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  background-image: url(${worldWallpaper});
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  @media(max-width: 768px){
    flex-direction: column;
  }
`
const leftFrame = css`
  display: flex;
  width: 40%;
  padding-top: 70px;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
  }
`
const rightFrame = css`
  display: flex;
  width: 35%;
  height: inherit;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
  }
`


const WorldMapFrame = () => {
    return (
        <div css={worldMap}>
            <div css={leftFrame}>
                <CollapseFrameWithDetail title='Values-based portfolio construction'
                                         text='Prioritise the values that you care about, select a relevant
                    benchmark, and get started with a portfolio that aligns with your
                     ethical priorities while tracking the market.' type='bottom'
                />
            </div>
            <div css={rightFrame}>
                <CollapseFrameWithDetail title='Customisable impact and financial reporting'
                                         text='Analyse your portfolio to track its financial
                                          performance and the impact metrics that are important
                                           to you, and redirect your capital for sustainable
                                            growth.' type='bottom'
                />
                <CollapseFrameWithDetail title='Portfolio management and optimisation'
                                         text='Use the knowledge base and data sources
                                         to optimise and passively rebalance your long-term
                                         investment portfolio of the largest public companies
                                          and ETFs.' type='top'
                />
            </div>
        </div>
    )
}

export default WorldMapFrame;
