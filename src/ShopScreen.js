import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList, SafeAreaView, Image,TouchableOpacity,Alert } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ShopScreen extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            count:0,
            cart: [],
            cartWindow: false,
            total:0,
        }

        this.data = [
            {
              id:1,
              img: require('../assets/images/gears/dress1.jpg'),
              title: '100KMPH DOODLE YELLOW',
              price: 1500
            },
            {
              id: 2,
              img: require('../assets/images/gears/dress2.jpg'),
              title: '100KMPH WTS COMPANY',
              price: 1800
            },
            {
              id: 3,
              img: require('../assets/images/gears/dress3.jpg'),
              title: '100KMPH ADVENTURE',
              price: 2000
            },
            {
                id: 4,
                img: require('../assets/images/gears/dress4.jpg'),
                title: '100KMPH RACE CONCEPT',
                price: 2000
              },
              {
                id: 5,
                img: require('../assets/images/gears/dress5.jpg'),
                title: '100KMPH BASIC BLUE',
                price: 1000
              },
              {
                id: 6,
                img: require('../assets/images/gears/dress6.jpg'),
                title: '100KMPH CAMOFLAUGE',
                price: 7500
              },
              {
                id: 7,
                img: require('../assets/images/gears/dress7.jpg'),
                title: '100KMPH WHITE HORSE',
                price: 8000
              },
              {
                id: 8,
                img: require('../assets/images/gears/dress8.jpg'),
                title: '100KMPH YELLOW DEATH',
                price: 6000
              },
          ];   
    }

    addToCart = (item) => {
        Alert.alert(
            "Add To Cart",
            "Add "+item.title+" item to cart?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Yes", onPress: () => {
                  this.setState({count:this.state.count+1})
                  this.state.cart.push(item)
                  this.state.total += item.price
              } }
            ],
            { cancelable: false }
          );
    }

    goToCart = () => {
        this.setState({cartWindow:true})
    }

    placed = () => {
        Alert.alert(
            "Order is Placed Succesfully",
            "Total Amount of "+this.state.total+".00 Rupees",
            [
              {
                text: "Cancel",
                style: "cancel"
              },
              { text: "Okay", }
            ],
            { cancelable: false }
          );
    }
    cancel = () => {
        this.setState({cart:[],total:0,count:0,cartWindow:false})
    }

    render() {
        if(this.state.cartWindow == false)
        {
            return (
                <SafeAreaView style={styles.container}>
                    <FlatList
                    numColumns={2}
                    data={this.data}
                    renderItem=
                    {({ item }) => 
                    <TouchableOpacity
                    onPress={() => this.addToCart(item)}>
                        <View style={styles.item}>
                            <Image source={item.img} style={styles.image} />
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.price}>RS. {item.price}.00</Text>
                        </View>
                    </TouchableOpacity>
                    }
                    keyExtractor={item => item.id}
                />
                
                <TouchableOpacity
                            style={styles.button}
                            onPress={this.goToCart}>
                            <Text style={styles.count}><Icon name='shopping-cart' size={30}/> - {this.state.count} items</Text>
                        
                </TouchableOpacity> 
                </SafeAreaView>
            );
        }
        else
        {
            return(
            <SafeAreaView style={styles.container}>
                <Text style={{fontSize:25,textAlign:'center',color:'white'}}>Your Cart</Text>
                    <FlatList
                    numColumns={2}
                    data={this.state.cart}
                    renderItem=
                    {({ item }) => 
                    <TouchableOpacity
                    onPress={() => this.addToCart(item)}>
                        <View style={styles.item}>
                            <Image source={item.img} style={styles.image} />
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.price}>RS. {item.price}.00</Text>
                        </View>
                    </TouchableOpacity>
                    }
                    keyExtractor={item => item.id}
                /> 
                
                <TouchableOpacity
                            style={styles.button2}
                            onPress={this.placed}>
                                <Text style={styles.total}>Total : {this.state.total}.00</Text>
                            <Text>PayNow</Text>
                </TouchableOpacity>

                <TouchableOpacity
                            style={styles.button}
                            onPress={this.cancel}>
                                <Text style={styles.total}>Cancel</Text>
                </TouchableOpacity>
 
                </SafeAreaView>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#1B1E23',
      
    },
    item: {
      backgroundColor:'white',
      padding: 10,
      margin: 10,
      maxWidth: 160,
      borderRadius:20,
    },
    title: {
        textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold',
    },
    price: {
        textAlign: 'center',
      fontSize: 15,
      color:'gray',
    },
    image : {height: 150, width:140 },
    button: {
        alignItems: "center",
        backgroundColor: "#f0ad4e",
        paddingHorizontal: 10,
        borderRadius: 5,
        // width: 100,
        padding: 10
      },
      button2: {
        alignItems: "center",
        backgroundColor: "#d9534f",
        paddingHorizontal: 10,
        borderRadius: 5,
        // width: 100,
        padding: 10
      },
      count :{
          fontSize:20,
      },
      total :{
          color:'white',
        fontSize:20,
    }
  });
  