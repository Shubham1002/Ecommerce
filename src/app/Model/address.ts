import { City } from "./city";

export interface Address 
{
    addressId:number;
    address1:string;
    address2:string;
    district:string;
    city:City;
    postalCode:string;
}
