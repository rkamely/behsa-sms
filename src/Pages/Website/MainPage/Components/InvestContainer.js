/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import planetBg from '../../../../Assets/images/Home/planetBg.png';
import dashboardSample from '../../../../Assets/images/Home/dashboardSample.png';
import * as colors from '../../../../Constants/Colors/Colors';
import Space50 from "../../../../Components/Spaces/Space50";

const investContainer = css`
  width: 100%;
  min-height: 500px;
  background-size: 1904px;
  background-color: #eff4f8;
  background-image: url(${planetBg});
  border-radius: 60px;
`
const investContainerPadding = css `
  padding: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media(max-width: 768px){
    flex-direction: column;
  }
`

const dashboardImageFrame = css `
  width: 60%;
  @media(max-width: 768px){
    width: 100%;
  }
  img{
    width: 100%;
    border-radius: 10px;
    @media(max-width: 768px){
      border-radius: 10px;
    }
  }
`
const detailFrame = css `
  width: 35%;
  h2 {
    margin-top: 20px;
    margin-bottom: 10px;
    color: #000;
    font-size: 64px;
    line-height: 1.125;
    font-weight: 900;
    @media(max-width: 768px){
      font-size: 32px;
      line-height: 1.25;
      font-weight: 400;
    }
  }
  p {
    color: ${colors.darkSilver};
    margin-bottom: 8px;
    margin-left: 16px;
    font-size: 14px;
    line-height: 24px;
    font-weight: 900;
  }
  @media(max-width: 768px){
    width: 100%;
    margin-bottom: 40px;
  }
`



const InvestContainer = () => {
    return(
        <div css={investContainer}>
            <div css={investContainerPadding}>
                <div css={detailFrame}>
                    <h2>
                        Invest with pride and confidence
                    </h2>
                    <p>
                        We bring real data and analytics as well as experts and
                        community-curated knowledge to you, so that you can view
                        your investment decisions through a socially responsible lens.
                    </p>
                    <Space50 /><Space50 />
                    <p>
                        Tangible impact metrics and intuitive reporting allows you to
                        invest consciously with confidence.

                    </p>
                </div>
                <div css={dashboardImageFrame}>
                    <img src={dashboardSample} alt='dashboard' />
                </div>
            </div>
        </div>
    )
}

export default InvestContainer;