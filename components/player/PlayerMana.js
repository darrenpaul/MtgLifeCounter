import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Mana from './Mana';

const PlayerMana = ({manaPool}) => {
  return (
    <View style={styles.container}>
      <Mana color="red" value={manaPool.red} />
      <Mana color="blue" value={manaPool.blue} />
      <Mana color="green" value={manaPool.green} />
      <Mana color="black" value={manaPool.black} />
      <Mana color="white" value={manaPool.white} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 0,
  },
});

export default PlayerMana;
