/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
 import React, { useState } from 'react';
 import { css, jsx } from '@emotion/react';
 import DashboardSectionTitle from '../../../Components/Title/DashboardSectionTitle';
 import { AiOutlineSearch, AiOutlineUser } from 'react-icons/all';
import SimpleSelect from '../../../Components/Select/SimpleSelect';
import ReceiverListBox from './Components/ReceiverListBox';
import Space30 from '../../../Components/Spaces/Space30';
import SelectDateToSend from '../../../Components/Select/SelectDateToSend';
import SimpleTextarea from '../../../Components/Input/SimpleTextarea';
import SubmitButton from '../../../Components/Buttons/SubmitButton';
import CheckMobileValidation from './Components/CheckMobileValidation';
 
 
 
 const dashContentFrame = css`
   width: 100%;
   border: 1px solid #e9e9e9;
   border-radius: 5px;
   box-shadow: 0 0 29px #ededed;
   @media (max-width: 768px) {
     width: 100% !important;
     margin-left: 0 !important;
   }`
 const mainDashboardContentFrame = css `
   position: relative;
   padding: 30px;
 `
 const mainPageFrame = css `
   display: flex;
   flex-direction: row-reverse;
   justify-content: flex-start;
   align-items: flex-start;
   margin-top: 30px;
   @media (max-width: 768px) {
     flex-direction: column;
   }`
   const rightFrame = css `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 30px;
    @media(max-width: 768px){
      width: 100%;
      margin-left: 0;
      margin-bottom: 30px
    }
   `
   const leftFrame = css `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media(max-width: 768px){
      width: 100%;
    }
   `
 

 
 
 const QuickSend = () => {

    const [ lines, setLines ] = useState([
      {
        id: 0,
        value: 10008663
      },
      {
        id: 1,
        value: 3000800621
      },
      {
        id: 2,
        value: 2000541000111
      }
    ]);
    const [ selectedLine, setSelectedLine ] = useState(null);
    const [ receivers, setReceivers ] = useState([]);
    const [ receiversError, setReceiversError ] = useState('');

    const handleReceivers = (list) => {
      setReceiversError('');
      setReceivers(list);
    }

    const handleSubmitForm = () => {
      CheckMobileValidation(receivers)
        .then(() => setReceiversError(''))
        .catch(err => {
          console.log(err);
          setReceiversError(err)
        })
    }


     return (
        <div css={dashContentFrame}>
            <DashboardSectionTitle title='ارسال ساده' color='orange'
                    icon={<AiOutlineUser />} description='در این قسمت شما می توانید ارسال SMS به صورت تکی را انجام دهید.' />
            <div css={mainDashboardContentFrame}>
                <div css={mainPageFrame}>
                  <div css={rightFrame}>
                    <SimpleSelect label='خط ارسال کننده' options={lines} width='250px'
                        onChange={(value) => setSelectedLine(value)} />
                      <Space30/>
                    <ReceiverListBox onChange={(list) => handleReceivers(list)} width='250px' 
                        errors={receiversError} />
                  </div>
                  <div css={leftFrame}>
                    <SelectDateToSend options={lines} width='250px'
                        onChange={(value) => setSelectedLine(value)} />
                      <Space30/>
                    <SimpleTextarea label='متن پیام' onChange={(list) => console.log(list)} width='600px' />
                  </div>
                </div>
                <Space30 />
                <SubmitButton title='ارسال' handleClick={handleSubmitForm} />
            </div>
        </div>
     )
 }
 
 export default QuickSend;
 