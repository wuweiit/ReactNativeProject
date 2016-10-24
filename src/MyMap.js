/**
 * Created by ROOT on 2016/10/11.
 */
import React , { Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    Image,

} from 'react-native';

import { MapView, MapTypes, MapModule, Geolocation } from 'react-native-baidu-map';

export default class MyMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mayType: MapTypes.NORMAL,
            zoom: 15,
            center: {
                longitude: 113.981718,
                latitude: 22.542449
            },
            trafficEnabled: false,
            baiduHeatMapEnabled: false,
            markers: [{
                longitude: 113.981718,
                latitude: 22.542449,
                title: "Window of the world"
            },{
                longitude: 113.995516,
                latitude: 22.537642,
                title: ""
            }]
        };
    }


    componentDidMount() {

    }




    render() {
        return (
            <MapView
                trafficEnabled={this.state.trafficEnabled}
                baiduHeatMapEnabled={this.state.baiduHeatMapEnabled}
                zoom={this.state.zoom}
                mapType={this.state.mapType}
                center={this.state.center}
                marker={this.state.marker}
                markers={this.state.markers}
                style={styles.map}
                onMapClick={(e) => {


                }}
            >
            </MapView>
        )
    }
}


const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 50,
        right: 0,
    },
    map:{
        flex: 1,
        width: 300
    }
})