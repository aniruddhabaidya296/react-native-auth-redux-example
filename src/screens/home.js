import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from "react-native";
import { COLORS } from '../../constants/colors';
import { SizeConfig } from '../../constants/size-config';
import * as loginActions from '.././redux/login_redux/actions';

import { useDispatch, useSelector } from "react-redux";
import { color } from "react-native-elements/dist/helpers";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(loginActions.logout());
    navigation.navigate('LoginScreen');
  }

  // const homeReducer = useSelector(state => state.homeReducer);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topContainer}>
          <Text>This is the home page</Text>
        </View><View style={styles.topContainer}>
          <TouchableOpacity
            style={styles.continueButtonContainer}
            onPress={() => {
              logout();
            }}
          >
            <View>
              <Text style={styles.textStyle}>LOG OUT</Text>
            </View>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    // height: SizeConfig.blockHeight * 100,
    backgroundColor: "white",
    flex: 1
  },
  mainContainer: {
    marginLeft: SizeConfig.blockWidth * 6
    // backgroundColor: "red",
    // height: SizeConfig.blockHeight * 100
  },
  textStyle:{
    color: COLORS.whiteDark,
    textAlign: "center"
  },
  continueButtonContainer: {
    alignContent:"center",
    backgroundColor: COLORS.blueLight,
    width: SizeConfig.blockWidth * 50,
    height: SizeConfig.blockHeight * 7,
    // justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: SizeConfig.blockWidth * 5,
  },

  topContainer: {
    width: SizeConfig.blockWidth * 88,
    marginHorizontal: SizeConfig.blockWidth * 6,
    marginTop: SizeConfig.blockHeight * 3,
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-evenly"
  },
});
