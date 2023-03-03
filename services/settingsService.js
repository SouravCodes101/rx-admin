import axios from "axios";
import utility from "../util/utility";

const SettingsService= {
    fetchContactDetails: async function () {
        try {
            let session = await utility.fetchSession();
            let headers = {
                headers: {
                    Authorization: "Bearer " + session.tokens.jwtToken,
                },
            };
            let response = await axios.get(process.env.APIHOST + process.env.FETCH_CONTACT_DETAILS, headers);
            return response.data;
        } catch (e) {
            return false;
        }
    },
    updateContactDetails: async function (params) {
        try {
            let session = await utility.fetchSession();
            let headers = {
                headers: {
                    Authorization: "Bearer " + session.tokens.jwtToken,
                },
            };
            let response = await axios.post(process.env.APIHOST + process.env.UPDATE_CONTACT_DETAILS, params,headers);
            return response.data;
        } catch (e) {
            return false;
        }
    },
    fetchShippingDetails: async function () {
        try {
            let session = await utility.fetchSession();
            let headers = {
                headers: {
                    Authorization: "Bearer " + session.tokens.jwtToken,
                },
            };
            let response = await axios.get(process.env.APIHOST + process.env.FETCH_SHIPPING_DETAILS, headers);
            return response.data;
        } catch (e) {
            return false;
        }
    },
    updateShippingDetails: async function (params) {
        try {
            let session = await utility.fetchSession();
            let headers = {
                headers: {
                    Authorization: "Bearer " + session.tokens.jwtToken,
                },
            };
            let response = await axios.post(process.env.APIHOST + process.env.UPDATE_SHIPPING_DETAILS, params,headers);
            return response.data;
        } catch (e) {
            return false;
        }
    }
}
export default SettingsService;
