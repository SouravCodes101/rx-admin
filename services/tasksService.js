import axios from "axios";
import encryptionService from "./encryptionService";
import utility from "../util/utility";

const TasksService= {
    fetchTaskList: async function(page){
        try{
            let session=await utility.fetchSession();
            let headers = {
                headers: {
                    Authorization: "Bearer " + session.tokens.jwtToken,
                },
            };
            let response = await axios.get(process.env.APIHOST+process.env.FETCH_TASKS+"?page="+page, headers);
            return response.data;
        } catch (e) {
             return false;
        }
    }
}
export default TasksService;
