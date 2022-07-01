import axios from "../libs/axios";
import { params } from "../libs/configRequest";

/**
 * fetch all the beers 
 * @returns A promise or throw an error
 */
const getBeers = async () => {
    try {
        console.log("[serviceBeer][getBeers] Get request was sended");
        const response = await axios.get(params.beers);
        if(parseInt(response.status) === 200) {return await response.data}
    } catch(err) {
        console.error("[serviceBeer][getBeers] An error was ocurred, ",  err);
        throw new Error(err);
    }
}

export default getBeers;