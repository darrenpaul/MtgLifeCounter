import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const images = {
  die1: {
    imgName: 'die01',
    uri: require('../assets/images/die_01.png'),
  },
  die2: {
    imgName: 'die02',
    uri: require('../assets/images/die_02.png'),
  },
  die3: {
    imgName: 'die03',
    uri: require('../assets/images/die_03.png'),
  },
  die4: {
    imgName: 'die04',
    uri: require('../assets/images/die_04.png'),
  },
  die5: {
    imgName: 'die05',
    uri: require('../assets/images/die_05.png'),
  },
  die6: {
    imgName: 'die06',
    uri: require('../assets/images/die_06.png'),
  },
};

const screen = Dimensions.get('screen');

const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const DiceRollModal = ({closeModalFn}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={() => closeModalFn()}>
        <View style={styles.innerContainer}>
          <ImageBackground
            style={styles.backgroundImage}
            source={require('../assets/images/wood_panel_square.jpg')}>
            <Image
              style={styles.image}
              source={(uri = images[`die${rollDie()}`].uri)}
            />
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    // backgroundColor: 'black',
    // opacity: 0.7,
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: screen.width,
    height: screen.width,
    borderRadius: screen.width / 2,
    overflow: 'hidden',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  image: {
    width: '50%',
    height: '50%',
  },
});

export default DiceRollModal;
