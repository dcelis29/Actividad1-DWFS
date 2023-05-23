import React, {useState } from 'react';
import { useProduct } from '../hooks/useProduct';
import { Product } from './Product';
import '../styles/ProductView.css';

export const ProductView = () => {
    const API ='https://api.escuelajs.co/api/v1/products'
    const [search, setSearch ] = useState('');
    const products = useProduct(API)

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const filterProduct = products.filter((article) => {
        return article.title.toLowerCase().includes(search.toLowerCase());
    })

    return (
        <div>
            <div className='search'>
                <input type="text" value={search} onChange={handleSearch} placeholder='Buscar'/>
            </div>
         
            <div className='product-list'>
                {filterProduct.map(product => (     
                    <Product product={product} key={product.id}/>       
                ))}	      
            </div>
        </div>
  )
}
