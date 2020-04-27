import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet,TouchableOpacity, Image,Alert } from 'react-native';

export default class UserScreen extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            name:'Ghiri Hari',
            email:'ghirihari@gmail.com',
            mobile:'9789409449',

        }
    }

    save = () => {
        Alert.alert(
            "Update User Details",
            "Your details has been updated succesfully",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Okay"}
            ],
            { cancelable: false }
          );
    }

    
    render() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#1B1E23' }}>
           <Image source={require('../assets/images/users/ghiri.jpg')} style={styles.image} />
                <TextInput
                    style={styles.textInput}
                    placeholder={'Name'}
                    value={this.state.name}
                    textAlign={'center'}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder={'Email ID'}
                    value={this.state.email}
                    textAlign={'center'}
                />
                 <TextInput
                    keyboardType='number-pad'
                    style={styles.textInput}
                    placeholder={'Mobile Number'}
                    value={this.state.mobile}
                    textAlign={'center'}
                />
                <TouchableOpacity
                        style={styles.button}
                        onPress={this.save}>
                        
                        <Text style={{color:'white'}}>Save</Text>
                </TouchableOpacity>    
        </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        margin: 10,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: '#dddddd',
        color: 'black',
        fontSize: 18,
    },    
    button: {
        margin: 5,
        alignItems: "center",
        backgroundColor: "#fe4a49",
        paddingHorizontal: 10,
        borderRadius: 50,
        width: 200,
        padding: 10
      },
    image: {
        height: 150, 
        width:150,
        borderRadius: 80,
        margin: 20,
    }

});  

