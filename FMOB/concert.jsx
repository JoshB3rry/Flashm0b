import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Concert = ({ route, navigation }) => {
  const { title } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.descriptionText}>Hot New {title} concert</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
});

export default Concert;
