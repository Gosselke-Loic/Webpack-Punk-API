import { instance } from "./configRequest";

const get = async (params) => {
    try {
        console.log("[axios][get] Get request was sended");
        return await instance.get(params);
    } catch(err) {
        console.error("[axios][get] An error was ocurred, ",  err);
        throw new Error(err);
    }
};

export default { get };