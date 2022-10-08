/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
 import { css, jsx } from '@emotion/react';
 import { Select } from 'antd';



 const formFrame = (width) => css `
    width: ${width};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media(max-width: 768px){
        width: 100% !important;
    }
 `
const selectStyle = css `
    width: 100%;
`
const labelStyle = css `
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -1px
`


 const SimpleSelect = (props) => {

    const { label, options, onChange, width='200px' } = props;
    const { Option } = Select;

    return(
        <div css={formFrame(width)}>
            <label css={labelStyle} htmlFor='simpleSelectLabel'>{label}</label>
            <Select id='select' defaultValue="" onChange={onChange} css={selectStyle} id='#simpleSelectLabel'>
                {
                    options.map((item, index) => <Option key={index}
                        value={item.value}>{item.value}</Option>)
                }
            </Select>
        </div>
    )
 }

 export default SimpleSelect;