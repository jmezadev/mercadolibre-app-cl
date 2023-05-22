import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {ShoppingCartStyles} from "@/componets/atoms/shoppingCart/shoppingCart.styles";
import {formatNumber, getArrayFromLocalStorage} from "@/utils/utils";
import {useState} from "react";
import {Avatar, Card, Drawer} from "antd";
import {ProductType} from "@/componets/modules/productList/producList.model";

const {Meta} = Card;

const ShoppingCartComponent = () => {
    const [open, setOpen] = useState(false);

    const [products, setProducts] = useState([]);

    const setShoppingCartProducts = () => {
        const shoppingCartProducts = getArrayFromLocalStorage('products');
        setProducts(shoppingCartProducts);
    }

    const showShoppingCart = () => {
        setShoppingCartProducts();
        setOpen(true);
    };

    const closeShoppingCart = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="shopping-cart-icon">
                <FontAwesomeIcon
                    icon={faCartShopping}
                    size="2x"
                    onClick={showShoppingCart}
                />
            </div>

            <Drawer
                title="Carrito de compras"
                placement="right"
                onClose={closeShoppingCart}
                open={open}
                size="large"
                footer={
                    <div className="shopping-cart-products-footer">
                        <span>
                            Total: $ {formatNumber(products.reduce(function (total: number, product: ProductType) {
                            return total + product.price;
                        }, 0))}
                        </span>
                    </div>
                }
            >
                <div className="shopping-cart-products-container">
                    {
                        products.length == 0
                            ?
                            <div>No hay productos agregados al carrito</div>
                            :
                            (
                                (
                                    products.map((product: ProductType, key: number) => {
                                        return (
                                            <Card style={{marginTop: 16}} key={key}>
                                                <Meta
                                                    avatar={<Avatar src={product.thumbnail} shape="square" size={64}/>}
                                                    title={product.title}
                                                    description={'$ ' + formatNumber(product.price)}
                                                />
                                            </Card>
                                        )
                                    })
                                )
                            )
                    }
                </div>
            </Drawer>

            <style jsx>{ShoppingCartStyles}</style>
        </>
    )
}

export default ShoppingCartComponent;
