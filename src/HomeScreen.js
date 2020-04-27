import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);   
        // console.log(props.navigation);
    }

    render() {
        return (
            <Grid style={styles.container}>
                <Row  style={styles.panel}>
                    <TouchableOpacity 
                        style={styles.image}
                        onPress={() => this.props.navigation.navigate('Ride')}>
                        <ImageBackground style= {styles.image}   
                            source={require('../assets/images/one.jpg')}>
                            <Text style={styles.imgText}>Ride</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </Row>
                <Row style={styles.panel}>
                    <TouchableOpacity 
                        style={styles.image}
                        onPress={() => this.props.navigation.navigate('Fund')}>
                         <ImageBackground style= {styles.image}   
                            source={require('../assets/images/two.jpg')}>
                            <Text style={styles.imgText}>Fund</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </Row>
                <Row style={styles.panel}>
                    <TouchableOpacity 
                        style={styles.image}
                        onPress={() => this.props.navigation.navigate('Shop')}>
                       <ImageBackground style= {styles.image}   
                            source={require('../assets/images/three.jpg')}>
                            <Text style={styles.imgText}>Shop</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </Row>
                <Row style={styles.panel}>
                    <TouchableOpacity 
                        style={styles.image}
                        onPress={() => this.props.navigation.navigate('Profile')}>
                        <ImageBackground style= {styles.image}   
                            source={require('../assets/images/four.jpg')}>
                            <Text style={styles.imgText}>Profile</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </Row>

            </Grid>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor:'#1B1E23',
        },
    panel: {
        backgroundColor: '#fe4a49',
        margin: 5,
        borderRadius: 10,
    },
    image:{
            flex:1 ,
            justifyContent:'center', 
            width: undefined, 
            height: undefined, 
            borderRadius: 10
    },
    imgText:{
        color:'white',
        textAlign:'center',
        fontSize: 50,
        fontStyle:'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 50,

    }
});

