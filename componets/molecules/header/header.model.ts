import {Dispatch, SetStateAction} from "react";
import {ProductType} from "@/componets/modules/productList/producList.model";

export interface SearchProps {
    setProducts: Dispatch<SetStateAction<ProductType[]>>,
    setSearched: Dispatch<SetStateAction<string>>,
}

export interface HeaderProps {
    setProducts: Dispatch<SetStateAction<ProductType[]>>,
    setSearched: Dispatch<SetStateAction<string>>,
}
