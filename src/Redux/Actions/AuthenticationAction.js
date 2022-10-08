import {SIGNIN_ACTION, SIGNIN_FAILED_ACTION,
    SIGNIN_SUCCESS_ACTION} from "../../Constants/ActionTypes";
import FetchURL from "../../Utils/FetchURL";
import {SIGNUP_ACTION, SIGNUP_FAILED_ACTION,
    SIGNUP_SUCCESS_ACTION} from "../../Constants/ActionTypes/ActionTypes";
import BaseURL from "../../Utils/BaseURL";
import axios from "axios";



/********************** Sign In Action Function ***********************/
export const SignInActionCreator = (form) => {
    let baseUrl = BaseURL();
    return async (dispatch) => {
        dispatch({
            type: SIGNIN_ACTION,
            logged: false,
            loading: true
        });

        return new Promise((resolve, reject) => {
            var myFormData = new FormData();
            myFormData.append('username', form.username);
            myFormData.append('password', form.password);
            axios({
                method: 'POST',
                url: baseUrl + 'api/login/',
                data: myFormData
            })
                .then((res) => {
                    resolve(res.data.data);
                    dispatch({
                        type: SIGNIN_SUCCESS_ACTION,
                        logged: true,
                        loading: false,
                        userInfo: res.data.data.email
                    })
                })
                .catch((err) => {
                    reject(err);
                    console.log(err);
                    dispatch({
                        type: SIGNIN_FAILED_ACTION,
                        logged: false,
                        loading: false,
                        error: true
                    })
                })
        })
    }
};


/********************** Sign Up Action Function ***********************/
export const SignUpActionCreator = (form) => {
    return async (dispatch) => {
        dispatch({
            type: SIGNUP_ACTION,
            loading: true
        });
        try {
            const response = await FetchURL({
                url: 'https://jsonplaceholder.typicode.com/posts/1',
                method: 'GET',
                data: form
            });
            dispatch({
                type: SIGNUP_SUCCESS_ACTION,
                loading: false
            })
        }
        catch (e) {
            dispatch({
                type: SIGNUP_FAILED_ACTION,
                loading: false,
                error: true
            })
        }
    }
};
