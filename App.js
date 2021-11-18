import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';
import { arc } from 'd3';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Popup from './components/Popup';

const width = 960;
const height = 500;
const CX = width/2;
const CY = height/2;
const strokewidth = 20;
const EOSX = 90;
const EOSY = 100;
const eyerad = 40;

function handlemouseenter(e) {
  console.log(e);
}

export default function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  
  return (
    <View style={styles.container}>
      {/* <svg width = {960} height = {500}>
        <circle
          cx = {CX-50}
          cy = {CY}
          r = {CY - strokewidth / 2}
          fill = "teal"
          stroke = "teal"
          strokeWidth={strokewidth}
          onMouseEnter={handlemouseenter}        **messing with visuals**
        />
      </svg> */}

      <StatusBar style="auto" />
      <Button 
        title= "boiler" 
        onPress={() => setButtonPopup(true)}
      />
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>BOILER</h3>
        <p>The boiler is the component of the power plant where the biomass is converted into heat energy. 
          Biomass is put inside the boiler where it is burned, which releases energy stored in the biomass in the form of heat. This heat is used to convert liquid water into superheated steam, which is then directed towards the turbine.
          Another product of burning fuel is exhaust gas, including carbon dioxide, methane, and nitrous oxide. In a normal power plant, this exhaust would just be released into the atmosphere. In the Stored Solar bio-hub, this gas would be diverted to other co-hosts where the gas can be utilized (ex. greenhouses)</p>
      </Popup>

      <Button 
        title= "Turbine/Generator" 
        onPress={() => setButtonPopup(true)}
      />
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>TURBINE/GENERATOR</h3>
        <p>The turbine is where heat energy is converted into mechanical energy, and the generator converts this heat energy into mechanical energy",
            A rotating magnetic field and coil of wire creates a current in the generator creating electrical power. The electrical energy created is about 30% of the total energy stored in the biomass. The rest of the energy is lost in the exhaust, heating of the pipes, and in the turbine.</p>
      </Popup>

    </View>
  );
}

<View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

const AppButton = props => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
)