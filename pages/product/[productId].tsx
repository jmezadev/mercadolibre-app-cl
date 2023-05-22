import Header from "@/componets/molecules/header/header.component";
import {useRouter} from "next/router";
import ProductDetails from "@/componets/modules/productDetails";

const ProductDetailPage = () => {
    const router = useRouter()
    const { productId } = router.query as { productId: string };

    if(productId != undefined) {
        return (
            <>
                <Header />
                <ProductDetails productId={productId} />
            </>
        )
    }

    return null
}

export default ProductDetailPage;
