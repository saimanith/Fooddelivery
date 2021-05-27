import React, { Component } from "react";
import { View, Text, Image, Touchable, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{}}>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={{ flex: 1, width: 195 }}
        >
          <View
            style={{
              flex: 1,

              borderStyle: "solid",
              borderWidth: 0.6,
              flexGrow: 1,
              borderRadius: 30,

              margin: 10,
              borderColor: "#77777",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <Image
                style={{ height: 100, width: 100 }}
                source={this.props.data.picture}
              ></Image>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, width: "70%", padding: 10 }}>
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                  {this.props.data.title}
                </Text>
                <Text style={{ color: "#666666" }}>
                  {this.props.data.subtitle}
                </Text>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {this.props.data.price}
                </Text>
              </View>

              <View
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 10,
                  transform: [{ rotate: "45deg" }],
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  elevation: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "orange",
                }}
              >
                <Icon
                  name="plus"
                  size={20}
                  style={{color: "white", transform: [{ rotate: "-45deg" }] }}
                ></Icon>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
