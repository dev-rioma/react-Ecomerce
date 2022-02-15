import React from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';

const ProductList = () => {
    return (
        <section class="main-container">
            <div className="ProductList">
				<ProductItem />
			</div>
        </section>
    );
}

export default ProductList;