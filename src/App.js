import React, { Component } from 'react';
import Header from './Header/Header';
import Choices from './Choices/Choices';
import Cart from './Cart/Cart';
import './App.css';
// This object will allow us to
// easily convert numbers into US dollar values



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    return (
      <div className="App">
        <Header />
        <main>
          <Choices 
            features = {this.props.features} 
            featureFunc = {(props) => this.updateFeature(props)}
          />
          <Cart 
            USCurrencyFormat = {USCurrencyFormat}
            selected = {this.state.selected}
          />
        </main>
      </div>
    );
  }
}

export default App;