import {Card} from 'antd';
import {ProductStyles} from "@/componets/molecules/product/product.styles";
import {ProductProps} from "@/componets/modules/productList/producList.model";
import CardAction from "@/componets/atoms/cardAction";
import {formatNumber} from "@/utils/utils";

const ProductComponent = (props: ProductProps) => {
    const {product} = props;

    return (
        <>
            <div className="product-container">
                <Card
                    className="product-card"
                    hoverable
                    bordered
                    style={{width: 320}}
                    actions={[
                        <CardAction key={product.id} product={product} />,
                    ]}
                >
                    <div className="product-image-container">
                        <img alt={product.title} src={product.thumbnail} className="product-image" />
                    </div>
                    <p className="product-title" title={product.title}>{product.title}</p>
                    <p className="product-price">$ {formatNumber(product.price)} <small>{product.currency_id}</small></p>
                </Card>
            </div>

            <style jsx>{ProductStyles}</style>
        </>
    )
}

export default ProductComponent;
