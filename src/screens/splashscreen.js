import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View View style={styles.container}>
        <Text style={styles.titleStyle}>I Need This</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.whiteDark,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    height: 70,
    width: 70,
  },
  appIcon: {
    marginLeft: -5,
    marginBottom: 30,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  titleStyle: {
    fontSize: 30,
    textAlign: 'center',
  },
});

