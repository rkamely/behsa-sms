
/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
import {useState, useEffect} from 'react';
import {IoIosArrowDown, FiMail, FiHome, FiSend, FiSettings, FiPhoneCall,
     FiUser, FiShoppingBag, RiBuilding4Line} from "react-icons/all";
import SideMenuSubItemComponent from "./SideMenuSubItemComponent";
import sendMessage from '../../Assets/images/sendMessage.png';
import StaticTexts from "../../Constants/En/StaticTexts";
import Space20 from "../../Components/Spaces/Space20";
import Space50 from "../../Components/Spaces/Space50";
import EachMenuItem from "./EachMenuItem";
import { css, jsx } from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';
import { Collapse } from 'antd';



const dashboardSideMenuFrame = css `
  width: 240px;
  // height: calc(100vh - 15px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 18px 50px;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  box-shadow: 0 0 29px #ededed;
  margin-left: 20px;`

const collapseMenu = css `
  display: flex;
  flex-direction: column;
  margin: 7px 0;
`
const menuFrame = css `
  width: 100%;
  background-color: #fff;
`
const companyLogo = css `
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    font-size: 84px
  }
`
const collapseMenuIcon = css `
  position: relative;
  top: -2px;
  margin-left: 5px;
  font-size: 20px
`
const collapseHeaderTitle = css `
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  color: ${colors.darkSilver};
  span{
    font-weight: 600;
    font-size: 14px;
    color: ${colors.darkSilver};
  }
`


const DashboardSideMenu = () => {

    const { Panel } = Collapse;

    const callback = (e) => {
      console.log(e);
    }

    return(
        <div css={dashboardSideMenuFrame}>
            <div css={menuFrame}>
              <Space50 />
              <div css={companyLogo}>
                <img src={sendMessage} alt='پنل ارسال پیامک' />
              </div>
              <Space20 />
              <EachMenuItem icon={<FiHome />}
                            title={StaticTexts.dashboardHomeSidemenu} link='/' />

              <Collapse expandIconPosition="left" onChange={callback} className='dashboardAccordionMenuItem'>
                <Panel arrow="left" header={
                  <div css={collapseHeaderTitle}>
                    <span>{StaticTexts.dashboardMessageSidemenu}</span>
                    <FiSend css={collapseMenuIcon} />
                  </div>} key="1">
                  <div css={collapseMenu}>
                      <SideMenuSubItemComponent title={StaticTexts.dashboardQuickSidemenu} link='/quickSend' />
                      <SideMenuSubItemComponent title={StaticTexts.dashboardGroupSidemenu} link='/groupSend' />
                      <SideMenuSubItemComponent title={StaticTexts.dashboardExcelSidemenu} link='/intelegentSend' />
                      <SideMenuSubItemComponent title={StaticTexts.dashboardCitySidemenu} link='/city' />
                  </div>
                </Panel>
              </Collapse>
                  
              <Collapse expandIconPosition="left" onChange={callback} className='dashboardAccordionMenuItem'>
                <Panel arrow="left" header={
                  <div css={collapseHeaderTitle}>
                    <span>{StaticTexts.dashboardMessageListSidemenu}</span>
                    <FiMail css={collapseMenuIcon} />
                  </div>}
                  key="2">
                    <div css={collapseMenu}>
                      <SideMenuSubItemComponent title={StaticTexts.dashboardLastSentSidemenu} link='/' />
                      <SideMenuSubItemComponent title={StaticTexts.dashboardLastReceivedSidemenu} link='/' />
                      <SideMenuSubItemComponent title={StaticTexts.dashboardCenceledMessagesSidemenu} link='/' />
                    </div>
                </Panel>
              </Collapse>
              <Collapse expandIconPosition="left" onChange={callback} className='dashboardAccordionMenuItem'>
                <Panel arrow="left" header={
                  <div css={collapseHeaderTitle}>
                    <span>{StaticTexts.dashboardBuySidemenu}</span>
                    <FiShoppingBag css={collapseMenuIcon} />
                  </div>} key="3">
                  <div css={collapseMenu}>
                      <SideMenuSubItemComponent title={StaticTexts.dashboardSMSSidemenu} link='/' />
                      <SideMenuSubItemComponent title={StaticTexts.dashboardLineSidemenu} link='/' />
                      <SideMenuSubItemComponent title={StaticTexts.dashboardCenceledMessagesSidemenu} link='/' />
                  </div>
                </Panel>
              </Collapse>
              <EachMenuItem icon={<FiSettings />}
                            title={StaticTexts.dashboardSettingSidemenu} link='/'/>
              <EachMenuItem icon={<FiUser />}
                            title={StaticTexts.dashboardProfileSidemenu} link='/' />
              <EachMenuItem icon={<FiPhoneCall />}
                            title={StaticTexts.dashboardSuppoortSidemenu} link='/' />
            </div>
  
        </div>
    )
}


export default DashboardSideMenu;
