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

export const getProductDetail = () => {

}
