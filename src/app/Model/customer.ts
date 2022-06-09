import { Address } from "./address";


export interface Customer 
{
    cId:number;
    cemail:string;
    cpwd:string;
    cname:string;
    cage:number;
    cphno:number;
    address:Address;
    createddate:Date;
}
