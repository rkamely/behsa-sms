/** @jsxRuntime classic /
 /* @jsx jsx */
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import StaticTexts from "../../../Constants/En/StaticTexts";
import TextInputWithLabel from "../../../Components/Input/TextInputWithLabel";
import {Checkbox, Select} from 'antd';
import Space10 from '../../../Components/Spaces/Space10';
import SignUpFormValidation from "./SignUpFromValidation";
import { SignUpActionCreator} from "../../../Redux/Actions/AuthenticationAction";
import { css, jsx } from '@emotion/react';
import * as colors from '../../../Constants/Colors/Colors';
import backgroundImage from '../../../Assets/images/authBg.png';


const mainPageBackground = css`
  position: relative;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh`

const darkFilter = css`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.46);
  z-index: 11`

const authSignature = css `
  position: absolute;
  top: 10px;
  left: 30px;
  color: #fff;
  font-weight: 100;
  font-family: inherit;
  letter-spacing: 2px;
  font-size: 42px;
  z-index: 99;
  text-transform: uppercase`

const authFormFrame = css`
  width: 350px;
  min-height: calc(100vh - 300px);
  background-color: #fff;
  border-radius: 10px;
  z-index: 101;
  padding: 20px 20px 50px;
  display: flex;
  flex-direction: column`
const authFormTitle = css`
  font-size: 22px;
  color: ${colors.darkSilver};
  margin-bottom: 30px`
const checkboxLabel = css`
    color: ${colors.darkSilver};
    font-size: 14px;
    position: relative;
    top: -1px;
    font-weight: 900;`

const errorCheckboxLabel = css`
    color: ${colors.redMaterial};
    font-size: 15px;
    position: relative;
    top: -1px;
    font-weight: 900;`
const haveAccountFrame = css `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  h5{
    text-align: center;
    color: ${colors.darkSilver};
    font-size: 14px;
  }
  a{
    font-size: 14px;
    color: ${colors.materialBlue};
    text-decoration: none;
    margin-left: 5px;
    font-weight: 900;
  }`
const selectOptionFrame = css `
  border-bottom: 2px solid ${colors.inputBorderBottom};
  position: relative;
  height: 44px;
  margin-bottom: 10px;
  //background-color: red;
  label{
    position: absolute;
    top: 20px;
    color: ${colors.inputPlaceholder};
    font-size: 15px;
  }
  div [aria-haspopup = 'listbox']{
    padding-left: 0 !important;
  }
  fieldset{
    height: 44px;
    border-color: transparent !important;
  }`

const selectOptionErrorFrame = css`
  border-bottom: 2px solid ${colors.redMaterial};
  position: relative;
  height: 44px;
  margin-bottom: 10px;
  label{
    position: absolute;
    top: 15px;
    color: ${colors.inputPlaceholder};
  }
  fieldset{
    height: 44px;
    border-color: transparent !important;
  }`

const selectOptionStyle = css `
  font-size: 18px;
  font-weight: 900;
  color: ${colors.inputTextColor};
  border: none !important;`

const errorText = css `
  position: absolute;
  color: ${colors.redMaterial};
  font-size: 12px;
  top: 46px;`
const selectOptionItem = css`
  font-size: 16px;
  font-weight: 900;
  color: ${colors.inputTextColor};
`





const SignUp = (props) => {

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        password: '',
        rePassword: ''
    });
    const [ errors, setErrors ] = useState({});
    const [acceptRules, setAcceptRules] = useState(false);
    const { Option } = Select;

    const dispatch = useDispatch();
    const auth = useSelector(state => state.AuthReducer);

    const changeInput = (name, e) => {
        setErrors({
            ...errors,
            [name]: ''
        });
        setForm({
            ...form,
            [name]: e.target.value
        });
    }
    const handleChangeGender = (e) => {
        setErrors({
            ...errors,
            gender: ''
        });
        setForm({
            ...form,
            gender: e.target.value
        });
    }

    const enterDashboard = () => {
        dispatch(SignUpActionCreator(form))
            .then(()=> props.history.push('/'))
            .catch(err => console.log(err))
    };

    const handleSubmitForm = () => {
        setErrors({});
        SignUpFormValidation(form)
            .then(() => enterDashboard())
            .catch((err) => setErrors(err))
    }


    return(
        <div css={mainPageBackground}>
            {/*<div className={Styles.darkFilter} />*/}
            <h2 css={authSignature}>{StaticTexts.projectName}</h2>
            <div css={authFormFrame}>
                <h3 css={authFormTitle}>{StaticTexts.loginGetStart}</h3>
                <TextInputWithLabel type='text' label='FirstName' autoFocus={true}
                    value={form.firstName} onChange={(e) => changeInput('firstName',e)}
                    error={errors.firstName}
                />
                <TextInputWithLabel type='text' label='LastName' autoFocus={false}
                    value={form.lastName} onChange={(e) => changeInput('lastName',e)}
                    error={errors.lastName}
                />
                <div css={errors.gender? selectOptionErrorFrame: selectOptionFrame}>
                    {
                        form.gender === ''? <label>Select Gender</label>: null
                    }
                    <Select
                        css={selectOptionStyle}
                        value={form.gender === undefined ? 'Select Gender': form.gender}
                        onChange={handleChangeGender}
                    >
                        <Option value={0} css={selectOptionItem}>Man</Option>
                        <Option value={1} css={selectOptionItem}>Woman</Option>
                    </Select>
                    {
                        errors.gender !== ''? <span css={errorText}>{errors.gender}</span>: null
                    }
                </div>
                <TextInputWithLabel type='text' label='Email' autoFocus={false}
                    value={form.email} onChange={(e) => changeInput('email',e)}
                    error={errors.email}
                />
                <TextInputWithLabel type='password' label='Password' autoFocus={false}
                    value={form.password} onChange={(e) => changeInput('password',e)}
                    error={errors.password}
                />
                <TextInputWithLabel type='password' label='Repeat Password' autoFocus={false}
                    value={form.rePassword} onChange={(e) => changeInput('rePassword',e)}
                    error={errors.rePassword}
                />
                <Space10 />
                <div control={<Checkbox value={acceptRules} />}
                    label={<span css={checkboxLabel}>{StaticTexts.agreementTitle}</span>} />
                <Space10 />
                {/* <BorderedButton title={StaticTexts.signUpTitle} loading={auth && auth.loading}
                                onClick={handleSubmitForm} /> */}
                <Space10 />
                <div css={haveAccountFrame}>
                    <h5>{StaticTexts.haveAccountTitle}</h5>
                    <Link to='/signIn'>{StaticTexts.signInTitle}</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
