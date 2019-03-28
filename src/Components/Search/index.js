import React, { Component } from 'react';
import { StyleSheet, 
    Text, 
    TouchableOpacity, 
    ScrollView, 
    View, 
    Image, 
    Dimensions 
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import sp1 from '../../media/temp/sp1.jpeg';
import sp4 from '../../media/temp/sp4.jpeg';
const { width } = Dimensions.get('window');
function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    gotoProductDetail(){
        Actions.ProductDetail();
    }
    render() {
        return (
            <ScrollView style={styles.wrapper}>
                <View style={styles.product}>
                    <Image source={sp1} style={styles.productImage} />
                <View style={styles.mainRight}>
                    <Text style={styles.txtName}>{toTitleCase('black dress')}</Text>
                    <Text style={styles.txtPrice}>100$</Text>
                    <Text style={styles.txtMaterial}>Material Fur</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text  style={styles.txtColor}>Color White</Text>
                        <View style={{
                                    height: 15,
                                    width: 15,
                                    backgroundColor: 'white',
                                    borderRadius: 15,
                                    marginLeft: 10
                                }} />
                    </View>
                    <TouchableOpacity  style={styles.showDetailContainer}>
                        <Text style={styles.txtShowDetail}>SHOW DETAIL</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.product}>
                    <Image source={sp4} style={styles.productImage} />
                <View style={styles.mainRight}>
                    <Text style={styles.txtName}>{toTitleCase('black dress')}</Text>
                    <Text style={styles.txtPrice}>100$</Text>
                    <Text style={styles.txtMaterial}>Material Fur</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text  style={styles.txtColor}>Color White</Text>
                        <View style={{
                                    height: 15,
                                    width: 15,
                                    backgroundColor: 'white',
                                    borderRadius: 15,
                                    marginLeft: 10
                                }} />
                    </View>
                    <TouchableOpacity  style={styles.showDetailContainer}>
                        <Text style={styles.txtShowDetail}>SHOW DETAIL</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        );
    }
}
export default Search;

const styles = StyleSheet.create({
    productImage:{
        width:width/4,
        height:((width/4)*452)/361,
        flex:1,
        resizeMode: 'center'
    },
    wrapper:{
       flex:1,
       backgroundColor:'#F6F6F6'
    },
    product:{
        flexDirection:'row',
        margin:10,
        padding:10,
        backgroundColor:'#ffffff',
        borderRadius:2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    mainRight:{
        flex:3,
        justifyContent:'space-between'
    },
    txtShowDetail:{
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        textAlign: 'right',
    },
    showDetailContainer:{
        flexDirection:'row',
        position:'absolute',
        alignSelf:'flex-end',
        marginTop: 100
    },
    txtName:{
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
    },
    txtPrice:{
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
    },
    txtMaterial:{
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
    },
    txtColor:{
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
    }
})