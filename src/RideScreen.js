import React, { Component } from 'react';
import { View, StyleSheet, PermissionsAndroid, Alert, Text, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from '@react-native-community/geolocation';

export default class RideScreen extends Component {
    
    constructor(props) {
        super(props);   
        this.state = {
            latitude: null,
            longitude: null,
            };
        }
    
        componentDidMount() {
            Geolocation.getCurrentPosition(
                (position) => {
                    this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                    });
                },
                (error) => this.setState({ error: error.message }),
                { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
                );
        }
    
    render() {
        
        if(this.state.latitude)
        {
                return (

                    <View style={styles.container}>
                        <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        //   customMapStyle={mapStyle}
                        region={{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                        >
                            <MapView.Marker
                                coordinate= {{
                                    latitude: this.state.latitude, 
                                    longitude: this.state.longitude
                                }}
                                title={"You"}
                                description={"@ghiriharivvz"}>
                                <Image source={require('../assets/images/marker1.png')} style={{height: 50, width:50 }} />
                           </MapView.Marker>
                            
                        </MapView>
                    </View>
                );
        }
        else {
            return(
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Fetching your Location</Text>
                </View>
            );
        }
        }
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
    //   height: 400,
    //   width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });

