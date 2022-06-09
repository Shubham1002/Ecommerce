import { Category } from "./category";

export interface Subcategory 
{
    subcatId:bigint;
    cat:Category;
    subcatName:string;
    subcatDesc:string;
    subcatImg:string;
}
