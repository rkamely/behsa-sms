import validator from 'validator';

const CheckMobileValidation = (list) => {

    return new Promise((resolve, reject) => {
        let errorsObject = '';

        if(list.length === 0){
            errorsObject = 'وارد کردن این فیلد الزامی است';
            reject(errorsObject);
        }
        else{
            list.map(item => {
                if(!validator.isMobilePhone(item, 'fa-IR')){
                    errorsObject = 'شماره موبایل معتبر وارد کنید';
                    reject(errorsObject);
                }
            })
        }
        resolve(true);
        
    })
}

export default CheckMobileValidation;
