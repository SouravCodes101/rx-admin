import axios from "axios";
import encryptionService from "./encryptionService";

const LoginService= {
    login: async function(userName,password){
        try{
            let payload={
                userName:userName,
                password:password
            };
            let encPaylaod=await encryptionService.encryptAuthMain(payload);
            let response = await axios.post(process.env.AUTHAPIHOST+process.env.LOGIN, encPaylaod);
            const decryptedData = await encryptionService.decryptMain(
                response.data.response,
                response.data.key
            );
            return {status:true,data:decryptedData};
        } catch (e) {
            return {status:false,data:e.response.data};
        }
    }
}
export default LoginService;
