import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;

    const handleAddToCart = props.handleAddToCart

    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-seller'>Manufacturer: {seller}</p>
                <p className='product-rating'>Rating: {ratings} Stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;