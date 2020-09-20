import React, {useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {TextInput, Button, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BackHandler} from 'react-native';
function Login ({navigation, }) {
  const onRegister = () => {
    navigation.navigate('Register');
  };
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  return (
    <SafeAreaView>
        <TextInput
          placeholder={"UserName"}
          placeholderTextColor={'white'}
          style={{backgroundColor: '#00f'}}
        />
        <TextInput
          placeholder={"Password"}
          placeholderTextColor={'white'}
          style={{backgroundColor: '#00f', marginVertical: 30}}
        />
        <Button title="Login" onPress={() => {navigation.navigate('Main')}} />
        <View style={{height: 30}} />
        <Button title="Register" onPress={() => {navigation.navigate('Register')}} />
    </SafeAreaView>
  );
}

export default Login;
