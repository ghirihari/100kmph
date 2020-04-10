import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";


export default class CalculatorScreen extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            distance:'0',
            from:'Chennai',
            to:'Mumbai',
            time:'0',
            fuel:'0',
            mileage:40,
            total:0,
            show: true,
        };

    onPress = () => {
        this.setState({show:true})
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "locations": [this.state.from,this.state.to]
              })
        };
        fetch('http://www.mapquestapi.com/directions/v2/routematrix?key=NWocdztSYHRGGxghPivCkuoeYaVvMQx1', requestOptions)
        .then(response => response.json())
        .then(data => {
            this.setState(
                { 
                    distance: Math.ceil(data.distance[1]*1.96),
                    time: this.secondsToHms(data.time[1]),
                    fuel: Math.ceil((Math.ceil(data.distance[1]*1.96)*2)/this.state.mileage),
                })
            this.newEstimation(this.state.fuel*72)
        }
        
        )
    };

    }
    secondsToHms = (d) => {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
    
        var hDisplay = h > 0 ? h + (h == 1 ? "h " : "h ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " m, " : " m") : "";
        return hDisplay + mDisplay; 

    }

    newEstimation = (total) =>
    {
        let totalS = total.toString();
        let size = totalS.length;
        let first = parseInt(totalS[0])
        let newTotal = (first+1)*Math.pow(10,size-1)
        this.setState({total:newTotal})
    }
    

    render() {
        return (
            <View style={styles.container}>
            <View style={styles.containerTop}>
                <Text style={styles.formLabel}>Fund Calculator</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder={'Starting Point'}
                    onChangeText={text => this.setState({from:text,show:false})}
                    value={this.state.from}
                    textAlign={'center'}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder={'Destination'}
                    onChangeText={text => this.setState({to:text,show:false})}
                    value={this.state.to}
                    textAlign={'center'}
                />
                 <TextInput
                    keyboardType='number-pad'
                    style={styles.textInput}
                    placeholder={'Mileage'}
                    onChangeText={text => this.setState({mileage:text})}
                    textAlign={'center'}
                />
                <TouchableOpacity
                        style={styles.button}
                        onPress={onPress}>
                        <Text style={{color:'white'}}>Compute</Text>
                </TouchableOpacity>
            </View>
            
            { this.state.show && 
            <View style={styles.containerBottom}>
                     <Grid style={styles.row2}>    
                        <Col style={styles.column}>
                                <Text style={styles.label}>Distance</Text>
                                <Text style={styles.text}>{this.state.distance} Kms</Text>
                        </Col>

                        <Col style={styles.column}>
                            <Text style={styles.label}>Time</Text>
                            <Text style={styles.text}>{this.state.time}</Text>
                        </Col>
                    </Grid>
                <Grid style={styles.row2}>    
                        <Col style={styles.column}>
                                <Text style={styles.label}>Fuel (40Kmpl)</Text>
                                <Text style={styles.text}>{this.state.fuel} L</Text>
                        </Col>

                        <Col style={styles.column}>
                            <Text style={styles.label}>Fuel (72/L)</Text>
                            <Text style={styles.text}>{this.state.fuel*72} Rs</Text>
                        </Col>
                </Grid> 
                <Grid style={styles.row2}>    
                        <Col style={styles.column}>
                                <Text style={styles.label}>Total ( Exclusive of Food and Stay )</Text>
                                <Text style={styles.text}>{this.state.total} Rs</Text>
                        </Col>
                </Grid> 
            </View>
        }
                </View>
        );
    }
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
    },

    containerTop: {
        flex: 1,
        justifyContent: 'flex-end', 
        alignItems: 'center', 
    },
    
    containerBottom: {
        flex: 1,
        justifyContent: 'flex-end', 
        alignItems: 'center', 
    },
    formLabel: {
        fontSize: 20,
        color: 'black',
    },
    
    row2: {
        maxHeight: 80,
    },

    column: {
        backgroundColor: '#fe4a49',
        borderRadius: 5,
        padding: 10,
        margin: 2,
    },

    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
    },

    label: {
        fontSize: 12,
        textAlign: 'center',
        color: '#1e1f26',
    },

    textInput: {
        margin: 5,
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
});
