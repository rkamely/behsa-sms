/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import {useState} from 'react';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {FiCalendar, IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/all";
import * as colors from '../../Constants/Colors/Colors';
import {TextField} from "@material-ui/core";
import {inputTextColor} from "../../Constants/Colors/Colors";

const dateRangeFrame = css `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  min-height: 24px;
  position: absolute;
  padding: 0 7px;
  top: 0;
  width: 160px;
  z-index: 99;
  border-radius: 100px;
  border: 1px solid ${colors.inputBorderBottom};
  
  svg{
    font-size: 16px;
    color: ${colors.middleSilver};
  }`

const inputStyle = css `
  z-index: 102;
  input{
    color: transparent;
    border-color: transparent !important;
  }
  .MuiInput-underline:before{
    border-bottom: none !important;
  }`
const calendarText = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  h6{
    font-size: 15px;
    text-transform: capitalize;
    font-weight: 100;
    margin: 0 15px 0 3px;
    padding: 7px;
    color: ${colors.inputTextColor};
  }
`
const dateText = css `
  flex-direction: row;
  font-size: 15px;
  color: ${colors.inputTextColor};
  padding: 7px;
`



const SelectDateRange = (props) => {
    const [value, setValue] = useState([null, null]);
    const [openPicker, setOpenPicker] = useState(false);

    const onCloseHandler = () => {
        setOpenPicker(false);
        props.changePicker(value);
    }

    return(
        <div style={{ position: 'relative'}}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateRangePicker
                    startText=""
                    endText=""
                    disableFuture={true}
                    value={value}
                    onOpen={() => setOpenPicker(true)}
                    onClose={onCloseHandler}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(startProps, endProps) => (
                        <div>
                            <TextField {...startProps} css={inputStyle} />
                        </div>
                    )}
                />
            </LocalizationProvider>
            <div css={dateRangeFrame}>
                <div css={calendarText}>
                    <FiCalendar />
                    {
                        value[0] !== null?
                            <div css={dateText}>
                                {value[0] !== null? value[0].toString().substr(4, 6): ''}
                                {value[0] !== null ? ` to `: null}
                                {value[1] !== null? value[1].toString().substr(4, 6): ''}
                            </div>:
                        <h6>Select Date</h6>
                    }
                </div>
                {
                    openPicker? <IoMdArrowDropup />: <IoMdArrowDropdown />
                }
            </div>
        </div>
    )
}

export default SelectDateRange;
