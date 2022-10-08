/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
 import { css, jsx } from '@emotion/react';
 import DashboardSectionTitle from '../../../Components/Title/DashboardSectionTitle';
 import { RiGroupLine } from 'react-icons/all';
 
 
 
 const dashContentFrame = css`
   width: 100%;
   border: 1px solid #e9e9e9;
   border-radius: 5px;
   box-shadow: 0 0 29px #ededed;
   @media (max-width: 768px) {
     width: 100% !important;
     margin-left: 0 !important;
   }`
 const mainDashboardContentFrame = css `
   position: relative;
   padding: 30px;
 `
 const mainPageFrame = css `
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin-top: 30px;
   @media (max-width: 768px) {
     flex-direction: column;
   }`
 
 
 
 
 
 
 
 
 
 
 const GroupSend = () => {
     return (
        <div css={dashContentFrame}>
            <DashboardSectionTitle title='ارسال گروهی' color='orange'
                    icon={<RiGroupLine />} description='در این قسمت شما می توانید ارسال SMS به صورت گروهی را انجام دهید.' />
            <div css={mainDashboardContentFrame}>
                <div css={mainPageFrame}>
                  
                </div>
            </div>
        </div>
     )
 }
 
 export default GroupSend;
 