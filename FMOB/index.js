import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import ProfileStack from './ProfileStack';

const MainApp = () => (
  <ProfileStack />
);

AppRegistry.registerComponent(appName, () => MainApp);

export default class App extends Component {
  state = {
    username: '',
    password: ''
  };

  handleUsername = (text) => {
    this.setState({ username: text });
  };

  handlePassword = (text) => {
    this.setState({ password: text });
  };

  handleSignIn = () => {
    const { username, password } = this.state;
    alert(`Signing in with ${username} and ${password}`);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Flashmob</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={this.handleUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={this.handlePassword}
        />
        <TouchableOpacity style={styles.signInButton} onPress={this.handleSignIn}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 50
  },
  input: {
    height: 40,
    width: 200,
    marginBottom: 20,
    padding: 10,
    borderColor: '#ffffff',
    borderWidth: 1
  },
  signInButton: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5
  },
  signInText: {
    fontWeight: 'bold',
    color: '#000000'
  }
});