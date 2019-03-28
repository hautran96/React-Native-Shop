import React from 'react'
import {Stack,Scene} from 'react-native-router-flux'
import Main from '../Components/Main'
import Authencation from '../Components/Authencation'
import OrderHistory from '../Components/OrderHistory'
import ChangeInfo from '../Components/ChangeInfo'
import ListProduct from '../Components/Home/ListProduct'
import ProductDetail from '../Components/Home/ProductDetail'
const Index = (
    <Stack key='root'>
        <Stack key='main'  hideNavBar initial  >
            <Scene key='Main' hideNavBar component={Main}  />
            <Scene key='Authencation' hideNavBar component={Authencation} />
            <Scene key='OrderHistory' hideNavBar component={OrderHistory}/>
            <Scene key='ChangeInfo' hideNavBar component={ChangeInfo} />
            <Scene key='ListProduct' hideNavBar component = {ListProduct} />
            <Scene key='ProductDetail' hideNavBar component = {ProductDetail}/>
        </Stack>
    </Stack>
)
export default Index