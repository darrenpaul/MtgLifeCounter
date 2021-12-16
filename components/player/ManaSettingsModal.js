import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Pressable,
} from 'react-native';

import ManaPoolController from './ManaPoolController';

const ManaSettings = ({manaPool, closeModalFn}) => {
  const [currentManaPool, setCurrentManaPool] = useState(manaPool);

  const updateManaPool = mana => {
    const newManaPool = {...currentManaPool, ...mana};
    setCurrentManaPool(newManaPool);
  };

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../../assets/images/wood_panel_square.jpg')}>
      <View style={styles.innerContainer}>
        <ManaPoolController
          color="red"
          value={currentManaPool.red}
          updateManaPoolFn={updateManaPool}
        />
        <ManaPoolController
          color="blue"
          value={currentManaPool.blue}
          updateManaPoolFn={updateManaPool}
        />
        <ManaPoolController
          color="green"
          value={currentManaPool.green}
          updateManaPoolFn={updateManaPool}
        />
        <ManaPoolController
          color="black"
          value={currentManaPool.black}
          updateManaPoolFn={updateManaPool}
        />
        <ManaPoolController
          color="white"
          value={currentManaPool.white}
          updateManaPoolFn={updateManaPool}
        />

        <Pressable
          style={styles.button}
          onPress={() => closeModalFn(currentManaPool)}>
          <Text style={styles.buttonText}>Save</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    // backgroundColor: 'black',
    // opacity: 0.7,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 20,
    paddingVertical: 80,
  },
  button: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 100,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Luminari-Regular',
  },
});

export default ManaSettings;
