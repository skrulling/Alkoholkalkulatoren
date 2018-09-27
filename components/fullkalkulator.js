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
  Picker
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class FullKalkulatoren extends Component {
  static navigationOptions = {
    header: {
      titleStyle: {
        color: '#ffffff',
      },
      style: {
        backgroundColor: '#6E3667',
      },
    },
    title: 'Promillekostnad',
  };

  constructor(props) {
    super(props);
    this.state = {produkt: "", vekt: null, kjonn: 0.68, pris: null, alko: null, vol: null, utregninger: []};
  }
  regnUt() {
    Vibration.vibrate();
    var tempVekt = this.state.vekt;
    var tempKjonn = this.state.kjonn;
    var tempPris = this.state.pris;
    var tempAlko = this.state.alko;
    var tempVol = this.state.vol;
    var tempArray = this.state.utregninger.slice();

    var kalkAlk = ((0.26/100) * (tempVekt*1000) * tempKjonn)/789;
    var literVare = kalkAlk/(tempAlko/100);
    var antallVare = literVare/tempVol;

    var kalkulert = antallVare*tempPris;
    kalkulert = Math.round(kalkulert * 100) / 100;
    tempArray.push({navn: this.state.produkt, utregning: kalkulert});
    tempArray.sort(function(a, b){return a.utregning - b.utregning});
    this.setState({utregning: kalkulert, utregninger: tempArray});
    this.setState({produkt: null, pris: null, alko: null, vol: null });
    Keyboard.dismiss();
    console.log(this.state.kjonn);
  }
  visUtregninger () {
    return this.state.utregninger.map((kalkulering, i) => {
      return(
          <Text key={i} style={{color: "#ffffff", textAlign: "center", padding: 5}}>{kalkulering.navn} : {kalkulering.utregning} kr for å få ca 2 i promille etter 4 timer. </Text>
        );
    }); 
        
  }
  focusNextField(nextField) {
    this.refs[nextField].focus();
  }

  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.appContainer}>
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        <View style={styles.inputContainer}>
          <View style={styles.infoRows}>
            <Text style={styles.fieldInfo}>Kjønn:</Text>
            <Text style={styles.fieldInfo}>Kroppsvekt:</Text>
            <Text style={styles.fieldInfo}>Navn på produkt:</Text>
            <Text style={styles.fieldInfo}>Pris:</Text>
            <Text style={styles.fieldInfo}>Alkoholprosent:</Text>
            <Text style={styles.fieldInfo}>Volum i liter:</Text>
          </View>
          
        <View style={styles.inputRows}>
        <Picker
              selectedValue={this.state.kjonn}
              onValueChange={(valg) => this.setState({kjonn: valg})}>
              <Picker.Item label="Mann" value="0.68" />
              <Picker.Item label="Kvinne" value="0.55" />
            </Picker>
         <TextInput
            ref="0"
            keyboardType="numeric"
            style={styles.fieldInput}
            onChangeText={(vekt) => this.setState({vekt})}
            value={this.state.vekt}
            returnKeyType="next"
            placeholder="Vekt"
            onSubmitEditing={() => this.focusNextField('1')}
            />
          <TextInput
            ref="1"
            style={styles.fieldInput}
            onChangeText={(produkt) => this.setState({produkt})}
            value={this.state.produkt}
            returnKeyType="next"
            placeholder="Produktnavn"
            onSubmitEditing={() => this.focusNextField('2')}
            />

          <TextInput
          style={styles.fieldInput}
          ref="2"
          keyboardType="numeric"
          onChangeText={(pris) => this.setState({pris})}
          value={this.state.pris}
           returnKeyType="next" 
           placeholder="Pris"
           onSubmitEditing={() => this.focusNextField('3')}
           />

          <TextInput
          style={styles.fieldInput}
          ref="3"
          keyboardType="numeric"
          onChangeText={(alko) => this.setState({alko})}
          value={this.state.alko} 
          returnKeyType="next"
          placeholder="Alkohol %"
          onSubmitEditing={() => this.focusNextField('4')}
          />

          <TextInput
          style={styles.fieldInput}
          ref="4"
          keyboardType="numeric"
          onChangeText={(vol) => this.setState({vol})}
          value={this.state.vol} 
          returnKeyType="go" 
          placeholder="Volum (liter)"
          onSubmitEditing={() => this.regnUt()}
          />
        </View>
      </View>
</TouchableWithoutFeedback>

    <TouchableNativeFeedback
        onPress={() => this.regnUt()}
        background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Regn ut!</Text>
      </View>
    </TouchableNativeFeedback>
     

      <View style={styles.utregnContainer}>
      <ScrollView>
        <Text style={styles.sisteTitle}>Dine siste beregninger:</Text>
        {this.visUtregninger()}
      </ScrollView>
      </View> 
      
  </View>
    );
  }
}

var styles = StyleSheet.create({
  fieldInfo: {
    padding: 16,
    textAlign: "right",
    color: "#ffffff"
  },
  fieldInput: {
    color: "#ffffff"
  },
  buttonText: {
    textAlign: "center",
    margin: 12,
    fontSize: 18,
    color: "#ffffff"
  },
  lastCalc: {
    textAlign: "center",
    margin: 15,
    fontSize: 18,
    color: "#ffffff"
  },
  appContainer: {
    flex: 1,
    backgroundColor: "#6E3667"
  },
  inputContainer: {
    flex: 5,
    flexDirection: "row"
  },
  infoRows: {
    width: 200,
    height: 100
  },
  inputRows: {
    width: 100,
    height: 100
  },
  buttonContainer: {
    flex: 0.7,
    margin: 10,
    borderRadius: 5,
    height: 40,
    backgroundColor: "#88D317"
  },
  sisteTitleContainer: {
    flex: 1.2,
    backgroundColor: "#6E3667"
  },
  sisteTitle: {
    textAlign: "center",
    margin: 15,
    fontSize: 13,
    color: "#ffffff"
  },
  utregnContainer: {
    flex: 2,
    backgroundColor: "#1A0315",
    paddingBottom: 0
  },
  scrollConatiner: {
    flex: 3
  }

})

export default FullKalkulatoren