import axios from 'axios';
import {ProductResponse} from "@/componets/modules/productList/producList.model";
import {API_DOMAIN_URL} from '@/utils/consts';

/**
 * Get products from API.
 *
 * @param search
 */
export const getProducts = async (search: string) => {
    return axios
        .get<ProductResponse>(`${API_DOMAIN_URL}` + 'sites/MCO/search?q=' + search)
        .then((res) => {
            // success
            return res.data.results;
        })
        .catch((error) => {
            // error
            console.log(error);
            return [];
        })
}

/**
 * Get product details from API.
 *
 * @param productId
 */
export const getProductDetail = (productId: string) => {
    return axios
        .get(`${API_DOMAIN_URL}` + 'items/' + productId)
        .then((res) => {
            // success
            return res.data;
        })
        .catch((error) => {
            // error
            console.log(error);
            return [];
        })
}

/**
 * Get product description from API.
 *
 * @param productId
 */
export const getProductDescription = (productId: string) => {
    return axios
        .get(`${API_DOMAIN_URL}` + 'items/' + productId + '/description')
        .then((res) => {
            // success
            return res.data.plain_text;
        })
        .catch((error) => {
            // error
            console.log(error);
            return [];
        })
}
