import React, { Component } from 'react';
import {View,Text,Image,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
class TopProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    gotoProductDetail(product){
        Actions.push('ProductDetail',{
            product:product
        })
    }
    render() {
        const url = 'http://192.168.1.20/api/images/product/'
        const { topProducts } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.titlecontainer}>
                    <Text style={styles.texttitle}>TOP PRODUCT</Text>
                </View>
                <View style={styles.body}>
                {topProducts.map(e=>(
                    <TouchableOpacity key={e.id} onPress={()=>{this.gotoProductDetail(e)}}>
                        <View style={styles.productcontainer}>
                            <Image source = {{uri:`${url}${e.images[0]}`}} style={styles.productimage} />
                            <Text style={styles.textname}>{e.name.toUpperCase()}</Text>
                            <Text style={styles.textprice}>{e.price}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
                </View>
            </View>
        );
    }
}

export default TopProduct;
const {width} = Dimensions.get('window')
const productWidth = (width-60)/2;
const productImageHeight = (productWidth/361) * 452;
const styles= StyleSheet.create({
    container:{
        margin:10,
        backgroundColor:"#FFF",
        shadowColor:'#070719',
        shadowOffset:{ width:0 , height: 3},
        shadowOpacity:0.2,
    },
    titlecontainer:{
        height:50,
        justifyContent:'center',
        paddingLeft:10,
    },
    texttitle:{
        fontSize:20,
        color:'#AFAEAF',
    },
    body:{
        flexWrap: 'wrap',
        flexDirection:'row',
        justifyContent:'space-around',
        paddingBottom:10,
    },
    productcontainer:{
        
        width:productWidth,
        shadowColor:'#070719',
        shadowOffset:{ width:0 , height: 3},
        shadowOpacity:0.2,
    },
    productimage:{
        width:productWidth,
        height:productImageHeight
    },
    textname:{
        marginVertical:5,
        paddingLeft:10,
        color:'#000'
    },
    textprice:{
        marginBottom:5,
        paddingLeft:10,
        color:'black'
    }
})