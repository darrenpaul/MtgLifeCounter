import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import manaImages from '../../assets/data/mana_images';

const Mana = ({color, value}) => {
  let imgSource = '';

  if (color) {
    imgSource = manaImages[color].uri;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
      <Image style={styles.image} source={imgSource} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  image: {
    width: 50,
    height: 50,
  },
  text: {
    color: '#fff',
    fontFamily: 'Luminari-Regular',
    fontSize: 30,
  },
});

export default Mana;
