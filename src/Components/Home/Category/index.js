import React, { Component } from 'react';
import { View,Text,Image,StyleSheet,Dimensions,TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper'
import { Actions } from 'react-native-router-flux';
const { height,width } = Dimensions.get('window');
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    gotoListProduct(e){
        Actions.ListProduct();
    }
    render() {
        const url = 'http://192.168.1.20/api/images/type/'
        const { types } = this.props
        return (
            <View style={styles.wapper}>
                <View style={styles.wappertitle}>
                    <Text style={styles.textStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={styles.viewSwiper}>
                <Swiper autoplay autoplayDirection={false} showsPagination width={imageWidth} height={(imageWidth/933)*465}>
                {types.map(e=>(
                        <TouchableOpacity key={e.id} onPress={()=>{this.gotoListProduct(e)}}>
                            <Image source={{uri:`${url}${e.image}`}} style={styles.imageStyle}/>
                        </TouchableOpacity>
                ))}
                </Swiper>
                </View>
            </View>
        );
    }
}

export default Category;
const imageWidth =  width-40

const styles = StyleSheet.create({
    wapper:{
        height: height * 0.37,
        backgroundColor:'#FFF',
        margin:10,
        justifyContent:"space-between",
        shadowColor:'#070719',
        shadowOffset:{ width:0 , height: 5},
        shadowOpacity:0.2,
        padding:10,
        paddingTop:0
    },
    wappertitle:{
        flex:1,
        justifyContent:'center',
    },
    imageStyle:{
        height: (imageWidth/933)*465,
        width:  imageWidth,
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        fontSize:20,
        color:'#AFAEAF'
    },
    titlemaxi:{
        fontSize:20,
    },
    viewSwiper:{
        justifyContent:'flex-end',
        flex:4
    }
})