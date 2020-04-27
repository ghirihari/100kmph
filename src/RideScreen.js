import React, { Component } from 'react';
import { View, StyleSheet, PermissionsAndroid, Alert, Text, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from '@react-native-community/geolocation';

export default class RideScreen extends Component {
    
    constructor(props) {
        super(props);   
        this.state = {
            latitude:  11.0022371,
            longitude: 76.95277229999999,
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
                        customMapStyle={[
                            {
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#ebe3cd"
                                }
                              ]
                            },
                            {
                              "elementType": "labels.text.fill",
                              "stylers": [
                                {
                                  "color": "#523735"
                                }
                              ]
                            },
                            {
                              "elementType": "labels.text.stroke",
                              "stylers": [
                                {
                                  "color": "#f5f1e6"
                                }
                              ]
                            },
                            {
                              "featureType": "administrative",
                              "elementType": "geometry.stroke",
                              "stylers": [
                                {
                                  "color": "#c9b2a6"
                                }
                              ]
                            },
                            {
                              "featureType": "administrative.land_parcel",
                              "elementType": "geometry.stroke",
                              "stylers": [
                                {
                                  "color": "#dcd2be"
                                }
                              ]
                            },
                            {
                              "featureType": "administrative.land_parcel",
                              "elementType": "labels.text.fill",
                              "stylers": [
                                {
                                  "color": "#ae9e90"
                                }
                              ]
                            },
                            {
                              "featureType": "landscape.natural",
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#dfd2ae"
                                }
                              ]
                            },
                            {
                              "featureType": "poi",
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#dfd2ae"
                                }
                              ]
                            },
                            {
                              "featureType": "poi",
                              "elementType": "labels.text.fill",
                              "stylers": [
                                {
                                  "color": "#93817c"
                                }
                              ]
                            },
                            {
                              "featureType": "poi.park",
                              "elementType": "geometry.fill",
                              "stylers": [
                                {
                                  "color": "#a5b076"
                                }
                              ]
                            },
                            {
                              "featureType": "poi.park",
                              "elementType": "labels.text.fill",
                              "stylers": [
                                {
                                  "color": "#447530"
                                }
                              ]
                            },
                            {
                              "featureType": "road",
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#f5f1e6"
                                }
                              ]
                            },
                            {
                              "featureType": "road.arterial",
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#fdfcf8"
                                }
                              ]
                            },
                            {
                              "featureType": "road.highway",
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#f8c967"
                                }
                              ]
                            },
                            {
                              "featureType": "road.highway",
                              "elementType": "geometry.stroke",
                              "stylers": [
                                {
                                  "color": "#e9bc62"
                                }
                              ]
                            },
                            {
                              "featureType": "road.highway.controlled_access",
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#e98d58"
                                }
                              ]
                            },
                            {
                              "featureType": "road.highway.controlled_access",
                              "elementType": "geometry.stroke",
                              "stylers": [
                                {
                                  "color": "#db8555"
                                }
                              ]
                            },
                            {
                              "featureType": "road.local",
                              "elementType": "labels.text.fill",
                              "stylers": [
                                {
                                  "color": "#806b63"
                                }
                              ]
                            },
                            {
                              "featureType": "transit.line",
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#dfd2ae"
                                }
                              ]
                            },
                            {
                              "featureType": "transit.line",
                              "elementType": "labels.text.fill",
                              "stylers": [
                                {
                                  "color": "#8f7d77"
                                }
                              ]
                            },
                            {
                              "featureType": "transit.line",
                              "elementType": "labels.text.stroke",
                              "stylers": [
                                {
                                  "color": "#ebe3cd"
                                }
                              ]
                            },
                            {
                              "featureType": "transit.station",
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#dfd2ae"
                                }
                              ]
                            },
                            {
                              "featureType": "water",
                              "elementType": "geometry.fill",
                              "stylers": [
                                {
                                  "color": "#b9d3c2"
                                }
                              ]
                            },
                            {
                              "featureType": "water",
                              "elementType": "labels.text.fill",
                              "stylers": [
                                {
                                  "color": "#92998d"
                                }
                              ]
                            }
                          ]}
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
                                description={"Your Location"}>
                                <Image source={require('../assets/images/marker/bike1.png')} style={{height: 50, width:50 }} />
                           </MapView.Marker>

                           <MapView.Marker
                                coordinate= {{
                                    latitude: 11.0190858, 
                                    longitude: 77.0214748
                                }}
                                title={"Sudharshan"}
                                description={"@snuid18"}>
                                <Image source={require('../assets/images/marker/bike2.png')} style={{height: 30, width:50 }} />
                           </MapView.Marker>
                            
                           <MapView.Marker
                                coordinate= {{
                                    latitude: 10.9075600,  
                                    longitude: 76.9635040
                                }}
                                title={"Vinith Raj"}
                                description={"@vinith99"}>
                                <Image source={require('../assets/images/marker/bike3.png')} style={{height: 30, width:50 }} />
                           </MapView.Marker>

                           <MapView.Marker
                                coordinate= {{
                                    latitude: 11.081954,  
                                    longitude: 76.941296,
                                }}
                                title={"Nithy"}
                                description={"@nithy7"}>
                                <Image source={require('../assets/images/marker/bike4.png')} style={{height: 30, width:50 }} />
                           </MapView.Marker>

                           <MapView.Marker
                                coordinate= {{
                                    latitude: 11.002371,  
                                    longitude: 77.029111,
                                }}
                                title={"Akkash"}
                                description={"@david"}>
                                <Image source={require('../assets/images/marker/bike5.png')} style={{height: 30, width:50 }} />
                            
                           </MapView.Marker>

                        </MapView>
                    </View>
                );
        }
        else {
            return(
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Fetching your Location</Text>
                    <Text>{this.state.error}</Text>
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

