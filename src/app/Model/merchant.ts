import { Address } from "./address";


export interface Merchant 
{
    cId:number;
    cemail:string;
    cpwd:string;
    cname:string;
    cage:number;
    cphno:number;
    address:Address;
    createddate:Date;
    mfirmname:string;
    mgstno:string
}
