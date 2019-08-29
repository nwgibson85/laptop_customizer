import React from 'react';
import './Cart.css';
import CartTotal from './CartTotal/CartTotal';

class Cart extends React.Component {
    render() {
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
        return (
            <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                    {USCurrencyFormat.format(selectedOption.cost)}
                </div>
            </div>
            );
        });

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <CartTotal
                    USCurrencyFormat = {USCurrencyFormat}
                    selected = {this.props.selected} 
                />
            </section>
        )
    }
}

export default Cart;