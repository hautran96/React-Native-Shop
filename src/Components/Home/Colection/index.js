import React, { Component } from 'react';
import { View,Text,Image,StyleSheet,Dimensions } from 'react-native';
import bannerImage from '../../../media/temp/banner.jpg'
const { height,width } = Dimensions.get('window');
class Colection extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.wapper}>
                <View style={styles.wappertitle}>
                    <Text style={styles.textStyle}>SPRING COLECTION</Text>
                </View>
                <View style={styles.viewImage}>
                    <Image source={bannerImage} style={styles.imageStyle}/>
                </View>
            </View>
        );
    }
}

export default Colection;
const imageWidth =  width-40

const styles = StyleSheet.create({
    wapper:{
        height: height * 0.37,
        backgroundColor:'#FFF',
        margin:10,
        shadowColor:'#070719',
        shadowOffset:{ width:0 , height: 3},
        shadowOpacity:0.2,
        padding:10,
        paddingTop:0
    },
    wappertitle:{
        flex:1,
        justifyContent:'center',
    },
    viewImage:{
        justifyContent:"flex-end",
        flex:4
    },
    imageStyle:{
        height: (imageWidth/933)*465,
        width:  imageWidth
    },
    textStyle:{
        fontSize:20,
        color:'#AFAEAF'
    }
})