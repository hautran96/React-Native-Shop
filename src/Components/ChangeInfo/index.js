import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, TextInput
} from 'react-native';
import backSpecial from '../../media/appIcon/backs.png';
import { Actions } from 'react-native-router-flux';

class ChangeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            txtName: 'Tran Minh Hau', 
            txtAddress: '1029f Nguyen trai /Q5', 
            txtPhone: '01694472176' 
         };
    }
    goBacktomain(){
        Actions.pop();
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <View />
                    <Text style = {styles.txtTitle}>User Infomation</Text>
                    <TouchableOpacity onPress={()=>{this.goBacktomain()}}>
                        <Image source={backSpecial} style={styles.backIconstyle}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Enter your name'
                        autoCapitalize='none'
                        value={this.state.name}
                        onChangeText={txtName=>this.setState({...this.setState,txtName})}/>
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Enter your address'
                        autoCapitalize='none'
                        value={this.state.address}
                        onChangeText={txtAddress=>this.setState({...this.setState,txtAddress})}/>
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Enter your phone'
                        autoCapitalize='none'
                        value={this.state.phone}
                        onChangeText={txtPhone=>this.setState({...this.setState,txtPhone})}/>
                    <TouchableOpacity style={styles.SignInContainer}>
                        <Text style={styles.textInfo}>CHANGE YOUR INFOMATION</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default ChangeInfo;

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'#fff'
    },
    txtTitle:{
        color:'#fff',
        fontSize:20
    },
    backIconstyle:{
        width:30,
        height:30
    },
    header:{    
        flex:1,
        backgroundColor:'#2ABB9C',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:10
    },
    body:{
        flex:10,
        backgroundColor: '#F6F6F6',
        justifyContent: 'center'
    },
    SignInContainer:{
        marginHorizontal:20,
        backgroundColor: '#2ABB9C',
        borderRadius:20,
        height:45,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'stretch'
    },
    textInput:{
        height:45,
        marginHorizontal:20,
        backgroundColor:'#fff',
        paddingLeft:20,
        borderRadius:20,
        marginBottom:20,
        borderColor:'#2ABB9C',
        borderWidth:1
    },
    textInfo:{
        color: '#FFF', 
        fontWeight: '600', 
        paddingHorizontal: 20
    }
})