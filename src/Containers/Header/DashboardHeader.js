/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
 import React, { useState } from 'react';
 import { jsx } from '@emotion/react';
 import { Link } from 'react-router-dom';
 import {VscMail, HiOutlineMenuAlt3, VscBell} from "react-icons/all";
import AccountButton from "./AccountButton/AccountButton";
import * as style from './HeaderStyle';
import PriceFormat from '../../Utils/PriceFormat';
import Logo from '../../Assets/images/mainLogo.png';
import StaticTexts from "../../Constants/En/StaticTexts";
import { Drawer, Row, Col, Button } from 'antd';
import { AiOutlineArrowRight } from 'react-icons/ai';





const DashboardHeader = () => {

    const [drawer, setDrawer] = useState(false);

    return (
        <div css={style.headerMainFrame}>
            <div className='myContainer'>
                <div css={style.dashboardHeaderStyle}>
                    <div css={style.dashboardHeaderLeftSide}>
                        <AccountButton />
                        <div css={style.reminderStyleButton}>
                            <h6>2</h6>
                            <Button css={style.iconButton}>
                                <VscBell css={style.iconButtonStyle} />
                            </Button>
                        </div>
                        <div css={style.reminderStyleButton}>
                            <h6>5</h6>
                            <Button css={style.iconButton}>
                                <VscMail css={style.iconButtonStyle} />
                            </Button>
                        </div>
                    </div>
                    <div className='inRowFlexItems'>
                        <Row>
                            <Col xl={24} lg={24} md={24} sm={0} xs={0}>
                                <h5 css={style.dashboardTitle}>{StaticTexts.dashboardMainTitle}</h5>
                            </Col>
                        </Row>
                        <img src={Logo} alt={StaticTexts.projectName} css={style.dashboardSideSignature}/>
                        <Row>
                            <Col xl={0} lg={0} md={0} sm={24} xs={24}>
                                <button
                                    css={style.hamburgerMenuIcon}
                                    onClick={()=>setDrawer(true)}>
                                    <HiOutlineMenuAlt3/>
                                </button>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div css={style.dashboardSubHeaderStyle}>
                    <div css={style.dashboardHeaderLeftSide}>
                        <Button css={style.serviceBuy}>
                            <Link to='/'>
                                خرید سرویس 
                            </Link>
                        </Button>
                        <Button css={style.increaseCredit}>
                            <Link to='/'> افزایش اعتبار</Link>
                        </Button>
                        <h4 css={style.accoutText}>اعتبار: {PriceFormat(36000)} تومان </h4>
                    </div>
                    <div className='inRowFlexItems'>
                        <Link to='/' css={style.simpleLink}>
                            لیست تعرفه ها
                        </Link>
                        <h5 to='/' css={style.simpleText}>
                            پلن پایه: استاندارد
                        </h5>
                    </div>
                </div>
            </div>
            <Drawer placement="right" onClose={()=>setDrawer(false)} visible={drawer}>
                <div css={style.drawerFrame}>
                    <Button css={style.closeDrawerButton}
                    onClick={()=>setDrawer(false)}>
                        <AiOutlineArrowRight css={style.closeDrawerIcon} />
                    </Button>
                </div>
            </Drawer>
        </div>
    )
}

export default DashboardHeader;
