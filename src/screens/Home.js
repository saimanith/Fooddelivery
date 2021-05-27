import React, { Component } from "react";
import { View, Text, ScrollView, SafeAreaView, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import HorizontalProductItem from "../components/HorizontalProductItem";
import VerticalRowTwoItems from "../components/VerticalRowTwoItems";

const verticalitems = [
  {
    picture: require("../images/5.png"),
    title: "royal burger",
    subtitle: "spicy withgarlie",
    price: "$4.50",
  },
  {
    picture: require("../images/6.png"),
    title: "pizza",
    subtitle: "spicy withgarlie",
    price: "$3.50",
  },
  {
    picture: require("../images/7.png"),
    title: "salad",
    subtitle: "spicy withgarlie",
    price: "$5.50",
  },
  {
    picture: require("../images/8.png"),
    title: "lettuce",
    subtitle: "spicy withgarlie",
    price: "$1.50",
  },
  {
    picture: require("../images/9.png"),
    title: "Black burger",
    subtitle: "spicy withgarlie",
    price: "$5.50",
  },
  {
    picture: require("../images/10.png"),
    title: "shawarma",
    subtitle: "spicy withgarlie",
    price: "$8.50",
  },
];
export const horizontalitems = [
  {
    picture: require("../images/burger.png"),
    title: "burger",
  },
  {
    picture: require("../images/pizza.png"),
    title: "pizza",
  },
  {
    picture: require("../images/sandwich.png"),
    title: "sandwich",
  },
  {
    picture: require("../images/fruit.png"),
    title: "fruit",
  },
  {
    picture: require("../images/burger.png"),
    title: "burger",
  },
  {
    picture: require("../images/pizza.png"),
    title: "pizza",
  },
  {
    picture: require("../images/sandwich.png"),
    title: "sandwich",
  },
  {
    picture: require("../images/fruit.png"),
    title: "fruit",
  },
];
export default class Home extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 20,
            }}
          >
            <Icon name="navicon" size={30}></Icon>
            <Icon name="search" size={30}></Icon>
          </View>
          <View>
            <Text
              style={{
                left: 20,
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Find Your
            </Text>
            <Text
              style={{
                left: 20,
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Delicious Food
            </Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {horizontalitems.map((item) => {
              return (
                <HorizontalProductItem
                  picture={item.picture}
                  title={item.title} bool={true}
                />
              );
            })}
          </ScrollView>
          <View>
            <Text
              style={{
                left: 20,
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Popular Burger
            </Text>
          </View>
          <ScrollView>
            {/* {verticalitems.map((array) => {
              console.log("hello"+array.length);
              return <VerticalRowTwoItems item={array} />;
            })} */}
            {verticalitems.map((item, i) => {
              if (i % 2 != 1) {
                return (
                  <VerticalRowTwoItems item1={verticalitems[i]} item2={verticalitems[i + 1]} onPress={()=>this.props.navigation.navigate('Details')}/>
                );
              }
            })}

          </ScrollView>
        </ScrollView>
      </SafeAreaProvider>
    );
  }
}
