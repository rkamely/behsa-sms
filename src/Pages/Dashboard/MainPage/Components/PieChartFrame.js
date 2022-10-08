import StaticTexts from '../../../../Constants/En/StaticTexts';

/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
import {css, jsx} from '@emotion/react';
import CirclePieChart from "../../../../Components/Diagrams/CirclePieChart";

const pieFrameStyle = css`
  position: relative;
  width: 100% !important;
  h3 {
    color: #fff;
    text-align: center;
    font-weight: 100;
    font-size: 18px;
    margin: 10px 0 20px;
  }`


const PieChartFrame = () => {

    return (
        <div css={pieFrameStyle}>
            <h3>{StaticTexts.geographicalBreakdown}</h3>

            <CirclePieChart
                diagramData={[{
                    name: 'Europe',
                    y: 45.41,
                }, {
                    name: 'US',
                    y: 48.84
                }, {
                    name: 'UK',
                    y: 25.84
                }
                , {
                    name: 'Asia',
                    y: 14.85
                }]}/>
        </div>
    )
}

export default PieChartFrame;
