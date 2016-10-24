/**
 * Created by ROOT on 2016/10/11.
 */
import React , { Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,

} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class NumberButton extends Component {
    onPressBackListener;

    constructor(props) {
        super(props);
        this.onPressBackListener = props.onPressBack;
    }


    componentDidMount(){

    }


    render() {
        return (
            <View style={styles.header}>
                  {/*{...this.props}>*/}
                <Text style={styles.header_title}>{this.props.title}</Text>
                {this.props.enableBackBtn?
                    <TouchableOpacity style={styles.back} onPress={this.onPressBackListener}>
                        <Icon name="chevron-left" size={20} color={'#ffffff'} />
                    </TouchableOpacity>
                    :null
                }


                { this.props.iconRightBtn ?
                    <TouchableOpacity style={styles.settings} onPress={this.props.onPressRightBtn}>
                        <Icon name={this.props.iconRightBtn} size={20} color={'#ffffff'} />
                    </TouchableOpacity>
                    :null
                }
                {this.props.textRightBtn?
                    <TouchableOpacity style={styles.settings} onPress={this.props.onPressRightBtn}>
                        <Text style={{color:'#ffffff'}} >{this.props.textRightBtn}</Text>
                    </TouchableOpacity>
                    :null
                }

            </View>
        )
    }
}


const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor:'#3CA352',
        height: 40,
        justifyContent:'center',
        alignItems:'center',
    },
    header_title:{
        flex:1,
        color:'#ffffff',
        textAlign:'center',
    },
    settings:{
        position:'absolute',
        top: 10,
        right:10,
    },
    back:{
        position:'absolute',
        top: 10,
        left:10,
    },





})