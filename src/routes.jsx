import React, { Component } from 'react';
import 'react-native-gesture-handler';
import Login from './components/Login'
import Register from './components/Register';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const RootSwitch = createBottomTabNavigator();
function Root() {
  return (
    <RootSwitch.Navigator
      initialRouteName="Auth"
      backBehavior="none"
      unmountOnBlur={true}
      screenOptions={({ navigation, route }) => ({
        tabBarVisible: false,
      })}
    >
      <RootSwitch.Screen name="Main" component={MyTabs} />
      <RootSwitch.Screen name="Auth" component={Auth} />
      {/* <RootSwitch.Screen  name="Splash" component={SplashScreen} /> */}
      {/* You can create a splash screen and then if authedUser then you can navigate "Main" else navigate "Auth" */}
    </RootSwitch.Navigator>
  )
}

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const AuthStack = createStackNavigator();
function Auth() {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={({ navigation, route }) => ({
        cardStyle: { backgroundColor: '#032A3A'},
        gestureEnabled: true,
        headerTitleAlign: "center",
        headerStyle: {
          height: Platform.OS==='ios'? 110 : 80,
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
          backgroundColor:  '#032A3A',
          shadowColor: 'transparent',
        },
        headerLeft: null,
        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      <AuthStack.Screen options={{ headerShown: true, title: 'Login' }} name="Login" component={Login} />
      <AuthStack.Screen options={{ headerShown: true, title: 'Register' }} name="Register" component={Register} />
    </AuthStack.Navigator>
  )
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        const renderIcon = () => {
          switch(index) {
            case 0:
              return <MaterialCommunityIcons name="home" color={isFocused ? '#00f' : '#222'} size={25} style={{alignSelf: 'center'}} />
            case 1:
              return <MaterialCommunityIcons name="bell" color={isFocused ? '#00f' : '#222'} size={25} style={{alignSelf: 'center'}} />
            case 2:
              return <MaterialCommunityIcons name="account" color={isFocused ? '#00f' : '#222'} size={25} style={{alignSelf: 'center'}} />
            case 3:
              return <MaterialCommunityIcons name="email" color={isFocused ? '#00f' : '#222'} size={25} style={{alignSelf: 'center'}} />
            case 4:
              return <MaterialCommunityIcons name="egg" color={isFocused ? '#00f' : '#222'} size={25} style={{alignSelf: 'center'}} />
            default:
              return <MaterialCommunityIcons name="account" color={isFocused ? '#00f' : '#222'} size={25} style={{alignSelf: 'center'}} />
          }
        }
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            {renderIcon()}
            <Text style={{ color: isFocused ? '#00f' : '#222', alignSelf: 'center' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Events" component={SettingsScreen} />
      <Tab.Screen name="Map" component={SettingsScreen} />
      <Tab.Screen name="Journal" component={SettingsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default App;
