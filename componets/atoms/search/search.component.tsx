import {SearchOutlined} from '@ant-design/icons';
import { Input } from 'antd';
import {SearchProps} from "@/componets/molecules/header/header.model";
import React, {ChangeEvent, useEffect, useState} from "react";
import {useRouter} from "next/router";

const SearchComponent = (props: SearchProps) => {
    const { query = '' } = props;

    const router = useRouter()

    const [inputValue, setInputValue] = useState('');

    const onSearch = (event: React.KeyboardEvent) => {
        if (event.key == 'Enter') {
            const inputElement = event.target as HTMLInputElement;
            const search = inputElement.value;

            router.push('/search/' + search);
        }
    };

    const changeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    useEffect(() => {
        setInputValue(query);
    }, [])

    return (
        <>
            <Input
                size="large"
                placeholder="Buscar productos, marcas y más..."
                suffix={<SearchOutlined />}
                value={inputValue}
                onKeyUp={onSearch}
                onChange={changeInputValue}
            />
        </>
    )
}

export default SearchComponent;
