import {Link} from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { BsBarChart } from 'react-icons/bs';
import {FaInternetExplorer} from 'react-icons/fa';

/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
// import { css, jsx } from '@emotion/react';
// import * as colors from '../../Constants/Colors/Colors';


const DashboardSideMenuItem = (props) => {

    const { linkTo, title, menuType } = props;

    let menuIcon;

    switch (menuType) {
        case 'dashboard':
            menuIcon =
                <BsBarChart />;
            break;
        case 'websites':
            menuIcon = <FaInternetExplorer />
            break;
        default:
            break;
    }

    const urlParam = props.location.pathname;

    return <Link to={linkTo}>
        <li className={urlParam === linkTo? 'activeDashSideMenuItem': 'dashSideMenuItem'}>
            { menuIcon }
            { title }
        </li>
    </Link>
}

export default withRouter(DashboardSideMenuItem);
