/** @jsxRuntime classic /
 /* @jsx jsx */
import {css, jsx} from '@emotion/react';
import NotFoundImage from '../../../Assets/images/NotFound.png';

const pageFrame = css `
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  img{
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 25px;
  }
  h3{
    position: absolute;
    color: #fff;
    font-size: 88px;
    line-height: 88px;
    font-weight: 100;
    text-align: center;
    @media(max-width: 768px){
      font-size: 44px;
      line-height: 44px;
    }
  }
`

const NotFound = () => {
    return(
        <div css={pageFrame}>
            <img src={NotFoundImage} alt='Not Found' />
            <h3>
                OMG.<br />
                You broke the internet.
            </h3>
        </div>
    )
}

export default NotFound;