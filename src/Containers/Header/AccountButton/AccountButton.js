/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { useState } from "react";
import {
    AiOutlineSetting,
    AiOutlinePoweroff,
    IoChevronDownOutline, IoChevronUpOutline, VscBell, FaRegUserCircle, AiOutlineUser
} from 'react-icons/all';
import * as styles from './AccountBottunStyle';




const AccountButton = () => {

    const [ toggleAccount, setToggleAccount] = useState(false);

    return(
        <div css={styles.AccountButtonFrame} onClick={() => setToggleAccount(!toggleAccount)}>
            {
              toggleAccount?
              <div className='overlayDarkFakeFrame' onClick={() => setToggleAccount(!toggleAccount)} />: null
            }
            <div css={styles.accountButtonDetails}>
                <>
                    {
                        toggleAccount?
                        <IoChevronUpOutline css={styles.arrowIconStyle} />:
                        <IoChevronDownOutline css={styles.arrowIconStyle} />
                    }
                </>
                <AiOutlineUser css={styles.accountIcon} />
            </div>

            {
                toggleAccount?
                    <div css={styles.accountCollapseFrame}>
                        <ul>
                           <li css={styles.accountCollapseMenuItem}>
                              حساب من    
                              <AiOutlineUser css={styles.accountCollapseIcon} />
                             
                            </li>
                            <li css={styles.accountCollapseMenuItem}>
                               تنظیمات   
                                <AiOutlineSetting css={styles.accountCollapseIcon} />
                            </li>
                            <li css={styles.accountCollapseMenuItem}>
                                خروج  
                                <AiOutlinePoweroff css={styles.accountCollapseIcon} />
                            </li>
                        </ul>
                    </div>: null
            }
        </div>
    )
}

export default AccountButton;
