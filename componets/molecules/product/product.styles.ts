import css from "styled-jsx/css";

export const ProductStyles = css`
  .product-container:hover {
    cursor: pointer;
  }
  .product-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    margin-bottom: 10px;
    color: #333;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.3;
    text-align: justify;
  }
  .product-price {
    color: #333;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.25;
    margin: 0;
  }
  .product-image-container {
    text-align: center;
  }
  .product-image {
    max-height: 100px;
  }
`
