import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const getRandomColor = () => {
  const hexRange = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexRange[Math.floor(Math.random() * 16)];
  }
  return color;
};

function App(): JSX.Element {
  const [colors, setColors] = useState({
    bg: '#32cd31',
    shape1: '#ff6347',
    shape2: '#4682b4',
    shape3: '#32cd32',
  });

  const colorChng = () => {
    setColors({
      bg: getRandomColor(),
      shape1: getRandomColor(),
      shape2: getRandomColor(),
      shape3: getRandomColor(),
    });
  };

  return (
    <>
      <StatusBar backgroundColor={colors.bg} />
      <View style={[styles.container, {backgroundColor: colors.bg}]}>
        {/* Shape 1: Circle */}
        <View
          style={[
            styles.shape,
            styles.circle,
            {backgroundColor: colors.shape1},
          ]}
        />

        {/* Shape 2: Square */}
        <View
          style={[
            styles.shape,
            styles.square,
            {backgroundColor: colors.shape2},
          ]}
        />

        {/* Shape 3: Rectangle */}
        <View
          style={[
            styles.shape,
            styles.rectangle,
            {backgroundColor: colors.shape3},
          ]}
        />

        {/* Button to Change Colors */}
        <TouchableOpacity onPress={colorChng}>
          <View style={styles.actionBtn}>
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
  shape: {
    marginVertical: 10,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50, // Makes it circular
  },
  square: {
    width: 100,
    height: 100,
  },
  rectangle: {
    width: 150,
    height: 100,
  },
  actionBtn: {
    marginTop: 20,
    borderRadius: 12,
    backgroundColor: 'orange',
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
