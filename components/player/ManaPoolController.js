import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

import manaImages from '../../assets/data/mana_images';

const ManaPoolController = ({color, value, updateManaPoolFn}) => {
  let imgSource = '';

  if (color) {
    imgSource = manaImages[color].uri;
  }

  const removeManaPoint = () => {
    const mana = {};
    mana[color] = parseInt(value) - 1;
    updateManaPoolFn(mana);
  };
  const addManaPoint = () => {
    const mana = {};
    mana[color] = parseInt(value) + 1;
    updateManaPoolFn(mana);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imgSource} />

      <View style={styles.controllerContainer}>
        <Icon
          style={styles.icon}
          name="minus"
          size={30}
          onPress={() => removeManaPoint()}
        />
        <Text style={styles.text}>{value}</Text>
        <Icon
          style={styles.icon}
          name="plus"
          size={30}
          onPress={() => addManaPoint()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', flexDirection: 'row'},
  controllerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {fontSize: 100, color: '#fff', fontFamily: 'Luminari-Regular'},
  icon: {
    color: '#fff',
    paddingHorizontal: 40,
  },
});

export default ManaPoolController;
