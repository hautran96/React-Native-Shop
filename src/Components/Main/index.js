import React, { Component } from 'react';
import {View,Text,TouchableOpacity} from 'react-native'
import {Actions} from 'react-native-router-flux'
import Drawer from 'react-native-drawer'
import Menu from '../Menu'
import Shop from '../Shop'
export default class Main extends Component {
    closeControlPanel = () => {
        this.drawer.close()
      };
    openControlPanel = () => {
        this.drawer.open()
      };
    render(){
        return(
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Menu />}
                openDrawerOffset={0.35}
                tapToClose={true}
                >
                <Shop open={this.openControlPanel.bind(this)} />
          </Drawer>
        )
    }
}