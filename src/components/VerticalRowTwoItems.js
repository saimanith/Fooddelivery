import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Product from './Product';

export default class VerticalRowTwoItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

    render() {

    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Product data={this.props.item1} onPress={this.props.onPress}></Product>
        <Product data={this.props.item2} onPress={this.props.onPress}></Product>
      </View>
    );
  }
}
