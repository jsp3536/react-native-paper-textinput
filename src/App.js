import React, { Component } from 'react';
import { Button, Image, View } from 'react-native';
import { TextInput } from 'react-native-paper';

class App extends Component {
  state = {
    firstName: '',
    lastName: ''
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          resizeMode="contain"
          style={{ height: 80 }}
          source={require('./react.png')}
        />
        {/* <img src={require('./react.png')} style={{height: 80, width: 300}} /> */ }
        <TextInput
          label="First Name"
          placeholder="First Name"
          value={this.state.firstName}
          onChangeText={text => this.setState({ firstName: text })}
        />
        <TextInput
          label="Last Name"
          placeholder="Last Name"
          value={this.state.lastName}
          onChangeText={text => this.setState({ lastName: text })}
        />
        <Button title="test" />
      </View>
    );
  }
}
export default App;
