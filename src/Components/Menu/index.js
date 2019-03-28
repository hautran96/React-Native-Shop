import React, { Component } from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native'
import {Actions} from 'react-native-router-flux'
import profileImage from '../../media/temp/profile.png'
export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            isLogIn:true
        };
    }
    gotoAuthentication(){
        Actions.Authencation();
    }
    gotoOrderHistory(){
        Actions.OrderHistory();
    }
    gotoChangeInfo(){
        Actions.ChangeInfo();
    }
    signout(){
        Actions.Main();
    }
    render(){
        const logoutJSX=(
            <View  style={styles.viewmenu}>
                    <TouchableOpacity style={styles.btnStyle} onPress={()=>{this.gotoAuthentication()}}>
                        <Text style={styles.btnText}>Sign In</Text>
                    </TouchableOpacity>
            </View>
        )
        const loginJSX=(
            <View style={styles.loginContainer}>
                    <Text style={styles.textname}>Tran Minh Hau</Text>
                    <View>
                        <TouchableOpacity style={styles.btnSignIn} onPress={()=>{this.gotoOrderHistory()}}>
                            <Text style={styles.btnTextSign}>OrderHistory</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSignIn} onPress={()=>{this.gotoChangeInfo()}}>
                            <Text style={styles.btnTextSign}>ChangeInfo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSignIn} onPress={()=>{this.signout()}}>
                            <Text style={styles.btnTextSign}>Sign Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        )
        const mainJSX = this.state.isLogIn ? loginJSX : logoutJSX;
        return(
            <View style={styles.container}>
                <Image source={profileImage} style={styles.profile}/>
                { mainJSX }
            </View>     
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        borderRightWidth:3.5,
        borderColor:"#FFF",
        alignItems:'center',
        backgroundColor:'#2ABB9C'
    },
    profile:{
        width:150,
        height:150,
        borderRadius:75,
        marginVertical:10
    },
    btnStyle:{
        marginVertical:20,
        height:50,
        justifyContent:"center",
        backgroundColor:'#fff',
        alignItems:'center',
        paddingHorizontal:70,
        borderRadius:5
    },
    btnSignIn:{
        height:50,
        justifyContent:"center",
        backgroundColor:'#fff',
        width:200,
        borderRadius:5,
        marginBottom:10,
        paddingLeft:10,
    },
    btnText:{
        fontSize:20,
        color:'black'
    },
    btnTextSign:{
        fontSize:15,
        color:'black'
    },
    textname:{
        marginBottom:50,
        fontSize:20,
        color:'#fff',
    },
    loginContainer:{
        justifyContent:'space-between',
        alignItems:'center'
    }
})