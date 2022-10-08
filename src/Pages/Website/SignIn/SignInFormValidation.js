import validator from 'validator';

const SignInFormValidation = (form) => {

    const { username, password, acceptRules} = form;

    return new Promise((resolve, reject) => {
        let errorsObject = {};

        if(validator.isEmpty(username)){
            errorsObject['username'] = 'Please enter email';
            reject(errorsObject);
        }
        else if(!validator.isEmail(username)){
            errorsObject['username'] = 'Please enter valid email';
            reject(errorsObject);
        }
        if(validator.isEmpty(password)){
            errorsObject['password'] = 'Please enter password';
            reject(errorsObject);
        }
        if (!acceptRules){
            errorsObject['acceptRules'] = 'You should accept rules first';
            reject(errorsObject);
        }
        resolve(true);
    })
}

export default SignInFormValidation;
