import React, { useEffect } from 'react';

//NAVIGATOR
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//SCREENS
import LoginScreen from './login'
import SplashScreen from './splashscreen';
import HomeScreen from './home';
import { useDispatch, useSelector } from 'react-redux';


import * as authActions from '../redux/auth_redux/actions';

export const Stack = createStackNavigator();

const Route = (props) => {
  const authReducer = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('App initialised...');
    dispatch(authActions.initialiseApp);
    console.log('props Route', props);
  }, [dispatch, props]);
  console.log('props Route', props);

  return (
    <NavigationContainer>
      {authReducer.loading ? (
        <Stack.Navigator>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        </Stack.Navigator>
      ) : authReducer.loggedIn ? (
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Route