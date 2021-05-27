import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class HorizontalProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View
        style={{
          top: 10,
          left: 10,
          padding: 10,
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={this.props.picture}
          style={{ height: 100, width: 100 }}
        />
       {this.props.bool?
        < Text
          style={{
          fontSize: 15,
          padding: 5,
          fontWeight: "bold",
        }}
        >
        {this.props.title}
          </Text>:null}
        
      </View>
    );
  }
}
