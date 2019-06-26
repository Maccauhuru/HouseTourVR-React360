import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
  asset
} from 'react-360';
import data from './data/houseData';
export default class HouseTourVR extends React.Component {
  state = {
    room: data.House.roomName,
    info: data.House.info,
    adjacentRooms: data.House.adjacentRooms
  }
  clickHandler(roomSelection) {
    this.setState({
      room: data[`${roomSelection}`].roomName,
      info: data[`${roomSelection}`].info,
      adjacentRooms: data[`${roomSelection}`].adjacentRooms
    })

    Environment.setBackgroundImage(asset(`./360_${data[`${roomSelection}`].img}`));

  }
  createRoomButtons(adjacentRooms) {
    let rooms = adjacentRooms;
    let buttons = [];

    rooms.map(room => (
      buttons.push(
        <VrButton key={`${room}` + '-button'} onClick={() => this.clickHandler(room)}>
          <Text style={{ backgroundColor: 'green' }}>{room}</Text>
        </VrButton>
      )
    ));
    return buttons;
  }
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>Room Selection</Text>
          <Text>{this.state.room}</Text>
          {this.createRoomButtons(this.state.adjacentRooms)}
        </View>

        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>Room Info</Text>
          <Text>{this.state.info}</Text>
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
