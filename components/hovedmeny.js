import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  Vibration,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class Hovedmeny extends Component {
  static navigationOptions = {
    header: {
      titleStyle: {
        color: '#ffffff'
      },
      style: {
        backgroundColor: '#6E3667'
      },
    },
    title: 'Hovedmeny',
  };
  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.appContainer} >
        <View style={styles.logoContainer}>
          <Image style={styles.imgStyle} source={require('./img/logo.png')} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Velkommen til Alkoholkalkulatoren!</Text>
          <Text style={styles.subTitleText}>Verktøyet som hjelper deg å regne ut hvor mye du faktisk betaler for
          alkoholinnholdige drikkevarer i butikk, eller ute på byen.</Text>
        </View>
      
        <View style={styles.knappContainer}>
          <TouchableNativeFeedback
            onPress={() => navigate('Kalkulatoren')}
            background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.buttonContainer}>
                  <Text style={styles.buttonKalkText}>Kalkulatoren</Text>
              </View>
    </TouchableNativeFeedback>

    <TouchableNativeFeedback
            onPress={() => navigate('Promillekostnad')}
            background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.buttonPromContainer}>
                  <Text style={styles.buttonText}>Promillekostnad</Text>
              </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            onPress={() => navigate('Hvordan')}
            background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.buttonAboutContainer}>
                  <Text style={styles.buttonText}>Hvordan bruke appen</Text>
              </View>
          </TouchableNativeFeedback>

        </View>
      </View>
      );
  }
}

var styles = StyleSheet.create({
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    width: 158,
    height: 130,
  },
  buttonText: {
    textAlign: "center",
    margin: 8,
    fontSize: 18,
    color: "#ffffff"
  },
  buttonKalkText: {
    textAlign: "center",
    margin: 12,
    fontSize: 25,
    color: "#ffffff"
  },
  buttonAboutContainer: {
    margin: 10,
    borderRadius: 5,
    height: 45,
    backgroundColor: "#1A0315",
    width: 200
  },
  buttonPromContainer: {
    margin: 10,
    borderRadius: 5,
    height: 45,
    backgroundColor: "#88D317",
    width: 200
  },
  buttonContainer: {
    margin: 10,
    borderRadius: 5,
    height: 55,
    backgroundColor: "#88D317",
    width: 300
  },
  knappContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    textAlign: "center",
    fontSize: 20,
    color: "#ffffff",
    fontFamily: "sans-serif-medium",
    padding: 5,
  },
  subTitleText: {
    textAlign: "center",
    fontSize: 15,
    color: "#ffffff",
    fontFamily: "sans-serif-thin",
    padding: 5,
  },
  titleContainer: {
    flex: 2,
    backgroundColor: "#6E3667",
    borderBottomWidth: 0,
  },
  appContainer: {
    flex: 1,
    backgroundColor: "#6E3667"
  },
})

export default Hovedmeny