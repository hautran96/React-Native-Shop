import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import {Actions} from 'react-native-router-flux'
const { width } = Dimensions.get('window')
const url = 'http://192.168.1.20/api/images/product/'   
function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    gotoProductDetail(){
        Actions.ProductDetail();
    }
    render() {
        const { cartArray } = this.props
        return (
            <View style={styles.wrapper}>
                <ScrollView style={styles.main}>
                {cartArray.map(e=>(
                    <View style={styles.product}>
                        <Image source={{uri:`${url}${e.product.images[0]}`}} style={styles.productImage}/>
                        <View style={styles.mainRight}>
                             <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                                 <Text style={styles.txtName}>{toTitleCase(e.product.name)}</Text>
                                 <TouchableOpacity>
                                     <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                                 </TouchableOpacity>
                             </View>
                             <View>
                                 <Text style={styles.txtPrice}>{e.product.price}$</Text>
                             </View>
                             <View style={styles.productController}>
                                 <View style={styles.numberOfproduct}>
                                    <TouchableOpacity>
                                        <Text>+</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text>{e.quality}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text>-</Text>
                                    </TouchableOpacity>
                                 </View>
                                 <TouchableOpacity style={styles.showDetailContainer}>
                                     <Text style={styles.txtShowdetail}>SHOW DETAIL</Text>
                                 </TouchableOpacity>
                             </View>
                        </View>
                    </View>
                ))}
                </ScrollView>
                <TouchableOpacity style={styles.checkoutButton}>
                        <Text style={styles.checkoutTitle}>TOTAL {1000}$ CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default Cart;

const styles = StyleSheet.create({
    productImage:{
        width: width/4,
        height: ((width/4)*452) / 361
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
    wrapper:{
        flex:1,
        backgroundColor:'#DFDFDF'
    },
    showDetailContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    numberOfproduct:{
        flex:1,
        justifyContent:'space-between',
        flexDirection:'row'
    },
    productController:{
        flexDirection:'row'
    },
    txtPrice:{
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',
    },
    txtName:{
        paddingLeft:20,
        fontSize:20,
        fontWeight:'400',
        color:'#A7A7A7'
    },
    mainRight:{
        flex:3,
        justifyContent:'space-between'
    },
    main:{
        width,
        backgroundColor:'#DFDFDF'
    },
    txtShowdetail:{
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        textAlign: 'right',
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },

})