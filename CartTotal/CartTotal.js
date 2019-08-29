import React from 'react';
import './CartTotal.css';

class CartTotal extends React.Component {
    render() {
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
        );

        return (
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {this.props.USCurrencyFormat.format(total)}
                </div>
            </div>
        )
    }
}

export default CartTotal;