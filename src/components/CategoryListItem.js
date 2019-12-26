import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Skii from '../../assets/skii.png';

export default class CategoryListItem extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Category list item</Text>
        <Image source={Skii} style={styles.image} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#ececec',
    alignItems: 'center',
    borderRadius: 4,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  image: {
    width: 64,
    height: 64,
  },
});
