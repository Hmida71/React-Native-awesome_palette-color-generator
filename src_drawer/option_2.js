import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { Component } from 'react'
import Drawer from './Drawer'

const EXAMPLE_ITEMS = ['#F35369','#F7923B','#FCD872','#A3CE71','#54C7EC','#8C72CB']

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerPosition: 'collapsed'
    }
  }

  toggleDrawer = () =>{
    let { drawerPosition } = this.state
    this.setState({
      drawerPosition: drawerPosition === 'dismissed' ? 'collapsed' : 'expanded'
    })
  }

  render() {
    return <View style={styles.wrapper}>
      <TouchableOpacity onPress={ _ => this.toggleDrawer() } style={{padding:12, borderRadius:100, backgroundColor:'#CCD0D5'}}>
        <Text style={{fontSize:16}}>Toggle Drawer</Text>
      </TouchableOpacity>
      <Drawer
        drawerPosition={ this.state.drawerPosition }
        onChange={ newPosition => this.setState({ drawerPosition: newPosition })}
        expandable={true}>
          <View style={{padding:15}}>
            { EXAMPLE_ITEMS.map((item, i) => {
              return (
              <View key={i}
                 style={{height:200, backgroundColor: item, marginBottom:8, borderRadius:16, width:'100%'}}
              />
              )
            })}
          </View>
      </Drawer>
    </View>
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
    backgroundColor: '#EBEDF0',
    alignItems:'center',
    justifyContent:'center'
  }
});

export default App
