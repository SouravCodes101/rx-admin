import axios from "axios";
import utility from "../util/utility";

const CustomerService= {
    fetchCustomerUsers: async function(page){
        try{
            let session=await utility.fetchSession();
            let headers = {
                headers: {
                    Authorization: "Bearer " + session.tokens.jwtToken,
                },
            };
            let response = await axios.get(process.env.APIHOST+process.env.FETCH_ONLINE_CUSTOMER_USERS+"?page="+page, headers);
            return response.data;
        } catch (e) {
            return false;
        }
    },
    fetchCustomerProfile: async function(id){
        try{
            let session=await utility.fetchSession();
            let headers = {
                headers: {
                    Authorization: "Bearer " + session.tokens.jwtToken,
                },
            };
            let response = await axios.get(process.env.APIHOST+process.env.FETCH_ONLINE_CUSTOMER_PROFILE+"?id="+id, headers);
            return response.data;
        } catch (e) {
            return false;
        }
    },
    fetchCustomerAddress: async function(id){
        try{
            let session=await utility.fetchSession();
            let headers = {
                headers: {
                    Authorization: "Bearer " + session.tokens.jwtToken,
                },
            };
            let response = await axios.get(process.env.APIHOST+process.env.FETCH_ONLINE_CUSTOMER_ADDRESS+"?id="+id, headers);
            return response.data;
        } catch (e) {
            return false;
        }
    },
    fetchCustomerOnlineOrders: async function(id,page){
        try{
            let session=await utility.fetchSession();
            let headers = {
                headers: {
                    Authorization: "Bearer " + session.tokens.jwtToken,
                },
            };
            let response = await axios.get(process.env.APIHOST+process.env.FETCH_ONLINE_CUSTOMER_ORDERS+"?id="+id+"&page="+page, headers);
            return response.data;
        } catch (e) {
            return false;
        }
    },
    searchCustomerByPhone: async function(phone){
        try{
            let session=await utility.fetchSession();
            let headers = {
                headers: {
                    Authorization: "Bearer " + session.tokens.jwtToken,
                },
            };
            let response = await axios.get(process.env.APIHOST+process.env.SEARCH_CUSTOMER_BY_PHONE+"?phone="+phone, headers);
            return response.data;
        } catch (e) {
            return false;
        }
    },
    fetchCustomerOflineOrders: async function(id,page){
        try{
            let session=await utility.fetchSession();
            let headers = {
                headers: {
                    Authorization: "Bearer " + session.tokens.jwtToken,
                },
            };
            let response = await axios.get(process.env.APIHOST+process.env.FETCH_OFFLINE_CUSTOMER_ORDERS+"?id="+id+"&page="+page, headers);
            return response.data;
        } catch (e) {
            return false;
        }
    },
    fetchCustomerInsight: async function(id,page){
        try{
            let session=await utility.fetchSession();
            let headers = {
                headers: {
                    Authorization: "Bearer " + session.tokens.jwtToken,
                },
            };
            let response = await axios.get(process.env.APIHOST+process.env.FETCH_CUSTOMER_PURCHASE_INSIGHT+"?id="+id+"&page="+page, headers);
            return response.data;
        } catch (e) {
            return false;
        }
    },
    fetchCustomerOffline: async function(page){
        try{
            let session=await utility.fetchSession();
            let headers = {
                headers: {
                    Authorization: "Bearer " + session.tokens.jwtToken,
                },
            };
            let response = await axios.get(process.env.APIHOST+process.env.FETCH_ONLINE_CUSTOMER_OFFLINE+"?page="+page, headers);
            return response.data;
        } catch (e) {
            return false;
        }
    },
}
export default CustomerService;
