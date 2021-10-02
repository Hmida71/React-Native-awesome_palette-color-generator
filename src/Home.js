import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import usePrevious from 'react-use-previous';
import hexToHsl from 'hex-to-hsl';
import randomColor from 'randomcolor';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
  Button,
  
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  const ColorCard = ({ color, onPress }) => {
    return (
      <View
        style={{
          width: '50%',
          height: 200,
          padding: 5,
        }}
        onPress={onPress}
      >
        <View
          style={{
            padding: 5,
            backgroundColor: '#FFF',
            borderRadius: 15,
            height: '100%',
          }}
        >
          <Animated.View
            style={{
              backgroundColor: color,
              padding: 10,
              borderRadius: 12,
              flex: 1,
            }}
          />
          <View
            style={{
              paddingVertical: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TextInput
              style={{
                fontSize: 16,
              }}
            >
              {color}
            </TextInput>
          </View>
        </View>
      </View>
    );
  };
  const getColor = () => {
    return randomColor({
      luminosity: 'light',
      hue: 'random',
    });
  };

  const get5New = () => {
    return [getColor(), getColor(), getColor(), getColor()];
  };
  const [colors, setColors] = useState(get5New());

  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <View style={styles.topbar}>
        <AntDesign name="menufold" size={28} color="#fff" onPress={()=>navigation.openDrawer()} />
            <Text style={styles.texthome}>Home</Text>
            {/* <Text>Right</Text> */}
        </View>
        <Text style={styles.title}>Color palette generator</Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {colors.map((color, index) => {
            return <ColorCard key={index} color={color} />;
          })}
        </View>
        <View
          style={{
            marginTop: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity
            style={styles.generateButton}
            onPress={() => {
              setColors(get5New());
            }}
          >
            <Text style={{ color: '#FFF', fontSize: 18 }}>
              Generate palette
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#E8ECF3',
  },
  title: {
    fontSize: 34,
    color: '#0A102C',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 50,
  },
  generateButton: {
    backgroundColor: '#7E6CCA',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    shadowColor: '#7E6CCA',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  topbar: {
    alignSelf: 'stretch',
    height: 104,
    flexDirection: 'row', // row
    backgroundColor: '#9AC4F8',
    alignItems: 'flex-end',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom:10,
  },
  texthome:{
    color:'#fff',
    fontSize:23,
    marginLeft:'35%',
  }
  
});
export default Home;
