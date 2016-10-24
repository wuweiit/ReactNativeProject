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

import Video from 'react-native-video';


export default class MyVideo extends Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {

    }




    render() {
        return (
            <Video source={require('../background.mp4')}
                   repeat={true}
                   rate={1.0}                   // 0 is paused, 1 is normal.
                   volume={1.0}                 // 0 is muted, 1 is normal.
                   muted={false}                // Mutes the audio entirely.
                   paused={false}               // Pauses playback entirely.
                   resizeMode="contain"           // Fill the whole screen at aspect ratio.
                   onLoadStart={this.loadStart} // Callback when video starts to load
                   onLoad={this.setDuration}    // Callback when video loads
                   onProgress={this.setTime}    // Callback every ~250ms with currentTime
                   onEnd={this.onEnd}           // Callback when playback finishes
                   onError={this.videoError}    // Callback when video cannot be loaded
                   style={styles.backgroundVideo}

            />
        )
    }
    videoError(){
        console.log("error")
    }
    loadStart(){
        console.log("starts")
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
})