import validator from 'validator';

const SignUpFormValidation = (form) => {

    const { firstName, lastName, gender, email, password, rePassword} = form;

    return new Promise((resolve, reject) => {
        let errorsObject = {};

        if(validator.isEmpty(firstName)){
            errorsObject['firstName'] = 'Please enter firstName';
            reject(errorsObject);
        }
        if(validator.isEmpty(lastName)){
            errorsObject['lastName'] = 'Please enter lastName';
            reject(errorsObject);
        }
        if(gender === ''){
            errorsObject['gender'] = 'Please select gender';
            reject(errorsObject);
        }

        if(validator.isEmpty(email)){
            errorsObject['email'] = 'Please enter email';
            reject(errorsObject);
        }
        else if(!validator.isEmail(email)){
            errorsObject['email'] = 'Please enter valid email';
            reject(errorsObject);
        }
        if(validator.isEmpty(password)){
            errorsObject['password'] = 'Please enter password';
            reject(errorsObject);
        }
        if(validator.isEmpty(password)){
            errorsObject['rePassword'] = 'Please enter password again';
            reject(errorsObject);
        }
        if(!validator.equals(password, rePassword)){
            errorsObject['rePassword'] = 'Not same password';
            reject(errorsObject);
        }
        resolve(true);
    })
}

export default SignUpFormValidation;