import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const PlayerHealth = ({playerHealth, removeLifePointFn, addLifePointFn}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => removeLifePointFn()}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>

      <Text style={styles.text}>{playerHealth}</Text>

      <TouchableOpacity onPress={() => addLifePointFn()}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  buttonText: {fontSize: 80, color: '#fff', fontFamily: 'Luminari-Regular'},
  text: {fontSize: 100, color: '#fff', fontFamily: 'Luminari-Regular'},
});

export default PlayerHealth;
