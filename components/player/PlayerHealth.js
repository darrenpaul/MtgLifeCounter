import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

const PlayerHealth = ({playerHealth, removeLifePointFn, addLifePointFn}) => {
  return (
    <View style={styles.container}>
      <Icon
        style={styles.icon}
        name="minus"
        size={30}
        onPress={() => removeLifePointFn()}
      />
      <Text style={styles.text}>{playerHealth}</Text>
      <Icon
        style={styles.icon}
        name="plus"
        size={30}
        onPress={() => addLifePointFn()}
      />
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
  text: {fontSize: 100, color: '#fff', fontFamily: 'Luminari-Regular'},
  icon: {
    color: '#fff',
  },
});

export default PlayerHealth;
