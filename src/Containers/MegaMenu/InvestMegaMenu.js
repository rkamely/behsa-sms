/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';
import MegaSubItem from "./MegaSubItem";

const megaMenuStyle = css `
  position: absolute;
  width: 100%;
  top: 55px;
  left: 0;
  min-height: 100px;
  background-color: #F9F9F9;
  border-radius: 25px;
  z-index: 1199;
`
const menuContent = css`
  padding: 25px 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  ul{
    list-style: none;
    width: inherit;
    padding: 5px 0 10px !important;
  }
`
const leftFrame = css `
  width: 48%;
  
`
const megaListTitle = css `
  font-size: 14px;
  border-bottom: 1px solid ${colors.graySecondary};
  padding-bottom: 10px;
`
const rightFrame = css `
  width: 48%;
  
`
const twoColumnStyle = css `
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  ul{
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`





const InvestMegaMenu = () => {

    const megaList = [
        {
            model: [
                {
                    title: 'Socially responsible quick start'
                },
                {
                    title: 'ethical growth'
                },
                {
                    title: 'water tilt'
                },
                {
                    title: 'emission tilt'
                },
                {
                    title: 'clean tech tilt'
                }
            ],
            etf: [
                {
                    title: 'All in one ETFs'
                },
                {
                    title: 'Equity ETFs'
                },
                {
                    title: 'Doing more good ETFs'
                },
                {
                    title: 'Bond ETFs'
                },
                {
                    title: 'Social responsible investing'
                },
                {
                    title: 'Reduce pollution'
                },
                {
                    title: 'Clean technologies'
                },
                {
                    title: 'Water'
                },
                {
                    title: 'Invest women leaders'
                },
                {
                    title: 'Influencing companies'
                }
            ]
        }
    ];
    return(
        <div css={megaMenuStyle}>
            <section css={menuContent}>
                <div css={leftFrame}>
                    <h5 css={megaListTitle}>Model Portfolio</h5>
                    <ul>
                        {
                            megaList[0].model.map((item, index) =>
                                <MegaSubItem {...item} key={index} />
                            )
                        }
                    </ul>
                </div>
                <div css={rightFrame}>
                    <h5 css={megaListTitle}>ETFs</h5>
                    <div css={twoColumnStyle}>
                        <ul>
                            {
                                megaList[0].etf.slice(0,5).map((item, index) =>
                                    <MegaSubItem {...item} key={index} />
                                )
                            }
                        </ul>
                        <ul>
                            {
                                megaList[0].etf.slice(5,11).map((item, index) =>
                                    <MegaSubItem {...item} key={index} />
                                )
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default InvestMegaMenu;