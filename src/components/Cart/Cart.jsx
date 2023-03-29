import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price:</p>
            <p>Total Shipping Charge:</p>
            <p>Tax:</p>
            <h6 className='grand-total'>Grand Total:</h6>
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