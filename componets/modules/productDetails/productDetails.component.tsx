import {ProductDetailsStyles} from '@/componets/modules/productDetails/productDetails.styles'
import {getProductDescription, getProductDetail} from "@/services/products.service";
import {useEffect, useState} from "react";
import {Col, Descriptions, Image, Row} from 'antd';
import {formatNumber} from "@/utils/utils";
import {
    Attribute,
    Picture,
    ProductDetail,
    ProductDetailProps
} from "@/componets/modules/productDetails/productDetail.model";

const ProductDetailsComponent = (props: ProductDetailProps) => {
    const {productId} = props;

    const [product, setProduct] = useState<ProductDetail>();
    const [productAttributes, setProductAttributes] = useState<Attribute[]>([]);
    const [productPictures, setProductPictures] = useState<Picture[]>([]);
    const [productDescription, setProductDescription] = useState();

    const getProductDetails = async () => {
        const productDetailData: ProductDetail = await getProductDetail(productId);
        const productDetailDataAttributes: Attribute[] = productDetailData.attributes;
        const productDetailDataPictures: Picture[] = productDetailData.pictures;
        const productDescriptionData = await getProductDescription(productId);

        setProduct(productDetailData);
        setProductAttributes(productDetailDataAttributes)
        setProductPictures(productDetailDataPictures)
        setProductDescription(productDescriptionData);
    }

    useEffect(() => {
        getProductDetails();
    }, [productId]);

    return (
        <>
            <div className="product-details-container">
                <Row justify="center" align="middle" gutter={[16, 24]}>
                    <Col sm={{span: 24}} md={{span: 8}}>
                        <div className="product-details-main-image-container">
                            <img className="product-details-main-image" src={productPictures[0]?.url} alt={product?.title} />
                        </div>
                        <div className="product-details-preview-images-container">
                            <Image.PreviewGroup>
                                {
                                    productPictures.map((picture: Picture, key: number) => {
                                        return <Image
                                            key={key}
                                            rootClassName="product-details-preview-image"
                                            width={40}
                                            height={40}
                                            src={picture.url}
                                            alt={product?.title}
                                        />
                                    })
                                }
                            </Image.PreviewGroup>
                        </div>
                    </Col>
                    <Col sm={{span: 24}} md={{span: 16}}>
                        <h1 className="product-details-title">{product?.title}</h1>
                        <h1 className="product-details-price">$ {formatNumber(product?.price ?? 0)} <small>{product?.currency_id}</small></h1>
                        <h5 className="product-details-info">Garantía: {product?.warranty}</h5>
                        <h5 className="product-details-info">Ubicación: {product?.seller_address?.city.name}, {product?.seller_address?.state.name}</h5>
                    </Col>
                </Row>
                <hr className="divider" />
                <Row justify="center" align="middle" gutter={[16, 24]}>
                    <Col sm={{span: 24}}>
                        <div className="product-details-description-title">Descripción</div>
                        <div className="product-details-description-container">{productDescription}</div>
                    </Col>
                </Row>
                <hr className="divider" />
                <Row justify="center" align="middle" gutter={[16, 24]}>
                    <Col sm={{span: 24}}>
                        <div className="product-details-attributes-container">
                            <Descriptions title="Características" layout="vertical" bordered>
                                {
                                    productAttributes.map((attribute: Attribute, key: number) => {
                                        return <Descriptions.Item key={key} label={attribute.name}>{attribute.value_name}</Descriptions.Item>
                                    })
                                }
                            </Descriptions>
                        </div>
                    </Col>
                </Row>
            </div>

            <style jsx>{ProductDetailsStyles}</style>
        </>
    )
}

export default ProductDetailsComponent;
