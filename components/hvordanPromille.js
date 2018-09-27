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

class HvordanPromille extends Component {
  static navigationOptions = {
    header: {
      titleStyle: {
        color: '#ffffff'
      },
      style: {
        backgroundColor: '#6E3667'
      },
    },
    title: 'Hvordan bruke Promillekostnad',
  };
  render() {
    return(
      <View style={styles.appContainer}>
        <View style={styles.infoContaienr}>
          <Text style={styles.headerText}>Hva gjør promillekostnadskalkulatoren?</Text>
          <Text style={styles.infoText}>
          Den regner ut hvor mye det vil koste deg å få rundt 2 i promille om du drikker ditt valgte produkt
           gjevnt over 4 timer. Ved rundt 2 i promille vil folk flest føle seg 'full', men det vil variere 
           fra en person til en annen. Denne kalkulatoren tar ditt kjønn og vekt til betraktning, men dette er 
           ikke nok informasjon til å gi et nøyaktig promilleanslag, så vurder resultatet kalkulatoren gir 
           som en veiledning, ikke fakta. 
          </Text>
          <Text style={styles.infoText}>
          En promilleverdi på rundt 2 kan være farlig og det frarådes å drikke så store mengder alkohol. 
          Verdien er valgt i denne kalkulatoren for å gi en veiledning av hva det vil koste å kjøpe store 
          mengder av et gitt produkt. 
          </Text>
          <Text style={styles.infoText}>
          Denne kalkulatoren vil estimere at det vil kreves rundt 7 halvlitere med 4.7% øl for at en mann 
          på 70 kg skal ha 2 i promille etter 4 timer.
          </Text>

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
})

export default HvordanPromille