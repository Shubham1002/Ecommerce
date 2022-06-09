import { Merchant } from "./merchant";
import { Proddesc } from "./proddesc";
import { Subcategory } from "./subcategory";

export interface Product 
{
    prodId:number;
    scat:Subcategory;
    merchant:Merchant;
    prodName:string;
    prodDesc:string;
    proddesc:Proddesc[];
}
