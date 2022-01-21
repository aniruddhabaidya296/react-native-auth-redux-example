/* eslint-disable no-useless-escape */
/* eslint-disable no-shadow */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  TextInput
} from 'react-native';
import {COLORS} from '../../constants/colors';
import {SizeConfig} from '../../constants/size-config';
import * as loginActions from '.././redux/login_redux/actions';
import Snackbar from 'react-native-snackbar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon} from 'react-native-elements';
import {useDispatch} from 'react-redux';

const LoginScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const _proceed = () => {
    const params={
      username: username,
      password:password
    }
        dispatch(loginActions.login(params, onSuccess, onError));
  };

  const onSuccess = () => {
    console.log("Reached onSuccess()...")
    setLoading(false);
    navigation.navigate('HomeScreen');
  };

  const onError = (statuMessage) => {
    setLoading(false);
    console.log('login error:' + statuMessage);
    Snackbar.show({
      text: {statuMessage},
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: '#0da9ef',
    });
  };

  // const signNav = () => {
  //   navigation.navigate('SignupScreen');
  // };
  return (
    <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.mainContainer}>
          <View>
          </View>

          <Text style={styles.titleText}>I need this</Text>
          <View style={styles.formContainer}>
          <TextInput
        style={{height: 40}}
        placeholder="Enter username"
        onChangeText={text => setUsername(text)}
        defaultValue={username}
      />
       <TextInput
        style={{height: 40}}
        placeholder="Enter password"
        onChangeText={text => setPassword(text)}
        defaultValue={password}
      />
            {loading ? (
              <View style={styles.activityIndicator}>
                <ActivityIndicator color={COLORS.whiteDark} />
              </View>
            ) : (
              <TouchableOpacity onPress={_proceed}>
                <View style={styles.continueButtonContainer}>
                  <Text style={styles.continueButtonText}>GET STARTED</Text>
                  <Icon
                    name="arrow-forward"
                    type="Ionicons"
                    color={COLORS.whiteDark}
                    size={SizeConfig.blockHeight * 3}
                  />
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  mainContainer: {
    alignItems: 'center',
    marginTop: SizeConfig.blockHeight * 25,
  },
  titleText: {
    color: COLORS.whiteDark,
    fontSize: SizeConfig.blockHeight * 3.8,
    marginVertical: SizeConfig.blockHeight * 3,
  },
  formContainer: {
    width: SizeConfig.blockWidth * 88,
    height: SizeConfig.blockHeight * 16,
    backgroundColor: COLORS.whiteDark,
    elevation: 10,
    borderRadius: 8,
  },
  activityIndicator: {
    backgroundColor: COLORS.blueLight,
    width: SizeConfig.blockWidth * 88,
    height: SizeConfig.blockHeight * 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomEndRadius: 8,
    borderBottomLeftRadius: 8,
  },
  continueButtonContainer: {
    backgroundColor: COLORS.blueLight,
    width: SizeConfig.blockWidth * 88,
    height: SizeConfig.blockHeight * 7,
    // justifyContent: 'center',
    alignItems: 'center',
    borderBottomEndRadius: 8,
    borderBottomLeftRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SizeConfig.blockWidth * 5,
  },
  continueButtonText: {
    color: COLORS.whiteDark,
    fontSize: SizeConfig.blockHeight * 2.2,
  },
  footerContainer: {
    alignItems: 'center',
    marginVertical: SizeConfig.blockHeight * 3,
  },
  footerText: {
    color: COLORS.whiteDark,
    fontSize: SizeConfig.blockHeight * 2.1,
  },
  appLogoImage: {
    // color: COLORS.blueLight,
    height: SizeConfig.blockHeight * 9,
    width: SizeConfig.blockHeight * 9,
  },
});

export default LoginScreen;
