import React, { Component } from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Dimensions,Image,TextInput} from 'react-native'
import {Actions} from 'react-native-router-flux'
const {height} = Dimensions.get('window');
import icBack from '../../media/appIcon/back_white.png'
import icLogo from '../../media/appIcon/ic_logo.png'
export default class Authencation extends Component {
    constructor(props){
        super(props);
        this.state={
            isSignIn: true
        }
    }
    SignIn(){
        this.setState({isSignIn:true});
    }
    SignUp(){
        this.setState({isSignIn:false});
    }
    goback(){
        Actions.pop()
    }
    render(){
        const signInJSX = (
            <View>
                <TextInput style={styles.inputStyle} placeholder='Enter your email' />   
                <TextInput style={styles.inputStyle} placeholder='Enter your password' />
                <TouchableOpacity style={styles.bigbtn}>
                    <Text style={styles.btnText}>Sign in Now</Text>
                </TouchableOpacity>
            </View>
        )
        const signUpJSX = (
            <View>
                <TextInput style={styles.inputStyle} placeholder='Enter your name' />   
                <TextInput style={styles.inputStyle} placeholder='Enter your email' />
                <TextInput style={styles.inputStyle} placeholder='Enter your password' />   
                <TextInput style={styles.inputStyle} placeholder='Re-enter your password' />
                <TouchableOpacity style={styles.bigbtn}>
                    <Text style={styles.btnText}>Sign Up Now</Text>
                </TouchableOpacity>
            </View>
        )
        const mainJSX = this.state.isSignIn ? signInJSX : signUpJSX;
        return(
            <View style={styles.wapper}>
                <View style={styles.viewrow}>
                    <TouchableOpacity  onPress={()=>{this.goback()}} >
                        <Image source={icBack} style={styles.iconStyle} />
                    </TouchableOpacity>
                        <Text style={styles.texttitle}>Wearing a Dress</Text>
                        <Image source={icLogo} style={styles.iconStyle} />
                </View>
                    {mainJSX}
                <View style={styles.viewcontailer}>
                    <TouchableOpacity style={styles.signin} onPress={()=>{this.SignIn()}}>
                        <Text style={this.state.isSignIn ?  styles.activeStyle : styles.inactiveStyle}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signup} onPress={()=>{this.SignUp()}}>
                        <Text style={!this.state.isSignIn ? styles.activeStyle : styles.inactiveStyle}>Sign Out</Text>
                    </TouchableOpacity>   
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    wapper:{
        flex:1,
        backgroundColor:'#2E2E2E',
        justifyContent:'space-between',
        padding:20
    },
    activeStyle:{
        color:'#2E2E2E'
    },
    inactiveStyle:{
        color:'#D7D7D7'
    },
    viewrow:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    iconStyle:{
        width:25,
        height:25
    },
    texttitle:{
        color:"#FFF",
        fontSize:20
    },
    viewcontailer:{
        flexDirection:'row',
        alignSelf:'stretch'
    },
    signin:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:'center',
        paddingVertical:15,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        marginRight:1,
       
    },
    signup:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:'center',
        paddingVertical:15,
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        marginLeft:1,
    },
    inputStyle:{
        height:50,
        backgroundColor:'#fff',
        borderRadius:20,
        marginBottom:10,
        paddingLeft:30,
        paddingVertical:0
    },
    bigbtn:{
        height:50,
        borderRadius:20,
        borderWidth:1,
        borderColor:"#fff",
        alignItems:'center',
        justifyContent:'center'
    },
    btnText:{
        color:'white',
        fontSize:15
    }
});