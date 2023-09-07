import './HeaderCartButton.css';

import CartIcon from '../Cart/CartIcon';

const HeaderCartButton =() => {
    return (
        <button className="cart-btn">
            <span className='cart-icon'><CartIcon /></span>
            <span>Your Cart</span>
            <span className="counter">0</span>
        </button>
    )
}

export default HeaderCartButton;