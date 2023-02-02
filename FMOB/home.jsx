import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const concerts = [
  { id: 1, name: 'Concert 1' },
  { id: 2, name: 'Concert 2' },
  { id: 3, name: 'Concert 3' },
  { id: 4, name: 'Concert 4' },
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Flashmob</Text>
      <View style={styles.concertsContainer}>
        {concerts.map(concert => (
          <TouchableOpacity
            key={concert.id}
            style={styles.concertButton}
            onPress={() => navigation.navigate('Concert', { concert })}
          >
            <Text style={styles.concertText}>{concert.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  concertsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  concertButton: {
    backgroundColor: '#333',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  concertText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Home;
