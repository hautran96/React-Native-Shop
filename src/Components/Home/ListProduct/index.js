import React, { Component } from 'react';
import { View,TouchableOpacity,Text,StyleSheet,ScrollView,Image} from 'react-native';
import {Actions} from 'react-native-router-flux'
import backListIcon from '../../../media/appIcon/backList.png'
import sp1 from '../../../media/temp/sp1.jpeg'
import sp2 from '../../../media/temp/sp2.jpeg'
import sp3 from '../../../media/temp/sp3.jpeg'
import sp4 from '../../../media/temp/sp4.jpeg'
import sp5 from '../../../media/temp/sp5.jpeg'
import Header from '../../Header'

class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    goback(){
        Actions.pop()
    }
    gotoProductDetail(){
        Actions.ProductDetail();
    }
    openmenu(){
        const {open} = this.props;
        open();
    }
    render() {
        return (
            <View style={styles.Contrainer}>
                <ScrollView style={styles.wrapper}>
                    <View style={styles.Header}>
                    <TouchableOpacity onPress={()=>{this.goback()}}>
                        <Image source={backListIcon} style={styles.iconStyle} />
                    </TouchableOpacity>
                        <Text style={styles.textTitle}>Party Dress</Text>
                        <View style={{width:30}} />
                    </View>
                    <View style={styles.productContainer}>
                        <Image style = {styles.productImage} source={sp1}/>
                        <View style={styles.productinfo}>
                            <Text style={styles.textName}>Lace sleeve</Text>
                            <Text style={styles.textPrice}>117$</Text>
                            <Text style={styles.textMeterial}>Meterial stee</Text>
                            <View style={styles.lastrowInfo}>
                                <Text>Color Royal Blue</Text>
                                <View style={{backgroundColor:'cyan',height:15,width:15,borderRadius:15/2}}/>
                                <TouchableOpacity onPress={()=>{this.gotoProductDetail()}}>
                                    <Text style={styles.textShowDetail}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.productContainer}>
                        <Image style = {styles.productImage} source={sp2}/>
                        <View style={styles.productinfo}>
                            <Text style={styles.textName}>Lace sleeve</Text>
                            <Text style={styles.textPrice}>117$</Text>
                            <Text style={styles.textMeterial}>Meterial stee</Text>
                            <View style={styles.lastrowInfo}>
                                <Text>Color Royal Blue</Text>
                                <View style={{backgroundColor:'cyan',height:15,width:15,borderRadius:15/2}}/>
                                <TouchableOpacity onPress={()=>{this.gotoProductDetail()}}>
                                    <Text style={styles.textShowDetail}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.productContainer}>
                        <Image style = {styles.productImage} source={sp3}/>
                        <View style={styles.productinfo}>
                            <Text style={styles.textName}>Lace sleeve</Text>
                            <Text style={styles.textPrice}>117$</Text>
                            <Text style={styles.textMeterial}>Meterial stee</Text>
                            <View style={styles.lastrowInfo}>
                                <Text>Color Royal Blue</Text>
                                <View style={{backgroundColor:'cyan',height:15,width:15,borderRadius:15/2}}/>
                                <TouchableOpacity onPress={()=>{this.gotoProductDetail()}}>
                                    <Text style={styles.textShowDetail}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.productContainer}>
                        <Image style = {styles.productImage} source={sp4}/>
                        <View style={styles.productinfo}>
                            <Text style={styles.textName}>Lace sleeve</Text>
                            <Text style={styles.textPrice}>117$</Text>
                            <Text style={styles.textMeterial}>Meterial stee</Text>
                            <View style={styles.lastrowInfo}>
                                <Text>Color Royal Blue</Text>
                                <View style={{backgroundColor:'cyan',height:15,width:15,borderRadius:15/2}}/>
                                <TouchableOpacity onPress={()=>{this.gotoProductDetail()}}>
                                    <Text style={styles.textShowDetail}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>  
            </View>
        );
    }
}

export default ListProduct;

const styles = StyleSheet.create({
    Contrainer:{
        flex:1,
        backgroundColor:'gray',
        padding:5
    },
    Header:{
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:5,
        alignItems:'center'
    },
    wrapper:{
        backgroundColor:'#fff',
        shadowColor:'#070719',
        shadowOffset:{ width:0 , height: 3},
        shadowOpacity:0.2,
        margin:10,
        paddingHorizontal:5
    },
    iconStyle:{
        width:30,
        height:30
    },
    textTitle:{
        fontSize:20,
        color:'#B10D56'
    },
    productContainer:{
        flexDirection:'row',
        paddingVertical:15,
        borderWidth:1,
        borderTopColor:'#BCBCBC',
        borderRightColor:'#fff',
        borderLeftColor:'#fff',
        borderBottomColor:'#fff',
        
    },
    productinfo:{
        justifyContent:'space-between',
        marginLeft:15,
        flex:1
    },
    productImage:{
        width:90,
        height: (90*452)/361
    },
    lastrowInfo:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'stretch',
        alignItems:'center'
    },
    textName:{
        color:'#BCBCBC',
        fontSize:20,
        fontWeight:'400'
    },
    textPrice:{

    },
    textMeterial:{

    },
    textShowDetail:{
        color:'#BCBCBC',
        fontSize:11
    }
})