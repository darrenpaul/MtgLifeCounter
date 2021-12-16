import React, {useState} from 'react';
import {View, Modal, Text, StyleSheet, Pressable} from 'react-native';

import GamePanel from './components/GamePanel';
import Player from './components/Player';
import DiceRollModal from './components/DiceRollModal';

const App = () => {
  // STATES
  const [dieModalVisible, setDieModalVisible] = useState(false);
  const [playerOne, setPlayerOne] = useState({
    health: 10,
    name: 'Lord Potato',
    manaPool: {
      red: 0,
      blue: 0,
      green: 0,
      black: 0,
      white: 0,
    },
    background: 'mountain',
  });
  const [playerTwo, setPlayerTwo] = useState({
    health: 10,
    name: 'Queen Pea',
    manaPool: {
      red: 0,
      blue: 0,
      green: 0,
      black: 0,
      white: 0,
    },
    background: 'swamp',
  });

  const updatePlayerOne = newState => {
    setPlayerOne(newState);
  };

  const updatePlayerTwo = newState => {
    setPlayerTwo(newState);
  };

  const ResetGame = () => {
    const newPlayerOneData = {...playerOne};
    newPlayerOneData.health = 20;
    newPlayerOneData.manaPool = {
      red: 0,
      blue: 0,
      green: 0,
      black: 0,
      white: 0,
    };
    const newPlayerTwoData = {...playerTwo};
    newPlayerTwoData.health = 20;
    newPlayerTwoData.manaPool = {
      red: 0,
      blue: 0,
      green: 0,
      black: 0,
      white: 0,
    };
    setPlayerOne(newPlayerOneData);
    setPlayerTwo(newPlayerTwoData);
  };

  const showDieModal = () => {
    setDieModalVisible(true);
  };

  const closeDieModal = () => {
    setDieModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Player
        playerState={playerOne}
        isFlipped={true}
        updatePlayerFn={updatePlayerOne}
      />

      <GamePanel ResetGameFn={ResetGame} showDieModalFn={showDieModal} />

      <Player playerState={playerTwo} updatePlayerFn={updatePlayerTwo} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={dieModalVisible}
        onRequestClose={() => {
          setDieModalVisible(!dieModalVisible);
        }}>
        <DiceRollModal closeModalFn={closeDieModal} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: 94,
  },
});

export default App;
