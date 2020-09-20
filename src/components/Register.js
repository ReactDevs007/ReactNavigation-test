import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';

import {TextInput, Button, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function Register({navigation}) {

  return (
    <SafeAreaView>
        <TextInput
          placeholder={"Email"}
          placeholderTextColor={'white'}
          style={{backgroundColor: '#00f'}}
        />
        <TextInput
          placeholder={"Password"}
          placeholderTextColor={'white'}
          style={{backgroundColor: '#00f', marginVertical: 30}}
        />
        <TextInput
          placeholder={"New Password"}
          placeholderTextColor={'white'}
          style={{backgroundColor: '#00f', marginVertical: 30}}
        />
        <Button title="Register" onPress={() => {navigation.navigate('Login')}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});

export default Register;
