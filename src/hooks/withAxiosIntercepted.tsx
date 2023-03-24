import axios from "axios";
import { ClinicResponse } from "../models/api/ClinicResponse";


export async function get(url:string){
  return (await axios.get<ClinicResponse[]>(url))
  }
