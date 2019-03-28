import React, { Component } from 'react';
import { View,Text,ScrollView } from 'react-native';
import Colection from '../Home/Colection';
import Category from '../Home/Category';
import TopProduct from '../Home/TopProduct'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const { types,topProducts } = this.props
        return (
            <ScrollView style={{ flex:1,backgroundColor:'#A9F5F2'}}>
                <Colection />
                <Category types={types} />
                <TopProduct topProducts={topProducts}/>
            </ScrollView>
        );
    }
}
export default Home;