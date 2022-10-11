import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import {Progress } from 'antd';
import QuickSend from '../Pages/Dashboard/QuickSend/QuickSend';



const Router = () => {
    const SignIn = React.lazy(() => import('../Pages/Website/SignIn/SignIn'));
    const SignUp = React.lazy(() => import('../Pages/Website/SignUp/SignUp'));
    const MainPage = React.lazy(() =>
        import('../Pages/Dashboard/MainPage/MainPage'));
    const QuickSend = React.lazy(() =>
        import('../Pages/Dashboard/QuickSend/QuickSend'));
    const GroupSend = React.lazy(() =>
        import('../Pages/Dashboard/GroupSend/GroupSend'));
    const Legal = React.lazy(() =>
        import('../Pages/Website/Legal/Legal'));
    const FAQ = React.lazy(() =>
        import('../Pages/Website/FAQ/FAQ'));
    const NotFound = React.lazy(() =>
        import('../Pages/Website/NotFound/NotFound'));
    const DashboardLayout = React.lazy(() =>
        import('../HOC/Layout/DashboardLayout'));
    const AuthWebsiteLayout = React.lazy(() =>
        import('../HOC/Layout/AuthWebsiteLayout'));
    const MainWebsiteLayout = React.lazy(() =>
        import('../HOC/Layout/MainWebsiteLayout'));


    return(
        <BrowserRouter>
            <React.Suspense fallback={
                <div className='changeRouteLoading'>
                    <Progress percent={100} status="active" />
                </div>
            }>
                <Switch>
                    <DashboardLayout path='/' exact component={MainPage} />
                    <DashboardLayout path='/quickSend' exact component={QuickSend} />
                    <DashboardLayout path='/groupSend' exact component={GroupSend} />
                    <AuthWebsiteLayout path='/signIn' component={SignIn} />
                    <AuthWebsiteLayout path='/signUp' component={SignUp} />
                    <MainWebsiteLayout component={MainPage} />
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    )
}

export default Router;
