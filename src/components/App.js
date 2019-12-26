import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import CategoryListItem from './CategoryListItem';

export default class App extends React.PureComponent {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 16,
  },
});
