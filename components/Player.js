import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

import PlayerHeader from './player/PlayerHeader';
import PlayerHealth from './player/PlayerHealth';
import PlayerMana from './player/PlayerMana';
import ManaSettingsModal from './player/ManaSettingsModal';
import PlayerSettingsModal from './player/PlayerSettingsModal';

const images = {
  mountain: {
    imgName: 'mountain',
    uri: require('../assets/images/mountain.jpeg'),
  },
  swamp: {
    imgName: 'swamp',
    uri: require('../assets/images/swamp.jpeg'),
  },
};

const Player = ({playerState, isFlipped, updatePlayerFn}) => {
  const [manaModalVisible, setManaModalVisible] = useState(false);
  const [playerSettingsModalVisible, setPlayerSettingsModalVisible] =
    useState(false);

  const addLifePoint = () => {
    const newPlayerData = {...playerState};
    newPlayerData.health++;
    updatePlayerFn(newPlayerData);
  };

  const removeLifePoint = () => {
    const newPlayerData = {...playerState};
    newPlayerData.health--;
    updatePlayerFn(newPlayerData);
  };

  const showManaModal = () => {
    setManaModalVisible(true);
  };

  const closeManaModal = newManaPool => {
    setManaModalVisible(false);
    updatePlayerFn({...playerState, manaPool: newManaPool});
  };

  const showPlayerSettingsModal = () => {
    setPlayerSettingsModalVisible(true);
  };

  const closePlayerSettingsModal = newPlayerState => {
    setPlayerSettingsModalVisible(false);
    updatePlayerFn({...playerState, ...newPlayerState});
  };

  return (
    <View style={isFlipped ? styles.flippedContainer : styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={images[playerState.background].uri}>
        <PlayerHeader
          playerName={playerState.name}
          showPlayerSettingsFn={showPlayerSettingsModal}
        />

        <PlayerHealth
          playerHealth={playerState.health}
          removeLifePointFn={removeLifePoint}
          addLifePointFn={addLifePoint}
        />
        <TouchableOpacity onPress={showManaModal}>
          <PlayerMana manaPool={playerState.manaPool} />
        </TouchableOpacity>
      </ImageBackground>

      <Modal
        animationType="slide"
        transparent={true}
        visible={manaModalVisible}
        onRequestClose={() => {
          setDieModalVisible(!manaModalVisible);
        }}>
        <ManaSettingsModal
          closeModalFn={closeManaModal}
          manaPool={playerState.manaPool}
        />
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={playerSettingsModalVisible}
        onRequestClose={() => {
          setDieModalVisible(!playerSettingsModalVisible);
        }}>
        <PlayerSettingsModal
          closeModalFn={closePlayerSettingsModal}
          playerName={(playerState.name, playerState.color)}
        />
      </Modal>
    </View>
  );
};

Player.defaultProps = {
  title: 'Shopping List',
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '50%',
  },
  flippedContainer: {
    width: '100%',
    height: '50%',
    transform: [{rotate: '180deg'}],
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});
export default Player;
