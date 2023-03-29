import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax;
    const finalTotal = grandTotal.toFixed(2);

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h6 className='grand-total'>Grand Total: ${finalTotal}</h6>
            <button className='clear-cart'>
                Clear Cart 
                <FontAwesomeIcon icon={faTrash} />
            </button>
            <button className='review-order'>
                Review Order
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    );
};

export default Cart;