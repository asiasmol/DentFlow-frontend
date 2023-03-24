import { get } from "../hooks/withAxiosIntercepted";

export let ClinicApi = {
     getAll : async ()=>{
        return (await get("http://localhost:8080/api/clinics/all")).data
    }
}

