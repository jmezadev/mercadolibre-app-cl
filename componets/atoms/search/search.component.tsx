import {SearchOutlined} from '@ant-design/icons';
import { Input } from 'antd';
import {getProducts} from "@/services/products.service";
import {ProductType} from "@/componets/modules/productList/producList.model";
import {SearchProps} from "@/componets/molecules/header/header.model";
import React from "react";

const SearchComponent = (props: SearchProps) => {
    const { setProducts, setSearched } = props;

    const onSearch = async (event: React.KeyboardEvent) => {
        if (event.key == 'Enter') {
            const inputElement = event.target as HTMLInputElement;
            const search = inputElement.value;

            const products_list: ProductType[] = await getProducts(search);
            setProducts(products_list);
            setSearched(search);
        }
    };

    return (
        <>
            <Input
                size="large"
                placeholder="Buscar productos, marcas y más..."
                suffix={<SearchOutlined />}
                onKeyUp={onSearch}
            />
        </>
    )
}

export default SearchComponent;
