export function formatNumber(value: number): string {
    return new Intl.NumberFormat("de-DE").format(value);
}

export function getArrayFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key) || '[]');
}

export function setDataInLocalStorage (key: string, data: object) {
    const shopping_cart_products = getArrayFromLocalStorage('products');
    shopping_cart_products.push(data);
    localStorage.setItem(key, JSON.stringify(shopping_cart_products));

    return JSON.parse(localStorage.getItem(key) || '[]');
}
