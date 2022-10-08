/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import DashboardPageMainTitle from "../../../Components/Title/DashboardPageMainTitle";
import QuickAccessFrame from '../../../Containers/QuickAccessFrame/QuickAccessFrame';
import SendReceiveChart from '../../../Components/Charts/SendReceiveChart';
import DashboardSectionTitle from '../../../Components/Title/DashboardSectionTitle';
import Space50 from '../../../Components/Spaces/Space50';
import Space20 from '../../../Components/Spaces/Space20';
import { AiOutlineBarChart } from 'react-icons/all';



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










const MainPage = () => {
    return (
        <div>
          <QuickAccessFrame />
          <Space50 />
          <DashboardSectionTitle title='نمودار ارسال و دریافت پیامک' color='orange'
                    icon={<AiOutlineBarChart />} />
          <Space20 />
          <SendReceiveChart />
          <Space50 /><Space50 />
        </div>
    )
}

export default MainPage;
