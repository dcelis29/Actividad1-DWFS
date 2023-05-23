import { useEffect, useState } from "react";

export const useProduct = url => {
    const [products, setProducts] = useState([]);
    useEffect (() => {
        fetch (url)
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [url]);
    return products;
}