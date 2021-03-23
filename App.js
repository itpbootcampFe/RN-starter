// 1 - import

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Button,
  TouchableOpacity,
} from 'react-native';

// 2 - component
const App = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/front.png')} />
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subTitle}>React Native Developer </Text>
      <Button
        title="Button"
        onPress={() => Alert.alert('Simple Button pressed')}
      />

      <Pressable
        onLongPress={() => Alert.alert('long pressed')}
        onPress={() => Alert.alert('normal pressed')}
      >
        <Text>I'm pressable!</Text>
      </Pressable>

      <TouchableOpacity
        style={styles.touchableOpacity}
        onLongPress={() => Alert.alert('long pressed')}
        onPress={() => Alert.alert('touchable opacity pressed')}
      >
        <Text>touchable opacity</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

// 3- export
export default App;

//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '90%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 41,
    fontWeight: 'bold',
    color: '#6236ff',
    width: '90%',
    textAlign: 'center',
    marginVertical: 15,
  },
  subTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fa6400',
    width: '90%',
    textAlign: 'center',
    marginVertical: 20,
  },
  touchableOpacity: {
    padding: 12,
    width: '70%',
    borderColor: 'green',
    borderStyle: 'solid',
    borderWidth: 2,
    marginVertical: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
});
