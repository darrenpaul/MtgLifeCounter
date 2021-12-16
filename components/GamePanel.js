import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

const GamePanel = ({ResetGameFn, showDieModalFn}) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.backgroundImage}
        resizeMode="stretch"
        source={require('../assets/images/wood_panel.jpeg')}>
        <View style={styles.container}>
          <Icon
            style={styles.icon}
            name="redo"
            size={30}
            onPress={ResetGameFn}
          />
          <Icon
            style={styles.icon}
            name="dice-six"
            size={60}
            onPress={showDieModalFn}
          />
          <Icon style={styles.icon} name="cog" size={30} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  icon: {
    color: '#fff',
  },
});

export default GamePanel;
