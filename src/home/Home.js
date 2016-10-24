/**
 * Created by ROOT on 2016/10/11.
 */
import React , { Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ListView,
    TouchableOpacity,
    TouchableHighlight,
    Navigator,
    DatePickerAndroid,

} from 'react-native';


import Login from  '../login/Login';
import ShopCar from  '../shopcar/ShopCar';
import Location from  '../location/Location';
import MyVideo from  '../MyVideo';
import ImageSelect from '../ImageSelect'
import MyMap from '../MyMap'
import Stroe from '../Stroe'
import Chat from '../Chat'
import Recoder from '../Recoder'



export default class Home extends Component {
    ds;
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            movies:  [{title:"测试数据"}]
        }

    }


    _onPressButton(that){
        console.log("... ...4324324324.. ");
        fetch('https://www.jetmall.co.id/api/home/firstCategory/list')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                setTimeout(()=>{
                    that.setState({
                        movies :  responseJson.data.recommendedList
                    });
                },10);
            })
    }
    _onLogin(that){
        var navigator = that.props.navigator;
        navigator.push({
            title: 'Login',
            component: Login,
        });
    }
    _onShopCar(that){
        var navigator = that.props.navigator;
        navigator.push({
            title: 'ShopCar',
            component: ShopCar,
        });
    }

    _onOpenDatePiker(that){
        try {
            const {action, year, month, day} =  DatePickerAndroid.open({
                // 要设置默认值为今天的话，使用`new Date()`即可。
                // 下面显示的会是2020年5月25日。月份是从0开始算的。
                date: new Date(2020, 4, 25)
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                // 这里开始可以处理用户选好的年月日三个参数：year, month (0-11), day
                console.log(year);
            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }



    }
    _onGeoLocation(that){
        var navigator = that.props.navigator;
        navigator.push({
            title: 'Location',
            component: Location,
        });
    }
    _onVideo(that){
        var navigator = that.props.navigator;
        navigator.push({
            title: 'MyVideo',
            component: MyVideo,
        });
    }
    _onSelectImages(that){
        var navigator = that.props.navigator;
        navigator.push({
            title: 'ImageSelect',
            component: ImageSelect,
        });

    }
    _onOpenMap(that){
        var navigator = that.props.navigator;
        navigator.push({
            title: 'MyMap',
            component: MyMap,
        });
    }
    _onStore(that){
        var navigator = that.props.navigator;
        navigator.push({
            title: 'Stroe',
            component: Stroe,
        });
    }
    _onChat(that){
        var navigator = that.props.navigator;
        navigator.push({
            title: 'Chat',
            component: Chat,
        });
    }
    _onRecoder(that){
        var navigator = that.props.navigator;
        navigator.push({
            title: 'Recoder',
            component: Recoder,
        });

    }


    render() {
        return (


            <View style={{backgroundColor:'#ffffff'}}>
                <TouchableOpacity onPress={()=>this._onPressButton(this)}>
                    <Text>加载网络数据</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onLogin(this)}>
                    <Text>去登录呗</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onOpenDatePiker(this)}>
                    <Text>打开日历</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onShopCar(this)}>
                    <Text>购物车</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onGeoLocation(this)}>
                    <Text>获取地理位置</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onVideo(this)}>
                    <Text>打开视频</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onSelectImages(this)}>
                    <Text>图片选择器</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onOpenMap(this)}>
                    <Text>打开地图</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onStore(this)}>
                    <Text>本地存储设置</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onChat(this)}>
                    <Text>打开聊天窗口</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onRecoder(this)}>
                    <Text>打开录音</Text>
                </TouchableOpacity>

                <Text>------------------------------------</Text>

                <ListView
                    dataSource={this.ds.cloneWithRows(this.state.movies)}
                    renderRow={(rowData) =>
                        <View>
                            <Image source={{uri: rowData.cover}} style={{width: 40, height: 40}} ></Image>
                            <Text>{rowData.title}</Text>
                        </View>
                    }
                />
            </View>
        )
    }
}


const  styles = StyleSheet.create({

    flexRow:{
        flexDirection: 'row'
    },
    flexRowLabel:{
        flex: 0.3

    },
    flexRowColunm:{
        flex: 1.3
    }

})