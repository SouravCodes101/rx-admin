import encryptionService from "../services/encryptionService";

async function saveSession(payload) {
    let session=encryptionService.encryptAES_new(payload,process.env.localKeyAES);
    await window.localStorage.setItem("session",session);
    return true;
}
async function removeSession() {
    await localStorage.removeItem("session");
    return true;
}
async function fetchSession() {
    let sessionStr=await localStorage.getItem("session");
    if(sessionStr!==null) {
        let session = encryptionService.decryptAES_new(sessionStr, process.env.localKeyAES);
        return session;
    }else{
        return false;
    }
}
function validateEmail( email ) {
    const re = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    if ( re.test(email)) {
        return true;
    }
    else {
        return false;
    }
}

function checkPhone (phone) {
    let a = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(phone);
    return a;
}

function checkNumber(number) {
    // check if the passed value is a number
    if(typeof number == 'number'  && !isNaN(number)){
    
        // check if it is integer
        if (Number.isInteger(number)) {
            console.log(`${number} is integer.`);
            return true;
        }
        else {
            console.log(`${number} is a float value.`);
            return true;
        }
    
    } else {
        console.log(`${number} is not a number`);
        return false;
    }
}


export default {
    checkPhone,
    checkNumber,
    validateEmail,
    saveSession,
    removeSession,
    fetchSession
};