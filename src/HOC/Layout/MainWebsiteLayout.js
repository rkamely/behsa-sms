import React  from 'react'
import {Route} from 'react-router-dom';
import { Row, Col } from 'antd';
import mainStyle from '../../Styles/_mainStyles.scss';
import WebsiteHeader from "../../Containers/Header/WebsiteHeader";
import WebsiteFooter from "../../Containers/Footer/WebsiteFooter";
import WebsiteMobileHeader from "../../Containers/Header/WebsiteMobileHeader";


const DashboardLayout = ({component: Component, ...rest}) => {
    window.scrollTo(0, 0);
    return (
        <Route {...rest} render={matchProps => (
            <>
                <main>

                    <div className={mainStyle.dashboardBackgroundColor}>
                        <div className='websiteContainer'>
                            <Row>
                                <Col xl={24} lg={24} md={24} sm={0} xs={0}>
                                    <WebsiteHeader />
                                </Col>
                            </Row>
                            <Component {...matchProps} />
                            <WebsiteFooter />
                        </div>
                    </div>
                </main>
            </>
        )} />
    )
};
export default DashboardLayout;
