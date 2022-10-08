// import {useState, useEffect} from 'react';
// import {connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
//
// import DashboardSideMenuItem from "./DashboardSideMenuItem";
// import { isLoginPending, logOutRequest} from "../../Redux/Actions/AuthenticationAction";
// import StaticTexts from "../../Constants/En/StaticTexts";
//
// /** @jsxRuntime classic /
//  /* @jsx jsx */
// import { css, jsx } from '@emotion/react';
// import * as colors from '../../Constants/Colors/Colors';
//
// const DashboardDesktopSideMenu = (props) => {
//     const [menuItems, setMenuItems] = useState([]);
//
//     useEffect(() => {
//         setMenuItems([
//             {
//                 linkTo: '/dashboard',
//                 title: StaticTexts.dashboardSideMenu,
//                 type: 'dashboard'
//             },
//             {
//                 linkTo: '/websites',
//                 title: StaticTexts.websitesSideMenu,
//                 type: 'websites',
//             }
//         ])
//     }, [])
//
//
//     return (
//         <div className='dashSideMenuFrame'>
//             <ul className='selectPagesMenu'>
//                 {
//                     menuItems.map((item, index) =>
//                         <DashboardSideMenuItem
//                             title={item.title}
//                             linkTo={item.linkTo}
//                             menuType={item.type}
//                             key={index}
//                         />
//                     )
//                 }
//             </ul>
//         </div>
//     )
// }
//
//
// export default withRouter(connect()(DashboardDesktopSideMenu));
