import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import houseData from './data/houseData';
export default class HouseTourVR extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Room Selection
          </Text>
          <Text>
            {houseData.House.roomName}
          </Text>
        </View>


        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Room Info
          </Text>
          <Text>
            {houseData.House.info}
          </Text>
        </View>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'space-between',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
});

AppRegistry.registerComponent('HouseTourVR', () => HouseTourVR);
