import React, { Component } from 'react';
import { View,Text,TouchableOpacity,Dimensions,Image,TextInput,StyleSheet } from 'react-native';
const {height} = Dimensions.get('window');
import icLogo from '../../media/appIcon/ic_logo.png'
import icMenu from '../../media/appIcon/ic_menu.png'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.wapper}>
                <View style={styles.viewrow}>
                    <TouchableOpacity  onPress={this.props.onOpen} >
                        <Image source={icMenu} style={styles.iconStyle} />
                    </TouchableOpacity>
                        <Text style={styles.texttitle}>Wearing a Dress</Text>
                        <Image source={icLogo} style={styles.iconStyle} />
                </View>
                <TextInput style={styles.textInput}
                    placeholder='what do you want buy?' />
            </View>
        );
    }
}
export default Header;

const styles=StyleSheet.create({
    wapper:{
        height:height/8,
        backgroundColor:'#2ABB9C',
        justifyContent:'space-around',
        padding:10
    },
    viewrow:{
        justifyContent:'space-between',
        flexDirection:'row'
    },
    textInput:{
        height:height/23,
        backgroundColor:'white',
        paddingLeft:10,
        paddingVertical:0
    },
    iconStyle:{
        width:25,
        height:25
    },
    texttitle:{
        color:"#FFF",
        fontSize:20
    }
    
});