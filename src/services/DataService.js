import httpCommon from "./http-common";


class DataService{
    async getDataPerson(){
        return await httpCommon.get("/person")
    }
}

// async function DataService(){
//     const dataService = await httpCommon.get("/person");
// }


export default new DataService();