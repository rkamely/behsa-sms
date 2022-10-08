import Routes from './Routes/Routes';
import { Provider } from 'react-redux';
import createStore from './Store/Store';
import {loadState, saveState} from "./Utils/localStorage";
import { Global, css } from '@emotion/react';
import * as colors from './Constants/Colors/Colors';
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';

const persistedState = loadState();
const store = createStore(persistedState);

store.subscribe(() => {
    saveState(store.getState())
});

////////////////////// Global Styling ////////////////////////
const globalStyles = () => css `
  
  @font-face {
    font-family: "mainFont";
    src: local('mainFont'), url('./fonts/iransans.woff') format('truetype');
  }
  *{
    font-family: 'mainFont';
    margin: 0;
    padding: 0;
  }
  .overlayFakeFrame{
    width: 100%;
    height: 100%;
    background-color: transparent;
    top: 0;
    cursor: default;
    left: 0;
    z-index: 1002;
    position: fixed;
  }
  .overlayDarkFakeFrame{
    background-color: #00000069;
    width: 100%;
    height: 100%;
    background-color: transparent;
    top: 0;
    cursor: default;
    left: 0;
    z-index: 1002;
    position: fixed;
  }
  .MuiAccordionSummary-content.Mui-expanded{
    margin: 0 !important;
    
  }
  .Mui-expanded{
    min-height: 25px !important;
  }
  iframe{
    display: none !important;
  }
  .websiteSimpleText{
    font-size: 14px;
    line-height: 26px;
    font-weight: 900;
    color: ${colors.middleSilver};
  }
  .relativePosition{
    position: relative;
  }
  .highcharts-label{
    text{
      fill: ${colors.titleColorOnWhite} !important;
      font-size: 15px !important;
    }
  }
  //Data Table Styles
  .dataTableStyle {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
    & > div{
      transition-duration: 0.3s;
    }
    & > div:hover{
      background-color: ${colors.state200} !important;
    }
    & > div:nth-type-of(odd){
      background-color: ${colors.state100};
    }
    @media (max-width: 768px) {
      & > div:nth-type-of(odd){
        background-color: ${colors.state300};
      }
    }
  }
  .airBnbSlider{
    .MuiSlider-track{
      color: transparent !important;
    }
    .MuiSlider-thumb.Mui-focusVisible, .MuiSlider-thumb:hover{
      box-shadow: none !important;
    }
  }
  .MuiTooltip-tooltip{
    background-color: #000 !important;
    border-radius: 5px !important;
    color: ${colors.light3OnBlack} !important;
    font-size: 11px !important;
    padding: 8px 10px !important;
  }
  .inRowFlexItemsSpaceBetweenAlignStart{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    @media(max-width: 768px){
      flex-direction: column;
    }
  }
  .dataTableHeader{
    width: 100%;
    padding: 0 10px !important;
    list-style: none;
    border-bottom: 2px solid ${colors.middleSilver};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
      background-color: ${colors.state300};
    }
  }
  .websitePageContentFrame{
    position: relative;
    padding-top: 50px;
  }
  .dataTableContentRow{
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-between;
    padding: 15px 5px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .changeRouteLoading{
    position: relative;
    width: 100%;
    height: 3px;
    overflow: hidden;
    top: 0;
    left: 0;
    background-color: #f44336;
    //display: flex;
    //justify-content: center;
    //align-items: center;
  }
  .dashboardAccordionMenuItem{
    border: none;
  }
  .calendarContainer{
    box-shadow: none !important;
  }
  .calendarContainer .heading .title{
    font-size: 15px;
    border: none;
  }
  .ant-picker-panel {
    padding: 10px;
  }
  .calendarContainer .selected button, .calendarContainer .selected button:active, .calendarContainer .selected button:focus, .calendarContainer .selected button:hover :not([disabled]){
    background-color: #ff8d00 !important;
    border: 2px solid #ff8d00 !important;
  }
  .calendarButton{
    background-color: ${colors.orangeMaterial};
    height: 48px;
    &:hover{
      background-color: ${colors.orangeMaterial};
    }
  }
  .ant-collapse-header{
    flex-direction: row-reverse;
  }
  .dashboardAccordionMenuItem .ant-collapse-item{
    border-bottom: none
  }
  .dashboardAccordionMenuItem .ant-collapse-item .ant-collapse-header{
    justify-content: space-between;
    padding: 12px 0;
  }
  .dashboardAccordionMenuItem .ant-collapse-item .ant-collapse-content{
    border-top: none;
  }
  .ant-collapse-content > .ant-collapse-content-box {
    padding: 5px 12px;
  }
`


function App() {
  return (
    <Provider store={store}>
      <ConfigProvider direction="rtl">
        <Global styles={globalStyles} />
        <Routes />
      </ConfigProvider>
    </Provider>
  );
}

export default App;
