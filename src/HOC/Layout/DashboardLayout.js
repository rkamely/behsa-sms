import React  from 'react'
import {Route} from 'react-router-dom';
import mainStyle from '../../Styles/_mainStyles.scss';
import dashboardStyle from '../../Pages/Dashboard/Dashboard.module.scss';
import { Row, Col} from "antd";
import DashboardMobileHeader from "../../Containers/Header/DashboardMobileHeader";
import DashboardSideMenu from "../../Containers/DashboardSideMenu/DashboardSideMenu";
import DashboardHeader from "../../Containers/Header/DashboardHeader";

const DashboardLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <main>
                <div className={mainStyle.dashboardBackgroundColor}>
                    <DashboardHeader />
                    <div className='myContainer'>
                        <div className={dashboardStyle.dashboardContentFrame}>
                            <Row>
                                <Col xl={24} lg={24} md={24} sm={0} xs={0}>
                                    <DashboardSideMenu />
                                </Col>
                            </Row>
                            <div className={dashboardStyle.dashContentFrame}>
                                <Component {...matchProps} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )} />
    )
};
export default DashboardLayout;
