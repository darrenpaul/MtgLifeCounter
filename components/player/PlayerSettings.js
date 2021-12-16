import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

const PlayerHealth = ({playerName}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{playerName}</Text>
      <Icon style={styles.icon} name="user-cog" size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingBottom: 0,
  },
  text: {
    color: '#fff',
    fontFamily: 'Luminari-Regular',
    fontSize: 20,
  },
  icon: {
    color: '#fff',
  },
});

export default PlayerHealth;
