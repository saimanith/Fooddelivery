import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import HorizontalProductItem from '../components/HorizontalProductItem';
import { horizontalitems } from './Home';
import Icon from "react-native-vector-icons/FontAwesome";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{}}>
        <View style={{}}>
          <Image
            source={require("../images/5.png")}
            style={{ height: 500, width: 370, marginLeft: 10, marginRight: 10 }}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Royal special burger
            </Text>

            <Text style={{ fontSize: 20, fontWeight: "bold", color: "orange" }}>
              $5.60
            </Text>
          </View>
          <Text style={{ color: "#666666", padding: 10, marginLeft: 10 }}>
            Hot Beef Burger
          </Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {horizontalitems.map((item) => {
            return (
              <HorizontalProductItem
                picture={item.picture}
                title={item.title}
                bool={false}
              />
            );
          })}
        </ScrollView>
        <Text style={{ color: "#666666", padding: 10, marginLeft: 10 }}>
          The combinations of fresh and juicy vegetables gives the salad and
          invigorating flavour and fillet maintained and in with various
        </Text>
        <View
          style={{
            height: 60,
            width: 60,
            borderRadius: 20,
            transform: [{ rotate: "45deg" }],
            position: "absolute",
            bottom: 50,
            right: 10,
            elevation: 10,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "orange",
          }}
        >
          <Icon
            name="cart-plus"
            size={30}
            style={{ color:"white",transform: [{ rotate: "-45deg" }] }}
          ></Icon>
        </View>
      </View>
    );
  }
}
