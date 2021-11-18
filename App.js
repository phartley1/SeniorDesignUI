import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';
import { arc } from 'd3';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
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
  const [buttonPopup2, setButtonPopup2] = useState(false);
  const [buttonPopup3, setButtonPopup3] = useState(false);
  const [buttonPopup4, setButtonPopup4] = useState(false);
  const [buttonPopup5, setButtonPopup5] = useState(false);
  
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
      <Button 
        title= "Turbine/Generator" 
        onPress={() => setButtonPopup2(true)}
      />
      <Button 
        title= "Condenser" 
        onPress={() => setButtonPopup3(true)}
      />
      <Button 
        title= "Wood Dryer" 
        onPress={() => setButtonPopup4(true)}
      />
      <Button 
        title= "Gasifier" 
        onPress={() => setButtonPopup5(true)}
      />
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <a href="https://www.google.com/search?q=boilers&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiPlKe0maL0AhWOhXIEHbZHBdsQ_AUoAnoECAMQBA&biw=683&bih=668&dpr=1.3" target="_blank">
                    <button>Go!</button>
        </a>
        <h3>BOILER</h3>
        <p>The boiler is the component of the power plant where the biomass is converted into heat energy. 
          Biomass is put inside the boiler where it is burned, which releases energy stored in the biomass 
          in the form of heat. This heat is used to convert liquid water into superheated steam, which is then directed towards the turbine.
          Another product of burning fuel is exhaust gas, including carbon dioxide, methane, and nitrous oxide. 
          In a normal power plant, this exhaust would just be released into the atmosphere. In the Stored Solar bio-hub, 
          this gas would be diverted to other co-hosts where the gas can be utilized (ex. greenhouses)</p>
      </Popup>

      <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2}>
        <a href="https://www.google.com/search?q=turbine&tbm=isch&ved=2ahUKEwiz0IWLnqL0AhVGrHIEHfSkCwcQ2-cCegQIABAA&oq=turbine&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyCAgAEIAEELEDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgAELEDEEM6BAgAEEM6CwgAEIAEELEDEIMBOggIABCxAxCDAVDhBljnDWDgDmgAcAB4AIABiQGIAeEFkgEDNi4ymAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=SXKWYfOHHMbYytMP9MmuOA&bih=668&biw=683" target="_blank">
                    <button>Go!</button>
        </a>
        <h3>TURBINE/GENERATOR</h3>
        <p>The turbine is where heat energy is converted into mechanical energy, and the generator converts this 
          heat energy into mechanical energy. A rotating magnetic field and coil of wire creates a current in the 
          generator creating electrical power. The electrical energy created is about 30% of the total energy stored in the biomass. 
          The rest of the energy is lost in the exhaust, heating of the pipes, and in the turbine.</p>
      </Popup>

      <Popup trigger={buttonPopup3} setTrigger={setButtonPopup3}>
        <a href="https://www.google.com/search?q=condenser&tbm=isch&ved=2ahUKEwicic6MnqL0AhVqmXIEHbtOD3UQ2-cCegQIABAA&oq=condenser&gs_lcp=CgNpbWcQAzIHCAAQsQMQQzIFCAAQgAQyCAgAEIAEELEDMgQIABBDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOggIABCxAxCDAToLCAAQgAQQsQMQgwFQgh1YpTVgyjZoA3AAeACAAYgBiAHGCJIBAzYuNZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=THKWYZyzLeqyytMPu529qAc&bih=668&biw=683" target="_blank">
                    <button>Go!</button>
        </a>
        <h3>CONDENSER</h3>
        <p>In a normal power plant, the condenser's main purpose is to convert is the steam leaving the turbine into liquid water 
          that is then cycled back to the boiler for the loop to repeat the cycle. As a result of a low efficiency of the turbine, 
          there is a significant amount of excess hear that leaves the condenser, which can be diverted to the aquaculture industry 
          to maintain temperature levels in order to, as an example, cultivate shrimp in the New England area.
          Much of the excess heat can be diverted to various areas around the power plant to allow for more efficient heat transfer 
          and maintaining the longevity of equipment. As an example, heat can be diverted in order to create superheated steam without much moisture, 
          which can cause corrosion in pipes. Moreover, during the winter, it's critical the pipes do not create too large of a temperature 
          differential or the pipes will freeze. Likewise, during the summer, the temperature differential must be large enough to allow 
          for proper heat transfer around the system. Diverting heat from the condenser allows the power plant to operate better while 
          also playing an active role in helping local industries.</p>
      </Popup>

      <Popup trigger={buttonPopup4} setTrigger={setButtonPopup4}>
        <a href="https://www.google.com/search?q=wood+dryer&tbm=isch&ved=2ahUKEwif4qeXnqL0AhUjhHIEHfq6DwIQ2-cCegQIABAA&oq=wood+dryer&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgYIABAFEB4yBggAEAUQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjoHCAAQsQMQQzoICAAQgAQQsQM6BAgAEEM6CwgAEIAEELEDEIMBULAKWJoTYMYUaABwAHgAgAGXAYgBzAiSAQM3LjSYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=Y3KWYd-kC6OIytMP-vW-EA&bih=668&biw=683" target="_blank">
                    <button>Go!</button>
        </a>
        <h3>WOOD DRYER</h3>
        <p>Wood dryers are used to divert fuel in the boiler and used to sequester carbon in the gasifier.
          Heat can also be diverted from the condenser to wood dryers. Wood with a lot of moisture allows 
          for slower and less efficient burning in the boiler, so heat is diverted from the boiler in order
           to dry the wood of this moisture. Even this simple process leads to an increase in efficiency of 
           the whole system by about 4%.</p>
      </Popup>

      <Popup trigger={buttonPopup5} setTrigger={setButtonPopup5}>
        <a href="https://www.google.com/search?q=gasifier&tbm=isch&ved=2ahUKEwj6qpeZn6L0AhVXo3IEHXVnBSIQ2-cCegQIABAA&oq=gasifier&gs_lcp=CgNpbWcQAzIECAAQQzIFCAAQgAQyBQgAEIAEMgQIABBDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgYIABAHEB46BggAEAgQHjoECAAQAzoLCAAQgAQQsQMQgwE6CAgAEIAEELEDUPQFWPcNYIcPaABwAHgAgAF6iAGjB5IBAzMuNpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=c3OWYbqlIdfGytMP9c6VkAI&bih=668&biw=683" target="_blank">
                    <button>Go!</button>
        </a>
        <h3>GASIFIER</h3>
        <p>The gasifier uses a chemical process in order to create biochar.
          The wood dryers feed biomass into the gasifier. The biochar product can be 
          exported in the form of GAC and PAC (creating a revenue stream for the community), or buried 
          back into the ground. As a result, the short-cycle carbon that is stored in plants is converted 
          into long-term carbon that will take thousands of years creating a carbon-negative process.</p>
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