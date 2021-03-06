import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';

const Directory = (props) => {
  const [campsites, setCampsites] = useState(CAMPSITES);

  const { navigate } = props.navigation;
  const renderDirectoryItem = ({ item }) => {
    return (
      <ListItem
        title={item.name}
        subtitle={item.description}
        onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
        leftAvatar={{ source: require('./images/react-lake.jpg') }}
      />
    );
  }; //ListItem comes with its own onPress prop. The second onPress here(in the callback function) has been handed down from Directory(just used the same function name for convenience)

  return (
    <FlatList
      data={campsites}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

Directory.navigationOptions = (screenProps) => ({
  title: 'Directory',
});

export default Directory;
