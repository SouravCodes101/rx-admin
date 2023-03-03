import axios from "axios";
import utility from "../util/utility";

const DeliveryService = {
    fetchCustomerUsers: async function (page) {
        try {
            let session = await utility.fetchSession();
            let headers = {
                headers: {
                    Authorization: "Bearer " + session.tokens.jwtToken,
                },
            };
            let response = await axios.get(process.env.APIHOST + process.env.FETCH_ONLINE_CUSTOMER_USERS + "?page=" + page, headers);
            return response.data;
        } catch (e) {
            return false;
        }
    },
    searchCustomerByPin: async function (pin) {
        try {
            let session = await utility.fetchSession();
            let headers = {
                headers: {
                    Authorization: "Bearer " + session.tokens.jwtToken,
                },
            };
            let response = await axios.get(process.env.APIHOST + process.env.SEARCH_CUSTOMER_BY_PIN + "?pin=" + pin, headers);
            return response.data;
        } catch (e) {
            return false;
        }
    }
}

export default DeliveryService;