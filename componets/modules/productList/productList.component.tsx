import Product from "@/componets/molecules/product";
import {useEffect, useState} from "react";
import {getProducts} from "@/services/products.service";
import {Col, Row} from "antd";
import {ProductListStyles} from "@/componets/modules/productList/productList.styles";
import {Pagination} from 'antd';
import {ProductListProps, ProductType} from "@/componets/modules/productList/producList.model";
import {Empty} from 'antd';

const ProductListComponent = (props: ProductListProps) => {
    const {query} = props;

    const [products, setProducts] = useState<ProductType[]>([]);
    const [searched, setSearched] = useState<string>('');

    // const [products, setProducts] = useState<ProductType[]>([]);
    const [productsToShow, setProductsToShow] = useState<ProductType[]>([]);
    const [productsCountTotal, setProductsCountTotal] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const searchProducts = async () => {
        const productsList: ProductType[] = await getProducts(query);
        setProducts(productsList);
        setSearched(query);
    }

    let perPage = 12;

    /**
     * Handle pagination to show the products
     *
     * @param page
     */
    const onChange = (page: number) => {
        let start = (page - 1) * perPage;
        let end = start + perPage;

        setProductsToShow(products.slice(start, end));
    }

    useEffect(() => {
        setProductsCountTotal(products.length);
        setProductsToShow(products.slice(0, perPage));
        setCurrentPage(1);
        console.log(currentPage);
    }, [products])

    useEffect(() => {
        searchProducts();
    }, [query])

    return (
        <>
            <div className="product-list-container">
                {
                    productsCountTotal == 0
                        ?
                        <Empty
                            description={
                                <span>
                                    La búsqueda no arrojó resultados
                                </span>
                            }
                        />
                        :
                        <>
                            <h4 className="product-list-title">Mostrando resultados para: <strong>{searched}</strong></h4>
                            <p className="product-list-results">{products.length} resultados</p>
                            <hr className="divider" />
                            <Row justify="center" align="middle" gutter={[16, 24]}>
                                {
                                    productsToShow.map((product, key) => {
                                        return <Col
                                            key={key}
                                            sm={{span: 24}}
                                            md={{span: 12}}
                                            lg={{span: 8}}
                                            style={{display: 'flex', justifyContent: 'center'}}
                                        >
                                            <Product key={key} product={product}/>
                                        </Col>
                                    })
                                }
                            </Row>
                            <div className="product-list-pagination">
                                <Pagination
                                    total={productsCountTotal}
                                    pageSize={perPage}
                                    onChange={onChange}
                                />
                            </div>
                        </>
                }
            </div>
            <style jsx>{ProductListStyles}</style>
        </>
    );
};

export default ProductListComponent;
