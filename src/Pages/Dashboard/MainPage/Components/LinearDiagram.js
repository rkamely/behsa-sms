import StaticTexts from "../../../../Constants/En/StaticTexts";
import DashboardPageMainTitle from "../../../../Components/Title/DashboardPageMainTitle";

/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import * as colors from '../../../../Constants/Colors/Colors';
import Co2Chart from "../../Footprint/Components/Charts/Co2Chart";
import LinearComparisonChart from "../../../../Components/Diagrams/LinearComparisonChart";

const sectionTitle = css `
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;`



const LinearDiagram = () => {

    return(
        <div>
            <div css={sectionTitle}>
                <DashboardPageMainTitle title={StaticTexts.sectorWeight} type='md'
                                        description={StaticTexts.equityPortionOnly} />
            </div>
            <LinearComparisonChart data={[
                {
                    category: [
                        'Health',
                        'Real estate',
                        'Comms',
                        'Materials',
                        'Energy',
                        'Industrials',
                        'Utils',
                        'IT',
                        'Others'
                    ],
                    data: [{
                        name: 'Portfolio',
                        data: [36.6, 47.8, 28.5, 58.4, 25.0, 71.5, 46.0, 28.3, 125.2],
                        color: '#000'

                    },
                        {
                            name: 'Benchmark',
                            data: [85.9, 36.5, 85.4, 99.2, 74.0, 68.0, 51.6, 86.5, 165.4],
                            color: '#b6b6b6'

                        }]

                }
            ]} />
        </div>
    )
}

export default LinearDiagram;
