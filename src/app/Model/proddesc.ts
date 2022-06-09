import { Byte } from "@angular/compiler/src/util";
import { Product } from "./product";

export interface Proddesc 
{
    proddescId:number;
    prod:Product;
    prodSize:string;
    prodPrice:number;
    prodQty:number;
    img:Byte[];
    prodCreateddate:Date;
}
