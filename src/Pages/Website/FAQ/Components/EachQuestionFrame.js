/** @jsxRuntime classic /
 /* @jsx jsx */
import {useEffect, useState} from "react";
import {css, jsx} from '@emotion/react';
import * as colors from '../../../../Constants/Colors/Colors';
import {AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/all";
import {Collapse} from "antd";


const questionFrame = css`
  display: flex;
  cursor: default;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid ${colors.state300};
  border-radius: 50px;
  @media(max-width: 768px){
    border-radius: 30px;
    flex-direction: column !important;
    p{
      font-size: 13px !important;
    }
  }
  p{
    padding: 0 35px;
    font-size: 14px;
    line-height: 24px;
    text-align: justify;
    color: ${colors.primaryBlack};
    padding-bottom: 30px;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }`

const questionRowHeader = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px 15px 35px;
  @media(max-width: 768px){
    padding: 10px;
    h6{
      font-size: 18px !important;
    }
    h3{
      font-size: 14px !important;
    }
  }
  h6{
    font-size: 32px;
    line-height: 40px;
    color: ${colors.black};
    position: relative;
    top: 3px;
  }
  h3{
    font-size: 18px;
    line-height: 32px;
    color: ${colors.primaryBlack};
  }
`

const arrowIconFrame = css`
  width: 40px;
  height: 40px;
  background-color: ${colors.black};

  &:hover {
    background-color: ${colors.black};
  }

  svg {
    font-size: 22px;
    color: #fff;
  }
`


const EachQuestionFrame = (props) => {

    const {question, id, answer} = props.item;
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        setIsOpen(false);
    }, [props]);

    return (
        <li css={questionFrame}>
            <div css={questionRowHeader}>
                <h6>0{id + 1}.</h6>
                <h3>{question}</h3>
                {
                    isOpen ?
                        <AiOutlineArrowUp/> :
                        <AiOutlineArrowDown/>
                }

            </div>
            {
                <Collapse in={isOpen}>
                    <p>{answer}</p>
                </Collapse>
            }
        </li>
    )
}

export default EachQuestionFrame;