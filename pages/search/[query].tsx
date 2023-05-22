import Header from "@/componets/molecules/header/header.component";
import {useRouter} from "next/router";
import ProductList from "@/componets/modules/productList/productList.component";

const SearchPage = () => {
    const router = useRouter()
    const { query } = router.query as { query: string };

    if(query != undefined) {
        return (
            <>
                <Header query={query} />
                <ProductList query={query} />
            </>
        )
    }
}

export default SearchPage;
