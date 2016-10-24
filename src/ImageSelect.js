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



var Platform = require('react-native').Platform;
var ImagePicker = require('react-native-image-picker');



export default class ImageSelect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            avatarSource:null,
        }
    }


    componentDidMount() {

    }

    _showImagePicker(that){


        var options = {
            title: 'Select Avatar',
            customButtons: [
                {name: 'fb', title: 'Choose Photo from Facebook'},
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };

        /**
         * The first arg is the options object for customization (it can also be null or omitted for default options),
         * The second arg is the callback which sends object: response (more info below in README)
         */
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                // You can display the image using either data...
                const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

                // or a reference to the platform specific asset location
                if (Platform.OS === 'ios') {
                    const source = {uri: response.uri.replace('file://', ''), isStatic: true};
                } else {
                    const source = {uri: response.uri, isStatic: true};
                }

                that.setState({
                    avatarSource: source
                });
            }
        });
    }




    render() {
        return (
            <View>
                <Image source={this.state.avatarSource} style={styles.uploadAvatar} />


                <TouchableOpacity  onPress={()=>this._showImagePicker(this)}>
                    <Text style={{color:'#000000',}}>选择图片</Text>
                </TouchableOpacity>
            </View>
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
    uploadAvatar:{
        width:100,
        height:100,

    }
})