/** @jsxRuntime classic /
 /* @jsx jsx */
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import {Checkbox} from 'antd';
import StaticTexts from "../../../Constants/En/StaticTexts";
import signInFormValidation from './SignInFormValidation';
import Space10 from '../../../Components/Spaces/Space10';
import {SignInActionCreator} from '../../../Redux/Actions/AuthenticationAction'
import TextInputWithLabel from "../../../Components/Input/TextInputWithLabel";
import { css, jsx } from '@emotion/react';
import * as colors from '../../../Constants/Colors/Colors';
import backgroundImage from '../../../Assets/images/authBg.png';



const loginPageBackground = css`
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
  //min-height: calc(100vh - 300px);
  background-color: #fff;
  border-radius: 10px;
  z-index: 101;
  padding: 20px 20px 40px;
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
    font-size: 14px;
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
  }
`
const errorText = css `
  position: absolute;
  color: ${colors.redMaterial};
  font-size: 11px;
  font-weight: 900;
  top: 35px;
  left: 30px;
`
const acceptRulesFrame = css `
  position: relative;
  display: flex;
  flex-direction: column;
`


const SignIn = (props) => {

    const [form, setForm] = useState({
        username: '',
        password: '',
        acceptRules: false
    });
    const [ errors, setErrors ] = useState({});
    const [acceptRules, setAcceptRules] = useState(false);

    const auth = useSelector(state => state.AuthReducer);
    const dispatch = useDispatch();

    const changeInput = (name, e) => {
        setErrors({
            ...errors,
            [name]: ''
        })
        setForm({
            ...form,
            [name]: e
        });
    }
    const enterDashboard = () => {
        dispatch(SignInActionCreator(form))
            .then((response)=> {
                // if (response.access_token){
                //     props.history.push('/portfolio');
                //     localStorage.setItem('token', response.access_token);
                //     pushSnack('success', 'Success Login');
                // }
                // else{
                //     pushSnack('error', response);
                // }
            })
            .catch(() => {})
    };

    const handleSubmitForm = () => {
        setErrors({});
        signInFormValidation(form)
            .then(() => enterDashboard())
            .catch((err) => setErrors(err))
    }

    return(
        <div css={loginPageBackground}>
            {/*<div css={darkFilter} />*/}
            {/*<img src={logo} alt={StaticTexts.projectName}/>*/}
            <h2 css={authSignature}>{StaticTexts.projectName}</h2>
            <div css={authFormFrame}>
                <h3 css={authFormTitle}>{StaticTexts.loginGetStart}</h3>
                <TextInputWithLabel type='text' label='Email' autoFocus={true}
                    value={form.username} onChange={(e) => changeInput('username',e.target.value)}
                    error={errors.username} />
                <TextInputWithLabel type='password' label='Password' autoFocus={false}
                    value={form.password} onChange={(e) => changeInput('password',e.target.value)}
                    error={errors.password} />
                <Space10 />
                <div css={acceptRulesFrame}>
                    <div control={<Checkbox value={acceptRules}
                                    onClick={(e) =>
                                        changeInput('acceptRules',!form.acceptRules)} />}
                                      label={<span css={checkboxLabel}>
                        {StaticTexts.agreementTitle}</span>} />
                    {
                        errors.acceptRules !== ''?
                            <span css={errorText}>{errors.acceptRules}</span>: null
                    }
                </div>
                <Space10 />
                {/* <BorderedButton title={StaticTexts.getStartButtonTitle}
                                loading={ auth && auth.loading}
                                onClick={handleSubmitForm} /> */}
                <Space10 />
                <div css={haveAccountFrame}>
                    <h5>{StaticTexts.notRegisterYourAccount}</h5>
                    <Link to='signUp'>{StaticTexts.signUpTitle}</Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
