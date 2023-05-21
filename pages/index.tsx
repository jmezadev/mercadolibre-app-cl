import Header from "@/componets/molecules/header/header.component";
import {useEffect, useState} from "react";
import ProductList from "@/componets/modules/productList/productList.component";
import {ProductType} from "@/componets/modules/productList/producList.model";

const Home = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [searched, setSearched] = useState<string>('');

    return (
        <>
            <Header setProducts={setProducts} setSearched={setSearched} />
            <ProductList products={products} searched={searched} />
        </>
    )
}

export default Home;
