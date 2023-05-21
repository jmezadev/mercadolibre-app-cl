import {PlusOutlined, CheckOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";
import {getArrayFromLocalStorage, setDataInLocalStorage} from "@/utils/utils";
import {CardActionProps} from "@/componets/atoms/cardAction/cardAction.model";
import {ProductType} from "@/componets/modules/productList/producList.model";

const CardActionComponent = (props: CardActionProps) => {
    const {product} = props;

    const [added, setAdded] = useState<boolean>(false);

    useEffect(() => {
        checkIfProductIsInShoppingCart();
    }, []);

    const checkIfProductIsInShoppingCart = () => {
        const shopping_cart_products = getArrayFromLocalStorage('products');
        const exists = shopping_cart_products.some((item: ProductType) => item.id === product.id);

        if (exists && !added) {
            setAdded(true);
        }
    }

    const addProductToShoppingCart = () => {
        setDataInLocalStorage('products', {
            id: product.id,
            thumbnail: product.thumbnail,
            title: product.title,
            price: product.price,
        });

        setAdded(true);
    }

    if (added) return (
        <>
            <span><CheckOutlined /> Agregado al carrito</span>
        </>
    );

    return <PlusOutlined key="add" onClick={addProductToShoppingCart} />
}

export default CardActionComponent;
