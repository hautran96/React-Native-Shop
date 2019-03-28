import React, { Component } from 'react';
import { View , StyleSheet, Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from '../Home'
import Cart from '../Cart'
import Contact from '../Contact'
import Search from '../Search'
import Header from '../Header'
import homeIconS from '../../media/appIcon/home.png'
import homeIcon from '../../media/appIcon/home0.png'
import cartIconS from '../../media/appIcon/cart.png'
import cartIcon from '../../media/appIcon/cart0.png'
import contactIconS from '../../media/appIcon/contact.png'
import contactIcon from '../../media/appIcon/contact0.png'
import searchIconS from '../../media/appIcon/search.png'
import searchIcon from '../../media/appIcon/search0.png'
import global from '../OrderHistory/global'
import initData from '../API/initData'
import saveCart from '../API/saveCart'
import getCart from '../API/getCart'
export default class Shop extends Component {
    constructor(props){
        super(props);
        this.state = { 
            selectedTab:'home',
            types:[],
            topProducts:[],
            cartArray:[]
     };
     global.addProductToCart = this.addProductToCart.bind(this)
    }
    componentDidMount() {
    initData()
        .then(resJSON => {
        this.setState({
            types: resJSON.type,
            topProducts: resJSON.product})
        })
        getCart()
            .then(cartArray=>this.setState({cartArray}))
    }
    addProductToCart(product){
        this.setState({
            cartArray: this.state.cartArray.concat({product,quality:1}) 
        } ,() => saveCart(this.state.cartArray));
        
    }
    openmenu(){
        const {open} = this.props;
        open();
    }
    render(){
        const  { types,topProducts,cartArray } = this.state
        return(
            <View style={{flex:1}}>
                <Header onOpen={this.openmenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Image source={homeIcon} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={homeIconS} style={styles.iconStyle} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <Home types={types} topProducts={topProducts}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        renderIcon={() => <Image source={cartIcon} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={cartIconS} style={styles.iconStyle}/>}
                        onPress={() => this.setState({ selectedTab: 'cart' })}>
                        <Cart cartArray={cartArray}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        renderIcon={() => <Image source={contactIcon} style={styles.iconStyle}/>}
                        renderSelectedIcon={() => <Image source={contactIconS} style={styles.iconStyle}/>}
                        onPress={() => this.setState({ selectedTab: 'contact' })}>
                        <Contact />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        renderIcon={() => <Image source={searchIcon} style={styles.iconStyle}/>}
                        renderSelectedIcon={() => <Image source={searchIconS} style={styles.iconStyle}/>}
                        onPress={() => this.setState({ selectedTab: 'search' })}>
                        <Search />
                    </TabNavigator.Item>
                </TabNavigator>
                </View>
        )
    }
}
const styles = StyleSheet.create({
    iconStyle:{
        width:20,
        height:20
    }
})