import axios from "axios";
import utility from "../util/utility";

const VendorService= {
    fetchVendorList: async function(page){
        try{
            let session=await utility.fetchSession();
            let headers = {
                headers: {
                    Authorization: "Bearer " + session.tokens.jwtToken,
                },
            };
            let response = await axios.get(process.env.APIHOST+process.env.FETCH_VENDOR_LIST+"?page="+page, headers);
            return response.data;
        } catch (e) {
            return false;
        }
    },
    addVendor: async function (params) {
        try {
            let session = await utility.fetchSession();
            let headers = {
                headers: {
                    Authorization: "Bearer " + session.tokens.jwtToken,
                },
            };
            let response = await axios.post(process.env.APIHOST + process.env.ADD_VENDOR, params,headers);
            return response.data;
        } catch (e) {
            return false;
        }
    },
    fetchVendorById: async function(vendorId){
        try{
            let session=await utility.fetchSession();
            let headers = {
                headers: {
                    Authorization: "Bearer " + session.tokens.jwtToken,
                },
            };
            let response = await axios.get(process.env.APIHOST+process.env.FETCH_VENDOR_BY_ID+"?vendorId="+vendorId, headers);
            return response.data;
        } catch (e) {
            return false;
        }
    },
    editVendor: async function (params) {
        try {
            let session = await utility.fetchSession();
            let headers = {
                headers: {
                    Authorization: "Bearer " + session.tokens.jwtToken,
                },
            };
            let response = await axios.post(process.env.APIHOST + process.env.EDIT_VENDOR, params,headers);
            return response.data;
        } catch (e) {
            return false;
        }
    }
}
export default VendorService;
