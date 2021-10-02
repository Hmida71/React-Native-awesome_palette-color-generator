import React from 'react';
import {View,StyleSheet,Text,Button,Image,TouchableOpacity,Linking,
} from 'react-native';
import { Card } from 'react-native-shadow-cards';

const Contact = ({ navigation }) => {
  const Git = (
    <Image
      source={{
        uri:
          'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      }}
      style={{ width: 40, height: 40 }}
    />
  );
  return (
    <View style={styles.container}>
      <Card
        style={{ margin: 10, height: 300, alignItems: 'center', width: 320 }}
      >
        <Image source={require('../assets/Profil.jpeg')} style={styles.image} />
        <Text style={styles.textHi}>
          Hi there
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif',
            }}
            style={{ width: 30, height: 30 }}
          />
          ,I am Hmida !
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {Git}
          <TouchableOpacity
            onPress={() => Linking.openURL('https://github.com/Hmida71')}
          >
            <Text style={styles.txtGit}>
              {' '}
              =={'>'}
              {'>'} My GitHub
            </Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 20,
    marginBottom: 10,
  },
  textHi: {
    fontSize: 18,
    marginBottom: 20,
  },
  txtGit: {
    fontSize: 18,
  },
});

export default Contact;
