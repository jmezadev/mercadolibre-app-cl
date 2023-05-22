import Search from "@/componets/atoms/search";
import ShoppingCart from "@/componets/atoms/shoppingCart";
import Logo from "@/componets/atoms/logo";
import {HeaderStyles} from "@/componets/molecules/header/header.styles";
import {HeaderProps} from "@/componets/molecules/header/header.model";

import { Col, Row } from 'antd';

const HeaderComponent = (props: HeaderProps) => {
    const { query } = props;

    return (
        <>
            <div className="header">
                <Row justify="center" align="middle">
                    <Col xs={{span: 8}} md={{span: 4}} style={{display: 'flex', justifyContent: 'center'}}>
                        <Logo />
                    </Col>
                    <Col xs={{span: 12}} md={{span: 19}} style={{display: 'flex', justifyContent: 'center'}}>
                        <Search query={query} />
                    </Col>
                    <Col xs={{span: 4}} md={{span: 1}} style={{display: 'flex', justifyContent: 'center'}}>
                        <ShoppingCart />
                    </Col>
                </Row>
            </div>

            <style jsx>{HeaderStyles}</style>
        </>
    )
}

export default HeaderComponent;
