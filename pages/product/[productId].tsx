import Header from "@/componets/molecules/header/header.component";
import {useState} from "react";
import {ProductType} from "@/componets/modules/productList/producList.model";
import {useRouter} from "next/router";
import ProductDetails from "@/componets/modules/productDetails";

const ProductDetailPage = () => {
    const router = useRouter()
    const { productId } = router.query as { productId: string };

    const [products, setProducts] = useState<ProductType[]>([]);
    const [searched, setSearched] = useState<string>('');

    if(productId != undefined) {
        return (
            <>
                <Header setProducts={setProducts} setSearched={setSearched} />
                <ProductDetails productId={productId} />
            </>
        )
    }

    return null
}

export default ProductDetailPage;
