import React, {useState} from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [color, setColor] = useState('#ffffff');

  const colorChng = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setColor(color);
  };

  return (
    <>
      <StatusBar backgroundColor={color} />
      <View style={[styles.container, {backgroundColor: color}]}>
        <TouchableOpacity onPress={colorChng}>
          <View
            style={[
              styles.actionBtn,
              {backgroundColor: color ? 'orange' : 'blue'},
            ]}>
            <Text style={styles.actionBtnTxt}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    fontSize: 24,
    color: 'white',
    textTransform: 'uppercase',
  },
});

export default App;
