import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

const Directory = (props) => {
  const renderDirectoryItem = ({ item }) => {
    return (
      <ListItem
        title={item.name}
        subtitle={item.description}
        onPress={() => props.onPress(item.id)}
        leftAvatar={{ source: require('./images/react-lake.jpg') }}
      />
    );
  }; //ListItem comes with its own onPress prop. The second onPress here(in the callback function) has been handed down from Directory(just used the same function name for convenience)
  return (
    <FlatList
      data={props.campsites}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default Directory;
