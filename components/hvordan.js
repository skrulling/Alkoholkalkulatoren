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
  Vibration
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class Hvordan extends Component {
  static navigationOptions = {
    header: {
      titleStyle: {
        color: '#ffffff'
      },
      style: {
        backgroundColor: '#6E3667'
      },
    },
    title: 'Hvordan bruke appen',
  };
  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.appContainer}>
        <View style={styles.infoContaienr}>
          <Text style={styles.headerText}>Hva gjør denne appen?</Text>
          <Text style={styles.infoText}>
          Alkoholkalkulatoren bruker den informasjonen du skriver inn om en vare, og sier noe om hvor dyr denne
           varen er med henssyn til mengde alkohol. 
          </Text>
          <Text style={styles.infoText}>
          Det kan være vanskelig å sammenligne pris på produkter som har forskjellig volum eller alkoholprosent,
           og dermed er det ikke alltid lett å vite hvor mye en egentlig betaler for en drink på byen. 
           Denne kalkulatoren gjør det mye lettere å sammenligne produkter, og dermed finne de beste kjøpene. 
          </Text>
          <Text style={styles.headerText}>Vi tar et eksempel</Text>
          <Text style={styles.infoText}>
            La oss si at du lurer på hvor dyr en shot med vokda er på et utested. Shoten koster 95kr, inneholder 
            4 cl (0.04 liter) vodka med en alkoholprosent på 40%.
          </Text>
          <Text style={styles.infoText}>
            Ved å bruke kalkulatoren finner vi ut at en slik shot på byen koster 1187.5kr per 2 dl ren alkohol.
             Dette tallet sier ikke så mye i seg selv om vi ikke har noen andre resultat å referere til. 
             Så vi skriver inn prisen og volumet på en vodka fra Vinmonopolet. Denne vil koste ca. 200kr
              for 0.5 liter med 40% vodka. Vi putter tallene inn i kalkulatoren og får 200kr per 2 dl
               ren alkohol. 
          </Text>
          <Text style={styles.infoText}>
            Vi ser nå at å kjøpe vodka ute på byen koster 600%, eller seks ganger så mye som i butikk.
          </Text>
          <TouchableNativeFeedback
            onPress={() => navigate('HvordanPromille')}
            background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.buttonAboutContainer}>
                  <Text style={styles.buttonText}>Info om promillekalkulatoren</Text>
              </View>
          </TouchableNativeFeedback>

        </View>
      </View>
      );
  }
}

var styles = StyleSheet.create({
  headerText: {
    textAlign: "center",
    fontSize: 15,
    color: "#ffffff",
    fontFamily: "sans-serif-medium",
    padding: 5,
  },
  infoText: {
    textAlign: "left",
    fontSize: 13,
    color: "#ffffff",
    fontFamily: "sans-serif-thin",
    padding: 5,
  },
  infoContaienr: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appContainer: {
    flex: 1,
    backgroundColor: "#6E3667"
  },
  buttonAboutContainer: {
    margin: 10,
    borderRadius: 5,
    height: 55,
    backgroundColor: "#1A0315",
    width: 300
  },
  buttonText: {
    textAlign: "center",
    margin: 8,
    fontSize: 18,
    color: "#ffffff"
  },
})

export default Hvordan