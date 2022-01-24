import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';

import ModalSelector from 'react-native-modal-selector';

const PlayerSettings = ({playerName, playerColor, closeModalFn}) => {
  const [name, setName] = useState(playerName);
  const [color, setColor] = useState(playerColor);

  const onNameChange = textValue => setName(textValue);
  const onColorChange = option => {
    console.log(option);
    // setColor(option);
  };

  let index = 0;
  const data = [
    {key: index++, section: true, label: 'Background Color'},
    {key: index++, label: 'Red'},
    {key: index++, label: 'Blue'},
    {key: index++, label: 'Green'},
    {key: index++, label: 'Black'},
    {key: index++, label: 'White'},
  ];

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../../assets/images/wood_panel_square.jpg')}>
      <View style={styles.innerContainer}>
        <View style={styles.groupContainer}>
          <Text style={styles.labelText}>Player Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={onNameChange}
            value={name}
            placeholder="Enter player name"
          />
        </View>

        <View style={styles.groupContainer}>
          <ModalSelector
            // style={styles.select}
            // childrenContainerStyle={styles.childrenContainerStyle}
            // selectStyle={styles.selectStyle}
            // selectTextStyle={styles.selectTextStyle}
            data={data}
            onChange={option => {
              console.log(option);
              onColorChange(option.label);
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => closeModalFn({name})}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
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
  groupContainer: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
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
  labelText: {
    color: '#fff',
    fontFamily: 'Luminari-Regular',
    fontSize: 20,
  },
  input: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
    padding: 10,
  },
  select: {
    width: '100%',
    height: 50,
    borderRadius: 10,
  },
  childrenContainerStyle: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 0,
    margin: 0,
    borderRadius: 10,
  },
  selectStyle: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    borderRadius: 10,
    // backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  selectTextStyle: {color: 'yellow'},
});

export default PlayerSettings;
